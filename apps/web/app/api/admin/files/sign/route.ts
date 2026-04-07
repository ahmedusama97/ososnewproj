import { NextRequest, NextResponse } from "next/server";
import { assertAdminToken } from "../../../../../lib/server/auth-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

  const result = await response.json();
  if (!response.ok) {
    return NextResponse.json(result, { status: 502 });
  }

  return NextResponse.json({
    signedUrl: `${supabaseUrl.replace(/\/$/, "")}/storage/v1${result.signedURL}`,
  });
}
