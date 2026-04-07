import { getPrismaClient } from "../client";

export type RequestContextRecord = {
  channel?: string;
  userAgent?: string;
  deviceType?: string;
  browser?: string;
  operatingSystem?: string;
};

export type ApplicantRecord = {
  fullName: string;
  nationality: string;
  passportNumber: string;
  issuingCountry: string;
  passportIssueDate: string;
  passportExpiryDate: string;
  passportDocumentName: string;
  personalPhotoName: string;
};

export type VisaRequestRecord = {
  id: string;
  referenceCode: string;
  fullName: string;
  email: string;
  phone: string;
  passportNumber: string;
  country: string;
  visaType: string;
  issuingCountry?: string;
  passportExpiryDate?: string;
  passportDocumentName?: string;
  personalPhotoName?: string;
  travelDate?: string;
  status: "draft" | "submitted" | "in_review" | "issued" | "rejected";
  applicants: ApplicantRecord[];
  requestContext?: RequestContextRecord;
  createdAt: string;
  statusHistory: Array<{
    fromStatus: string | null;
    toStatus: string;
    note: string;
    createdAt: string;
  }>;
};

type CreatePayload = Omit<
  VisaRequestRecord,
  "id" | "referenceCode" | "createdAt" | "statusHistory"
>;

type RequestRow = {
  id: string;
  referenceCode: string;
  fullName: string;
  email: string;
  phone: string;
  passportNumber: string;
  visaType: string;
  issuingCountry: string | null;
  passportExpiryDate: string | null;
  passportDocumentName: string | null;
  personalPhotoName: string | null;
  travelDate: string | null;
  status: VisaRequestRecord["status"];
  createdAt: Date;
  country: { nameEn: string };
  applicants: ApplicantRecord[];
  requestContext: {
    channel: string | null;
    userAgent: string | null;
    deviceType: string | null;
    browser: string | null;
    operatingSystem: string | null;
  } | null;
  statusHistory: Array<{
    fromStatus: string | null;
    toStatus: string;
    note: string;
    createdAt: Date;
  }>;
};

function mapStatus(status: string): VisaRequestRecord["status"] {
  if (
    status === "draft" ||
    status === "submitted" ||
    status === "in_review" ||
    status === "issued" ||
    status === "rejected"
  ) {
    return status;
  }

  return "submitted";
}

function mapRecord(request: RequestRow): VisaRequestRecord {
  return {
    id: request.id,
    referenceCode: request.referenceCode,
    fullName: request.fullName,
    email: request.email,
    phone: request.phone,
    passportNumber: request.passportNumber,
    country: request.country.nameEn,
    visaType: request.visaType,
    issuingCountry: request.issuingCountry ?? undefined,
    passportExpiryDate: request.passportExpiryDate ?? undefined,
    passportDocumentName: request.passportDocumentName ?? undefined,
    personalPhotoName: request.personalPhotoName ?? undefined,
    travelDate: request.travelDate ?? undefined,
    status: mapStatus(request.status),
    applicants: request.applicants.map((applicant) => ({
      fullName: applicant.fullName,
      nationality: applicant.nationality,
      passportNumber: applicant.passportNumber,
      issuingCountry: applicant.issuingCountry,
      passportIssueDate: applicant.passportIssueDate,
      passportExpiryDate: applicant.passportExpiryDate,
      passportDocumentName: applicant.passportDocumentName,
      personalPhotoName: applicant.personalPhotoName,
    })),
    requestContext: request.requestContext
      ? {
          channel: request.requestContext.channel ?? undefined,
          userAgent: request.requestContext.userAgent ?? undefined,
          deviceType: request.requestContext.deviceType ?? undefined,
          browser: request.requestContext.browser ?? undefined,
          operatingSystem: request.requestContext.operatingSystem ?? undefined,
        }
      : undefined,
    createdAt: request.createdAt.toISOString(),
    statusHistory: request.statusHistory
      .sort((left, right) => right.createdAt.getTime() - left.createdAt.getTime())
      .map((event) => ({
        fromStatus: event.fromStatus,
        toStatus: event.toStatus,
        note: event.note,
        createdAt: event.createdAt.toISOString(),
      })),
  };
}

