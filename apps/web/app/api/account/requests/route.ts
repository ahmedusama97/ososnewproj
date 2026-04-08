import { NextRequest, NextResponse } from "next/server";
import { listUserRequests } from "../../../../lib/server/requests-store";
import {
  getUserSessionFromToken,
  USER_TOKEN_COOKIE,
} from "../../../../lib/server/user-auth-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(USER_TOKEN_COOKIE)?.value;
  const session = await getUserSessionFromToken(token);

  if (session === undefined) {
    return NextResponse.json(
      { message: "User accounts are unavailable right now." },
      { status: 503 },
    );
  }

  if (!session) {
    return NextResponse.json(
      { message: "Your session expired. Please log in again." },
      { status: 401 },
    );
  }

  return NextResponse.json(await listUserRequests(session.user.id));
}
