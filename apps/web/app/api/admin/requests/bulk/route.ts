import { NextRequest, NextResponse } from "next/server";
import { resolveAdminUsernameFromAuthorization } from "../../../../../lib/server/auth-store";
import { bulkUpdateRequests } from "../../../../../lib/server/requests-store";
import { isRequestStatus } from "../../../../../lib/request-status";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const actor = await resolveAdminUsernameFromAuthorization(
    request.headers.get("authorization"),
  );

  if (!actor) {
    return NextResponse.json(
      { message: "Unauthorized admin request." },
      { status: 401 },
    );
  }

  const payload = await request.json();
  const referenceCodes = Array.isArray(payload.referenceCodes)
    ? payload.referenceCodes
        .map((value: unknown) => String(value ?? "").trim())
        .filter(Boolean)
    : [];
  const status =
    payload.status === undefined
      ? undefined
      : isRequestStatus(payload.status)
        ? payload.status
        : null;
  const assignedTo =
    payload.assignedTo === undefined
      ? undefined
      : typeof payload.assignedTo === "string"
        ? payload.assignedTo
        : null;

  if (!referenceCodes.length) {
    return NextResponse.json(
      { message: "Select at least one request first." },
      { status: 400 },
    );
  }

  if (status === null) {
    return NextResponse.json(
      { message: "Invalid request status." },
      { status: 400 },
    );
  }

  if (status === undefined && assignedTo === undefined) {
    return NextResponse.json(
      { message: "No bulk update fields were provided." },
      { status: 400 },
    );
  }

  const updatedCount = await bulkUpdateRequests({
    referenceCodes,
    status,
    assignedTo,
    actor,
  });

  return NextResponse.json({ updatedCount });
}
