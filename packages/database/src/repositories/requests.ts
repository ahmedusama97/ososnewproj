import { getPrismaClient } from "../client";

export type VisaRequestStatusValue =
  | "draft"
  | "payment_pending"
  | "submitted"
  | "waiting_documents"
  | "in_review"
  | "embassy_processing"
  | "ready_for_delivery"
  | "issued"
  | "rejected";

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

export type InternalNoteRecord = {
  id: string;
  author: string;
  body: string;
  createdAt: string;
};

export type MissingDocumentRecord = {
  id: string;
  title: string;
  details: string;
  status: "open" | "resolved";
  requestedBy: string;
  resolvedBy?: string;
  createdAt: string;
  resolvedAt?: string;
};

export type RequestAuditEventRecord = {
  id: string;
  action: string;
  actor: string;
  details?: string;
  createdAt: string;
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
  status: VisaRequestStatusValue;
  assignedTo?: string;
  assignedAt?: string;
  applicants: ApplicantRecord[];
  requestContext?: RequestContextRecord;
  createdAt: string;
  statusHistory: Array<{
    fromStatus: string | null;
    toStatus: string;
    note: string;
    createdAt: string;
  }>;
  internalNotes: InternalNoteRecord[];
  missingDocuments: MissingDocumentRecord[];
  auditTrail: RequestAuditEventRecord[];
};

type CreatePayload = Omit<
  VisaRequestRecord,
  | "id"
  | "referenceCode"
  | "createdAt"
  | "statusHistory"
  | "assignedTo"
  | "assignedAt"
  | "internalNotes"
  | "missingDocuments"
  | "auditTrail"
> & {
  userId?: string;
};

type WorkflowUpdatePayload = {
  status?: VisaRequestStatusValue;
  note?: string;
  assignedTo?: string | null;
  actor: string;
};

type MissingDocumentPayload = {
  title: string;
  details: string;
  actor: string;
};

type BulkWorkflowPayload = {
  referenceCodes: string[];
  status?: VisaRequestStatusValue;
  assignedTo?: string | null;
  actor: string;
};

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
  status: string;
  assignedTo: string | null;
  assignedAt: Date | null;
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
  internalNotes: Array<{
    id: string;
    author: string;
    body: string;
    createdAt: Date;
  }>;
  missingDocuments: Array<{
    id: string;
    title: string;
    details: string;
    status: string;
    requestedBy: string;
    resolvedBy: string | null;
    createdAt: Date;
    resolvedAt: Date | null;
  }>;
  auditTrail: Array<{
    id: string;
    action: string;
    actor: string;
    details: string | null;
    createdAt: Date;
  }>;
};

function normalizeStatus(status: string): VisaRequestStatusValue {
  if (
    status === "draft" ||
    status === "payment_pending" ||
    status === "submitted" ||
    status === "waiting_documents" ||
    status === "in_review" ||
    status === "embassy_processing" ||
    status === "ready_for_delivery" ||
    status === "issued" ||
    status === "rejected"
  ) {
    return status;
  }

  return "submitted";
}

function normalizeMissingDocumentStatus(status: string): MissingDocumentRecord["status"] {
  return status === "resolved" ? "resolved" : "open";
}

function getDefaultStatusNote(status: VisaRequestStatusValue) {
  switch (status) {
    case "draft":
      return "?? ??? ????? ??????.";
    case "payment_pending":
      return "????? ??????? ??????? ?????.";
    case "submitted":
      return "?? ?????? ????? ?????.";
    case "waiting_documents":
      return "?? ??? ??????? ?????? ?? ??????.";
    case "in_review":
      return "????? ??? ???????? ????????.";
    case "embassy_processing":
      return "????? ??? ???????? ??? ???????.";
    case "ready_for_delivery":
      return "????? ???? ???????.";
    case "issued":
      return "?? ????? ????????.";
    case "rejected":
      return "?? ??? ?????.";
    default:
      return "?? ????? ???? ?????.";
  }
}

function getRequestInclude() {
  return {
    country: true,
    applicants: true,
    requestContext: true,
    statusHistory: true,
    internalNotes: true,
    missingDocuments: true,
    auditTrail: true,
  };
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
    status: normalizeStatus(request.status),
    assignedTo: request.assignedTo ?? undefined,
    assignedAt: request.assignedAt?.toISOString(),
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
    internalNotes: request.internalNotes
      .sort((left, right) => right.createdAt.getTime() - left.createdAt.getTime())
      .map((note) => ({
        id: note.id,
        author: note.author,
        body: note.body,
        createdAt: note.createdAt.toISOString(),
      })),
    missingDocuments: request.missingDocuments
      .sort((left, right) => {
        if (left.status !== right.status) {
          return left.status === "open" ? -1 : 1;
        }
        return right.createdAt.getTime() - left.createdAt.getTime();
      })
      .map((item) => ({
        id: item.id,
        title: item.title,
        details: item.details,
        status: normalizeMissingDocumentStatus(item.status),
        requestedBy: item.requestedBy,
        resolvedBy: item.resolvedBy ?? undefined,
        createdAt: item.createdAt.toISOString(),
        resolvedAt: item.resolvedAt?.toISOString(),
      })),
    auditTrail: request.auditTrail
      .sort((left, right) => right.createdAt.getTime() - left.createdAt.getTime())
      .map((event) => ({
        id: event.id,
        action: event.action,
        actor: event.actor,
        details: event.details ?? undefined,
        createdAt: event.createdAt.toISOString(),
      })),
  };
}

