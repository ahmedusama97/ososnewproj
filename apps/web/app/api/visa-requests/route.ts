import { NextRequest, NextResponse } from "next/server";
import { createRequest, listRequests } from "../../../lib/server/requests-store";
import {
  getUserSessionFromToken,
  USER_TOKEN_COOKIE,
} from "../../../lib/server/user-auth-store";

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

  return "submitted" as const;
}

export async function GET() {
  return NextResponse.json(await listRequests());
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const applicants = Array.isArray(payload.applicants) ? payload.applicants : [];
  const token = request.cookies.get(USER_TOKEN_COOKIE)?.value;
  const userSession = await getUserSessionFromToken(token);

  if (
    !payload.email ||
    !payload.phone ||
    !payload.country ||
    !payload.visaType ||
    !applicants.length
  ) {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 },
    );
  }

  if (applicants.length > 100) {
    return NextResponse.json(
      { message: "Applicants limit exceeded." },
      { status: 400 },
    );
  }

  const record = await createRequest(
    {
      fullName: String(payload.fullName ?? applicants[0]?.fullName ?? ""),
      email: String(payload.email),
      phone: String(payload.phone),
      passportNumber: String(
        payload.passportNumber ?? applicants[0]?.passportNumber ?? "",
      ),
      country: String(payload.country),
      visaType: String(payload.visaType),
      issuingCountry: payload.issuingCountry
        ? String(payload.issuingCountry)
        : undefined,
      passportExpiryDate: payload.passportExpiryDate
        ? String(payload.passportExpiryDate)
        : undefined,
      passportDocumentName: payload.passportDocumentName
        ? String(payload.passportDocumentName)
        : undefined,
      personalPhotoName: payload.personalPhotoName
        ? String(payload.personalPhotoName)
        : undefined,
      travelDate: payload.travelDate ? String(payload.travelDate) : undefined,
      status: normalizeStatus(payload.status),
      userId: userSession?.user.id,
      applicants: applicants.map((applicant: Record<string, unknown>) => ({
        fullName: String(applicant.fullName ?? "").trim(),
        nationality: String(applicant.nationality ?? "").trim(),
        passportNumber: String(applicant.passportNumber ?? "").trim(),
        issuingCountry: String(applicant.issuingCountry ?? "").trim(),
        passportIssueDate: String(applicant.passportIssueDate ?? "").trim(),
        passportExpiryDate: String(applicant.passportExpiryDate ?? "").trim(),
        passportDocumentName: String(
          applicant.passportDocumentName ?? "",
        ).trim(),
        personalPhotoName: String(applicant.personalPhotoName ?? "").trim(),
      })),
      requestContext: undefined,
    },
    {
      channel: request.headers.get("x-client-channel") ?? "web",
      userAgent: request.headers.get("user-agent") ?? "Unknown",
    },
  );

  return NextResponse.json(record, { status: 201 });
}
