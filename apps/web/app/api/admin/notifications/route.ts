import { NextRequest, NextResponse } from "next/server";
import { resolveAdminUsernameFromAuthorization } from "../../../../lib/server/auth-store";
import { listNotificationEvents } from "../../../../lib/server/notifications-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const actor = await resolveAdminUsernameFromAuthorization(
    request.headers.get("authorization"),
  );

  if (!actor) {
    return NextResponse.json(
      { message: "Unauthorized admin request." },
      { status: 401 },
    );
  }

  const limitParam = request.nextUrl.searchParams.get("limit");
  const limit = limitParam ? Number(limitParam) : 50;

  return NextResponse.json(await listNotificationEvents(limit));
}