async function findRequestWithRelations(
  prisma: NonNullable<ReturnType<typeof getPrismaClient>>,
  referenceCode: string,
) {
  const request = await prisma.visaRequest.findUnique({
    where: { referenceCode },
    include: getRequestInclude(),
  });

  return request ? mapRecord(request as RequestRow) : undefined;
}

export async function listRequestsFromDb() {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const requests = await prisma.visaRequest.findMany({
    include: getRequestInclude(),
    orderBy: [{ createdAt: "desc" }],
  });

  return requests.map((request) => mapRecord(request as RequestRow));
}

export async function listUserRequestsFromDb(userId: string) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const requests = await prisma.visaRequest.findMany({
    where: { userId },
    include: getRequestInclude(),
    orderBy: [{ createdAt: "desc" }],
  });

  return requests.map((request) => mapRecord(request as RequestRow));
}

export async function claimRequestsByEmailInDb(userId: string, email: string) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) {
    return 0;
  }

  const result = await prisma.visaRequest.updateMany({
    where: {
      userId: null,
      email: {
        equals: normalizedEmail,
        mode: "insensitive",
      },
    },
    data: { userId },
  });

  return result.count;
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
        flag: "??",
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
      userId: payload.userId,
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
          note: getDefaultStatusNote(payload.status),
        },
      },
      auditTrail: {
        create: {
          action: "request_created",
          actor: payload.email,
          details: `Request created for ${payload.country}.`,
        },
      },
    },
    include: getRequestInclude(),
  });

  return mapRecord(request as RequestRow);
}

export async function updateRequestWorkflowInDb(
  referenceCode: string,
  input: WorkflowUpdatePayload,
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

  const nextStatus = input.status ?? normalizeStatus(existing.status);
  const trimmedNote = input.note?.trim() ?? "";
  const normalizedAssignee =
    input.assignedTo === undefined
      ? undefined
      : input.assignedTo?.trim()
        ? input.assignedTo.trim()
        : null;

  const statusChanged = nextStatus !== existing.status;
  const assignmentChanged =
    normalizedAssignee !== undefined &&
    normalizedAssignee !== (existing.assignedTo ?? null);

  if (!statusChanged && !assignmentChanged && !trimmedNote) {
    return findRequestWithRelations(prisma, referenceCode);
  }

  const auditCreates: Array<{ action: string; actor: string; details?: string }> = [];

  if (statusChanged) {
    auditCreates.push({
      action: "status_changed",
      actor: input.actor,
      details: `${existing.status} -> ${nextStatus}`,
    });
  }

  if (assignmentChanged) {
    auditCreates.push({
      action: normalizedAssignee ? "assignment_updated" : "assignment_cleared",
      actor: input.actor,
      details: normalizedAssignee
        ? `Assigned to ${normalizedAssignee}`
        : "Assignment removed",
    });
  }

  if (trimmedNote) {
    auditCreates.push({
      action: "internal_note_added",
      actor: input.actor,
      details: trimmedNote,
    });
  }

  const updated = await prisma.visaRequest.update({
    where: { referenceCode },
    data: {
      status: statusChanged ? nextStatus : undefined,
      assignedTo: normalizedAssignee,
      assignedAt:
        assignmentChanged && normalizedAssignee
          ? new Date()
          : assignmentChanged
            ? null
            : undefined,
      statusHistory: statusChanged
        ? {
            create: {
              fromStatus: existing.status,
              toStatus: nextStatus,
              note: trimmedNote || getDefaultStatusNote(nextStatus),
            },
          }
        : undefined,
      internalNotes: trimmedNote
        ? {
            create: {
              author: input.actor,
              body: trimmedNote,
            },
          }
        : undefined,
      auditTrail: auditCreates.length
        ? {
            create: auditCreates,
          }
        : undefined,
    },
    include: getRequestInclude(),
  });

  return mapRecord(updated as RequestRow);
}

export async function addInternalNoteInDb(
  referenceCode: string,
  actor: string,
  body: string,
) {
  return updateRequestWorkflowInDb(referenceCode, {
    actor,
    note: body,
  });
}

