import { NextRequest, NextResponse } from "next/server";
import { loginAdmin } from "../../../../../lib/server/auth-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const session = loginAdmin(
    String(payload.username ?? ""),
    String(payload.password ?? ""),
  );

  if (!session) {
    return NextResponse.json(
      { message: "Invalid admin credentials." },
      { status: 401 },
    );
  }

  return NextResponse.json(session);
}
