import { NextRequest, NextResponse } from "next/server";
import { resolveAdminUsernameFromAuthorization } from "../../../../../../lib/server/auth-store";
import { createMissingDocumentRequest } from "../../../../../../lib/server/requests-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(
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
  const title = typeof payload.title === "string" ? payload.title.trim() : "";
  const details =
    typeof payload.details === "string" ? payload.details.trim() : "";

  if (!title || !details) {
    return NextResponse.json(
      { message: "Title and details are required." },
      { status: 400 },
    );
  }

  const params = await context.params;
  const updated = await createMissingDocumentRequest(params.referenceCode, {
    title,
    details,
    actor,
  });

  if (!updated) {
    return NextResponse.json({ message: "Request not found." }, { status: 404 });
  }

  return NextResponse.json(updated, { status: 201 });
}
