import { NextRequest, NextResponse } from "next/server";
import { changeAdminPassword } from "../../../../../lib/server/auth-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PATCH(request: NextRequest) {
  const payload = await request.json();
  const result = await changeAdminPassword(
    request.headers.get("authorization"),
    String(payload.currentPassword ?? ""),
    String(payload.newPassword ?? ""),
  );

  if (result.type === "unauthorized") {
    return NextResponse.json(
      { message: "Unauthorized admin request." },
      { status: 401 },
    );
  }

  if (result.type === "invalid-password") {
    return NextResponse.json(
      { message: "Current password is incorrect." },
      { status: 401 },
    );
  }

  if (result.type === "invalid-length") {
    return NextResponse.json(
      { message: "New password must be at least 8 characters." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    token: result.token,
    username: result.username,
  });
}
