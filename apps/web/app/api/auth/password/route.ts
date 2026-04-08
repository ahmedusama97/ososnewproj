import { NextRequest, NextResponse } from "next/server";
import {
  changeUserPassword,
  getUserSessionCookieOptions,
  USER_TOKEN_COOKIE,
} from "../../../../lib/server/user-auth-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PATCH(request: NextRequest) {
  const payload = await request.json();
  const token = request.cookies.get(USER_TOKEN_COOKIE)?.value;

  const result = await changeUserPassword({
    token,
    currentPassword: String(payload.currentPassword ?? ""),
    newPassword: String(payload.newPassword ?? ""),
  });

  if (result.type === "unauthorized") {
    return NextResponse.json(
      { message: "Your session expired. Please log in again." },
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

  if (result.type === "unavailable") {
    return NextResponse.json(
      { message: "User accounts are unavailable right now." },
      { status: 503 },
    );
  }

  const response = NextResponse.json({ user: result.user });
  const cookie = getUserSessionCookieOptions();
  response.cookies.set({
    ...cookie,
    value: result.token,
  });

  return response;
}
