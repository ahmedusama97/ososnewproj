import { NextRequest, NextResponse } from "next/server";
import { assertAdminToken } from "../../../../../../lib/server/auth-store";
import { updateRequestStatus } from "../../../../../../lib/server/requests-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function normalizeStatus(status: unknown) {
  if (
    status === "draft" ||
    status === "submitted" ||
    status === "in_review" ||
    status === "issued" ||
    status === "rejected"
  ) {
    return status;
  }

  return null;
}

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ referenceCode: string }> },
) {
  if (!(await assertAdminToken(request.headers.get("authorization")))) {
    return NextResponse.json(
      { message: "Unauthorized admin request." },
      { status: 401 },
    );
  }

  const payload = await request.json();
  const status = normalizeStatus(payload.status);
  if (!status) {
    return NextResponse.json(
      { message: "Invalid request status." },
      { status: 400 },
    );
  }

  const params = await context.params;
  const updated = await updateRequestStatus(
    params.referenceCode,
    status,
    String(payload.note ?? "تم التحديث من لوحة الإدارة"),
  );

  if (!updated) {
    return NextResponse.json({ message: "Request not found." }, { status: 404 });
  }

  return NextResponse.json(updated);
}
