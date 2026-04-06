import { NextRequest, NextResponse } from "next/server";
import { assertAdminToken } from "../../../../lib/server/auth-store";
import { listRequests } from "../../../../lib/server/requests-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  if (!(await assertAdminToken(request.headers.get("authorization")))) {
    return NextResponse.json(
      { message: "Unauthorized admin request." },
      { status: 401 },
    );
  }

  return NextResponse.json(await listRequests());
}
