import { NextRequest, NextResponse } from "next/server";
import { listRequests } from "../../../lib/server/requests-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function normalize(value: string) {
  return value.replaceAll(" ", "").replaceAll("-", "").toLowerCase();
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const referenceCode = String(payload.referenceCode ?? "").trim().toUpperCase();
  const verifier = normalize(String(payload.verifier ?? ""));

  if (!referenceCode || !verifier) {
    return NextResponse.json(
      { message: "Reference code and email or phone are required." },
      { status: 400 },
    );
  }

  const requests = await listRequests();
  const record = requests.find(
    (item) => item.referenceCode.toUpperCase() === referenceCode,
  );

  if (!record) {
    return NextResponse.json({ message: "Request not found." }, { status: 404 });
  }

  const emailMatches = normalize(record.email) === verifier;
  const phoneMatches = normalize(record.phone) === verifier;

  if (!emailMatches && !phoneMatches) {
    return NextResponse.json(
      { message: "The verification value does not match this request." },
      { status: 403 },
    );
  }

  return NextResponse.json({
    referenceCode: record.referenceCode,
    status: record.status,
    country: record.country,
    visaType: record.visaType,
    createdAt: record.createdAt,
    applicantsCount: record.applicants.length,
    latestNote: record.statusHistory[0]?.note ?? "Request received",
    history: record.statusHistory.map((event) => ({
      toStatus: event.toStatus,
      note: event.note,
      createdAt: event.createdAt,
    })),
  });
}
