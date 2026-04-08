import { NextRequest, NextResponse } from "next/server";
import {
  deleteUserAccount,
  getUserSessionCookieOptions,
  USER_TOKEN_COOKIE,
} from "../../../../lib/server/user-auth-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function DELETE(request: NextRequest) {
  const payload = await request.json();
  const token = request.cookies.get(USER_TOKEN_COOKIE)?.value;

  const result = await deleteUserAccount({
    token,
    password: String(payload.password ?? ""),
  });

  if (result.type === "unauthorized") {
    return NextResponse.json(
      { message: "Your session expired. Please log in again." },
      { status: 401 },
    );
  }

  if (result.type === "invalid-password") {
    return NextResponse.json(
      { message: "Password is incorrect." },
      { status: 401 },
    );
  }

  if (result.type === "unavailable") {
    return NextResponse.json(
      { message: "User accounts are unavailable right now." },
      { status: 503 },
    );
  }

  const response = NextResponse.json({ success: true });
  const cookie = getUserSessionCookieOptions();
  response.cookies.set({
    ...cookie,
    value: "",
    maxAge: 0,
  });

  return response;
}