export async function listRequestsFromDb() {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const requests = await prisma.visaRequest.findMany({
    include: {
      country: true,
      applicants: true,
      requestContext: true,
      statusHistory: true,
    },
    orderBy: [{ createdAt: "desc" }],
  });

  return requests.map(mapRecord);
}

export async function createRequestInDb(
  payload: CreatePayload,
  referenceCode: string,
) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const primaryApplicant = payload.applicants[0];
  const countryCode = payload.country.slice(0, 2).toLowerCase();

  let country = await prisma.country.findFirst({
    where: {
      OR: [
        { code: countryCode },
        { nameEn: payload.country },
        { nameAr: payload.country },
      ],
    },
  });

  if (!country) {
    country = await prisma.country.create({
      data: {
        code: countryCode || `c${Math.floor(Math.random() * 9999)}`,
        nameAr: payload.country,
        nameEn: payload.country,
        flag: "🌍",
        visaType: payload.visaType,
        accent: "from-[#964900] via-[#ffb787] to-[#126c39]",
      },
    });
  }

  const request = await prisma.visaRequest.create({
    data: {
      referenceCode,
      fullName: primaryApplicant?.fullName ?? payload.fullName,
      email: payload.email,
      phone: payload.phone,
      passportNumber: primaryApplicant?.passportNumber ?? payload.passportNumber,
      visaType: payload.visaType,
      issuingCountry: primaryApplicant?.issuingCountry ?? payload.issuingCountry,
      passportExpiryDate:
        primaryApplicant?.passportExpiryDate ?? payload.passportExpiryDate,
      passportDocumentName:
        primaryApplicant?.passportDocumentName ?? payload.passportDocumentName,
      personalPhotoName:
        primaryApplicant?.personalPhotoName ?? payload.personalPhotoName,
      travelDate: primaryApplicant?.passportIssueDate ?? payload.travelDate,
      status: payload.status,
      countryId: country.id,
      requestContext: payload.requestContext
        ? {
            create: {
              channel: payload.requestContext.channel,
              userAgent: payload.requestContext.userAgent,
              deviceType: payload.requestContext.deviceType,
              browser: payload.requestContext.browser,
              operatingSystem: payload.requestContext.operatingSystem,
            },
          }
        : undefined,
      applicants: {
        create: payload.applicants.map((applicant) => ({
          fullName: applicant.fullName,
          nationality: applicant.nationality,
          passportNumber: applicant.passportNumber,
          issuingCountry: applicant.issuingCountry,
          passportIssueDate: applicant.passportIssueDate,
          passportExpiryDate: applicant.passportExpiryDate,
          passportDocumentName: applicant.passportDocumentName,
          personalPhotoName: applicant.personalPhotoName,
        })),
      },
      statusHistory: {
        create: {
          fromStatus: null,
          toStatus: payload.status,
          note: "Request created",
        },
      },
    },
    include: {
      country: true,
      applicants: true,
      requestContext: true,
      statusHistory: true,
    },
  });

  return mapRecord(request);
}

export async function updateRequestStatusInDb(
  referenceCode: string,
  status: VisaRequestRecord["status"],
  note: string,
) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const existing = await prisma.visaRequest.findUnique({
    where: { referenceCode },
  });

  if (!existing) {
    return undefined;
  }

  const updated = await prisma.visaRequest.update({
    where: { referenceCode },
    data: {
      status,
      statusHistory: {
        create: {
          fromStatus: existing.status,
          toStatus: status,
          note,
        },
      },
    },
    include: {
      country: true,
      applicants: true,
      requestContext: true,
      statusHistory: true,
    },
  });

  return mapRecord(updated);
}
