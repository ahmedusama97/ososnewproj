import { NextRequest, NextResponse } from "next/server";
import { resolveAdminUsernameFromAuthorization } from "../../../../../../lib/server/auth-store";
import { updateRequestWorkflow } from "../../../../../../lib/server/requests-store";
import { isRequestStatus } from "../../../../../../lib/request-status";
import { notifyRequestStatusUpdated } from "../../../../../../lib/server/notifications-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ referenceCode: string }> },
) {
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
  const status =
    payload.status === undefined
      ? undefined
      : isRequestStatus(payload.status)
        ? payload.status
        : null;
  const note =
    typeof payload.note === "string" && payload.note.trim()
      ? payload.note.trim()
      : undefined;
  const assignedTo =
    payload.assignedTo === undefined
      ? undefined
      : typeof payload.assignedTo === "string"
        ? payload.assignedTo
        : null;

  if (status === null) {
    return NextResponse.json(
      { message: "Invalid request status." },
      { status: 400 },
    );
  }

  if (status === undefined && note === undefined && assignedTo === undefined) {
    return NextResponse.json(
      { message: "No workflow changes were provided." },
      { status: 400 },
    );
  }

  const params = await context.params;
  const updated = await updateRequestWorkflow(params.referenceCode, {
    actor,
    status,
    note,
    assignedTo,
  });

  if (!updated) {
    return NextResponse.json({ message: "Request not found." }, { status: 404 });
  }

  if (status !== undefined) {
    await notifyRequestStatusUpdated(updated);
  }

  return NextResponse.json(updated);
}
