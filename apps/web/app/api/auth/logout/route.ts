import { NextRequest, NextResponse } from "next/server";
import {
  getUserSessionCookieOptions,
  logoutUserAccount,
  USER_TOKEN_COOKIE,
} from "../../../../lib/server/user-auth-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const token = request.cookies.get(USER_TOKEN_COOKIE)?.value;
  await logoutUserAccount(token);

  const response = NextResponse.json({ success: true });
  const cookie = getUserSessionCookieOptions();
  response.cookies.set({
    ...cookie,
    value: "",
    maxAge: 0,
  });

  return response;
}
