import { NextRequest, NextResponse } from "next/server";
import { assertAdminToken } from "../../../../../lib/server/auth-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function readSupabaseResponse(response: Response) {
  const raw = await response.text();
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return { message: raw };
  }
}

export async function POST(request: NextRequest) {
  if (!(await assertAdminToken(request.headers.get("authorization")))) {
    return NextResponse.json(
      { message: "Unauthorized admin request." },
      { status: 401 },
    );
  }

  const payload = await request.json();
  const path = String(payload.path ?? "").trim();
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const bucket = process.env.SUPABASE_STORAGE_BUCKET ?? "visa-documents";

  if (!path) {
    return NextResponse.json({ message: "File path is required." }, { status: 400 });
  }

  if (!path.includes("/")) {
    return NextResponse.json(
      {
        message:
          "This request only has a legacy filename. Re-upload the document after enabling Supabase Storage.",
      },
      { status: 409 },
    );
  }

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { message: "Supabase Storage is not configured." },
      { status: 501 },
    );
  }

  const response = await fetch(
    `${supabaseUrl.replace(/\/$/, "")}/storage/v1/object/sign/${bucket}/${path}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${serviceRoleKey}`,
        apikey: serviceRoleKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ expiresIn: 600 }),
    },
  );

  const result = await readSupabaseResponse(response);
  if (!response.ok) {
    return NextResponse.json(
      {
        message:
          String(result.message ?? result.error ?? "Supabase signed URL request failed."),
        supabaseStatus: response.status,
        bucket,
      },
      { status: 502 },
    );
  }

  const signedPath = result.signedURL ?? result.signedUrl ?? result.signed_url;
  if (!signedPath) {
    return NextResponse.json(
      { message: "Supabase did not return a signed URL." },
      { status: 502 },
    );
  }

  const storageBaseUrl = `${supabaseUrl.replace(/\/$/, "")}/storage/v1`;
  const signedUrl = String(signedPath).startsWith("http")
    ? String(signedPath)
    : `${storageBaseUrl}${String(signedPath).startsWith("/") ? "" : "/"}${signedPath}`;

  return NextResponse.json({ signedUrl });
}
