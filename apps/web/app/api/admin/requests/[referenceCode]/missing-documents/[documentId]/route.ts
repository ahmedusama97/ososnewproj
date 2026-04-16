import { NextRequest, NextResponse } from "next/server";
import { resolveAdminUsernameFromAuthorization } from "../../../../../../../lib/server/auth-store";
import { resolveMissingDocumentRequest } from "../../../../../../../lib/server/requests-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ referenceCode: string; documentId: string }> },
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

  const params = await context.params;
  const updated = await resolveMissingDocumentRequest(
    params.referenceCode,
    params.documentId,
    actor,
  );
  const normalizedUpdated = updated as Awaited<
    ReturnType<typeof resolveMissingDocumentRequest>
  >;

  if (normalizedUpdated === null) {
    return NextResponse.json({ message: "Request not found." }, { status: 404 });
  }

  if (normalizedUpdated === false) {
    return NextResponse.json(
      { message: "Missing document request not found." },
      { status: 404 },
    );
  }

  return NextResponse.json(normalizedUpdated);
}
