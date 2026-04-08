import { NextRequest, NextResponse } from "next/server";
import {
  getUserSessionCookieOptions,
  registerUserAccount,
} from "../../../../lib/server/user-auth-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const result = await registerUserAccount({
    fullName: String(payload.fullName ?? ""),
    email: String(payload.email ?? ""),
    password: String(payload.password ?? ""),
    locale: String(payload.locale ?? "ar"),
  });

  if (result.type === "invalid-name") {
    return NextResponse.json(
      { message: "Full name must be at least 3 characters." },
      { status: 400 },
    );
  }

  if (result.type === "invalid-email") {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (result.type === "invalid-password-length") {
    return NextResponse.json(
      { message: "Password must be at least 8 characters." },
      { status: 400 },
    );
  }

  if (result.type === "already-exists") {
    return NextResponse.json(
      { message: "An account with this email already exists." },
      { status: 409 },
    );
  }

  if (result.type === "unavailable") {
    return NextResponse.json(
      { message: "User accounts are unavailable right now." },
      { status: 503 },
    );
  }

  const response = NextResponse.json({ user: result.user }, { status: 201 });
  const cookie = getUserSessionCookieOptions();
  response.cookies.set({
    ...cookie,
    value: result.token,
  });

  return response;
}
