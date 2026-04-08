import { NextRequest, NextResponse } from "next/server";
import {
  getUserSessionCookieOptions,
  loginUserAccount,
} from "../../../../lib/server/user-auth-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const result = await loginUserAccount({
    email: String(payload.email ?? ""),
    password: String(payload.password ?? ""),
  });

  if (result.type === "invalid-credentials") {
    return NextResponse.json(
      { message: "Email or password is incorrect." },
      { status: 401 },
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