export async function createMissingDocumentRequestInDb(
  referenceCode: string,
  input: MissingDocumentPayload,
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

  const title = input.title.trim();
  const details = input.details.trim();

  const auditCreates: Array<{ action: string; actor: string; details?: string }> = [
    {
      action: "missing_document_requested",
      actor: input.actor,
      details: `${title}: ${details}`,
    },
  ];

  if (existing.status !== "waiting_documents") {
    auditCreates.unshift({
      action: "status_changed",
      actor: input.actor,
      details: `${existing.status} -> waiting_documents`,
    });
  }

  const updated = await prisma.visaRequest.update({
    where: { referenceCode },
    data: {
      status: existing.status === "waiting_documents" ? undefined : "waiting_documents",
      statusHistory:
        existing.status === "waiting_documents"
          ? undefined
          : {
              create: {
                fromStatus: existing.status,
                toStatus: "waiting_documents",
                note: "?? ??? ??????? ?????? ?? ??????.",
              },
            },
      missingDocuments: {
        create: {
          title,
          details,
          requestedBy: input.actor,
        },
      },
      auditTrail: {
        create: auditCreates,
      },
    },
    include: getRequestInclude(),
  });

  return mapRecord(updated as RequestRow);
}

export async function resolveMissingDocumentRequestInDb(
  referenceCode: string,
  documentId: string,
  actor: string,
) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const existing = await prisma.visaRequest.findUnique({
    where: { referenceCode },
    include: {
      missingDocuments: true,
    },
  });

  if (!existing) {
    return undefined;
  }

  const target = existing.missingDocuments.find((item) => item.id === documentId);
  if (!target) {
    return false;
  }

  if (target.status === "resolved") {
    return findRequestWithRelations(prisma, referenceCode);
  }

  const openRemaining = existing.missingDocuments.filter(
    (item) => item.status === "open" && item.id !== documentId,
  ).length;
  const shouldAdvanceStatus =
    existing.status === "waiting_documents" && openRemaining === 0;

  await prisma.$transaction(async (tx) => {
    await tx.missingDocumentRequest.update({
      where: { id: documentId },
      data: {
        status: "resolved",
        resolvedBy: actor,
        resolvedAt: new Date(),
      },
    });

    await tx.requestAuditEvent.create({
      data: {
        requestId: existing.id,
        action: "missing_document_resolved",
        actor,
        details: target.title,
      },
    });

    if (shouldAdvanceStatus) {
      await tx.visaRequest.update({
        where: { referenceCode },
        data: {
          status: "in_review",
          statusHistory: {
            create: {
              fromStatus: existing.status,
              toStatus: "in_review",
              note: "?? ?????? ????????? ???????? ?????? ????? ????????.",
            },
          },
          auditTrail: {
            create: {
              action: "status_changed",
              actor,
              details: `${existing.status} -> in_review`,
            },
          },
        },
      });
    }
  });

  return findRequestWithRelations(prisma, referenceCode);
}

export async function bulkUpdateRequestsInDb(input: BulkWorkflowPayload) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const referenceCodes = Array.from(
    new Set(
      input.referenceCodes
        .map((referenceCode) => referenceCode.trim())
        .filter(Boolean),
    ),
  );

  if (!referenceCodes.length) {
    return 0;
  }

  const normalizedAssignee =
    input.assignedTo === undefined
      ? undefined
      : input.assignedTo?.trim()
        ? input.assignedTo.trim()
        : null;

  const requests = await prisma.visaRequest.findMany({
    where: {
      referenceCode: {
        in: referenceCodes,
      },
    },
    select: {
      referenceCode: true,
      status: true,
      assignedTo: true,
    },
  });

  let updatedCount = 0;

  await prisma.$transaction(async (tx) => {
    for (const request of requests) {
      const nextStatus = input.status ?? normalizeStatus(request.status);
      const statusChanged = nextStatus !== request.status;
      const assignmentChanged =
        normalizedAssignee !== undefined &&
        normalizedAssignee !== (request.assignedTo ?? null);

      if (!statusChanged && !assignmentChanged) {
        continue;
      }

      const auditCreates: Array<{ action: string; actor: string; details?: string }> = [];

      if (statusChanged) {
        auditCreates.push({
          action: "status_changed",
          actor: input.actor,
          details: `${request.status} -> ${nextStatus}`,
        });
      }

      if (assignmentChanged) {
        auditCreates.push({
          action: normalizedAssignee ? "assignment_updated" : "assignment_cleared",
          actor: input.actor,
          details: normalizedAssignee
            ? `Assigned to ${normalizedAssignee}`
            : "Assignment removed",
        });
      }

      await tx.visaRequest.update({
        where: { referenceCode: request.referenceCode },
        data: {
          status: statusChanged ? nextStatus : undefined,
          assignedTo: normalizedAssignee,
          assignedAt:
            assignmentChanged && normalizedAssignee
              ? new Date()
              : assignmentChanged
                ? null
                : undefined,
          statusHistory: statusChanged
            ? {
                create: {
                  fromStatus: request.status,
                  toStatus: nextStatus,
                  note: getDefaultStatusNote(nextStatus),
                },
              }
            : undefined,
          auditTrail: auditCreates.length
            ? {
                create: auditCreates,
              }
            : undefined,
        },
      });

      updatedCount += 1;
    }
  });

  return updatedCount;
}
