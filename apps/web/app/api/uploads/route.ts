import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function cleanFileName(fileName: string) {
  return fileName.replace(/[^a-zA-Z0-9._-]/g, "-").slice(0, 120) || "document";
}

async function readSupabaseError(response: Response) {
  const raw = await response.text();
  if (!raw) {
    return "Supabase Storage request failed.";
  }

  try {
    const parsed = JSON.parse(raw) as {
      message?: string;
      error?: string;
      statusCode?: string | number;
    };

    return parsed.message ?? parsed.error ?? raw;
  } catch {
    return raw;
  }
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const fileName = cleanFileName(String(payload.fileName ?? ""));
  const contentType = String(payload.contentType ?? "application/octet-stream");
  const base64 = String(payload.base64 ?? "");

  if (!base64 || !fileName) {
    return NextResponse.json(
      { message: "File payload is required." },
      { status: 400 },
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const bucket = process.env.SUPABASE_STORAGE_BUCKET ?? "visa-documents";

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({
      uploaded: false,
      name: fileName,
      path: fileName,
      message: "Supabase Storage is not configured yet.",
    });
  }

  const binary = Buffer.from(base64, "base64");
  const objectPath = `requests/${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${fileName}`;
  const uploadUrl = `${supabaseUrl.replace(/\/$/, "")}/storage/v1/object/${bucket}/${objectPath}`;

  const response = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serviceRoleKey}`,
      apikey: serviceRoleKey,
      "Content-Type": contentType,
      "x-upsert": "false",
    },
    body: binary,
  });

  if (!response.ok) {
    const message = await readSupabaseError(response);
    return NextResponse.json(
      {
        message: `Supabase Storage upload failed: ${message}`,
        supabaseStatus: response.status,
        bucket,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    uploaded: true,
    name: fileName,
    path: objectPath,
    bucket,
  });
}
