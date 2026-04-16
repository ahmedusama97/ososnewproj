import { readJsonFile, writeJsonFile } from "./storage";
import {
  addInternalNoteInDb,
  bulkUpdateRequestsInDb,
  claimRequestsByEmailInDb,
  createMissingDocumentRequestInDb,
  createRequestInDb,
  listRequestsFromDb,
  listUserRequestsFromDb,
  resolveMissingDocumentRequestInDb,
  updateRequestWorkflowInDb,
  type ApplicantRecord,
  type InternalNoteRecord,
  type MissingDocumentRecord,
  type RequestContextRecord,
  type RequestAuditEventRecord,
  type VisaRequestRecord,
  type VisaRequestStatusValue,
} from "@visaflow/database";

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

const STORAGE_KEY = "visa-requests.json";

function loadRequestsFromFile() {
  return readJsonFile<VisaRequestRecord[]>(STORAGE_KEY, []);
}

function persistRequests(requests: VisaRequestRecord[]) {
  writeJsonFile(STORAGE_KEY, requests);
}

function normalizeRequests(requests: VisaRequestRecord[]) {
  return requests.map((request) => ({
    ...request,
    assignedTo: request.assignedTo ?? undefined,
    assignedAt: request.assignedAt ?? undefined,
    statusHistory: request.statusHistory ?? [],
    internalNotes: (request.internalNotes ?? []) as InternalNoteRecord[],
    missingDocuments: (request.missingDocuments ?? []) as MissingDocumentRecord[],
    auditTrail: (request.auditTrail ?? []) as RequestAuditEventRecord[],
  }));
}

function buildRequestContext(input?: RequestContextRecord): RequestContextRecord {
  const userAgent = input?.userAgent?.trim() ?? "";
  const normalizedAgent = userAgent.toLowerCase();

  const browser = normalizedAgent.includes("edg/")
    ? "Microsoft Edge"
    : normalizedAgent.includes("samsungbrowser/")
      ? "Samsung Internet"
      : normalizedAgent.includes("opr/") || normalizedAgent.includes("opera")
        ? "Opera"
        : normalizedAgent.includes("firefox/")
          ? "Firefox"
          : normalizedAgent.includes("chrome/")
            ? "Chrome"
            : normalizedAgent.includes("safari/")
              ? "Safari"
              : "Unknown";

  const operatingSystem = normalizedAgent.includes("android")
    ? "Android"
    : normalizedAgent.includes("iphone") ||
        normalizedAgent.includes("ipad") ||
        normalizedAgent.includes("ios")
      ? "iOS"
      : normalizedAgent.includes("windows")
        ? "Windows"
        : normalizedAgent.includes("mac os x") || normalizedAgent.includes("macintosh")
          ? "macOS"
          : normalizedAgent.includes("linux")
            ? "Linux"
            : "Unknown";

  const deviceType =
    normalizedAgent.includes("ipad") || normalizedAgent.includes("tablet")
      ? "tablet"
      : normalizedAgent.includes("mobi") ||
          normalizedAgent.includes("android") ||
          normalizedAgent.includes("iphone")
        ? "mobile"
        : "desktop";

  return {
    channel: input?.channel?.trim() || "web",
    userAgent: userAgent || "Unknown",
    browser,
    operatingSystem,
    deviceType,
  };
}

export function listRequests() {
  return listRequestsFromDb().then((requests) =>
    requests ?? normalizeRequests(loadRequestsFromFile()),
  );
}

export function listUserRequests(userId: string) {
  return listUserRequestsFromDb(userId).then((requests) => requests ?? []);
}

export function claimRequestsByEmail(userId: string, email: string) {
  return claimRequestsByEmailInDb(userId, email).then((count) => count ?? 0);
}

export function createRequest(
  payload: CreatePayload,
  inputContext?: RequestContextRecord,
): Promise<VisaRequestRecord> {
  const referenceCode = `VF-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${Math.floor(
    1000 + Math.random() * 9000,
  )}`;

  return createRequestInDb(
    {
      ...payload,
      requestContext: buildRequestContext(inputContext),
    },
    referenceCode,
  ).then((dbRecord) => {
    if (dbRecord) {
      return dbRecord;
    }

    const requests = loadRequestsFromFile();
    const primaryApplicant = payload.applicants[0];

    const record: VisaRequestRecord = {
      ...payload,
      fullName: primaryApplicant?.fullName ?? payload.fullName,
      passportNumber: primaryApplicant?.passportNumber ?? payload.passportNumber,
      issuingCountry: primaryApplicant?.issuingCountry ?? payload.issuingCountry,
      passportExpiryDate:
        primaryApplicant?.passportExpiryDate ?? payload.passportExpiryDate,
      passportDocumentName:
        primaryApplicant?.passportDocumentName ?? payload.passportDocumentName,
      personalPhotoName:
        primaryApplicant?.personalPhotoName ?? payload.personalPhotoName,
      travelDate: primaryApplicant?.passportIssueDate ?? payload.travelDate,
      requestContext: buildRequestContext(inputContext),
      id: crypto.randomUUID(),
      referenceCode,
      createdAt: new Date().toISOString(),
      statusHistory: [
        {
          fromStatus: null,
          toStatus: payload.status,
          note: "Request created",
          createdAt: new Date().toISOString(),
        },
      ],
      internalNotes: [],
      missingDocuments: [],
      auditTrail: [
        {
          id: crypto.randomUUID(),
          action: "request_created",
          actor: payload.email,
          details: `Request created for ${payload.country}.`,
          createdAt: new Date().toISOString(),
        },
      ],
    };

    requests.unshift(record);
    persistRequests(requests);
    return record;
  });
}

export function updateRequestWorkflow(
  referenceCode: string,
  input: WorkflowUpdatePayload,
): Promise<VisaRequestRecord | null> {
  return updateRequestWorkflowInDb(referenceCode, input).then((dbRecord) => {
    if (dbRecord !== null && dbRecord !== undefined) {
      return dbRecord;
    }

    if (dbRecord === undefined) {
      return null;
    }

    const requests = loadRequestsFromFile();
    const target = requests.find((request) => request.referenceCode === referenceCode);

    if (!target) {
      return null;
    }

    const now = new Date().toISOString();
    const nextStatus = input.status ?? target.status;
    const note = input.note?.trim();
    const normalizedAssignee =
      input.assignedTo === undefined
        ? undefined
        : input.assignedTo?.trim()
          ? input.assignedTo.trim()
          : null;
    const statusChanged = nextStatus !== target.status;
    const assignmentChanged =
      normalizedAssignee !== undefined &&
      normalizedAssignee !== (target.assignedTo ?? null);

    if (statusChanged) {
      const previousStatus = target.status;
      target.status = nextStatus;
      target.statusHistory.unshift({
        fromStatus: previousStatus,
        toStatus: nextStatus,
        note: note || "تم تحديث حالة الطلب.",
        createdAt: now,
      });
      target.auditTrail = target.auditTrail ?? [];
      target.auditTrail.unshift({
        id: crypto.randomUUID(),
        action: "status_changed",
        actor: input.actor,
        details: `${previousStatus} -> ${nextStatus}`,
        createdAt: now,
      });
    }

    if (assignmentChanged) {
      target.assignedTo = normalizedAssignee ?? undefined;
      target.assignedAt = normalizedAssignee ? now : undefined;
      target.auditTrail = target.auditTrail ?? [];
      target.auditTrail.unshift({
        id: crypto.randomUUID(),
        action: normalizedAssignee ? "assignment_updated" : "assignment_cleared",
        actor: input.actor,
        details: normalizedAssignee
          ? `Assigned to ${normalizedAssignee}`
          : "Assignment removed",
        createdAt: now,
      });
    }

    if (note) {
      target.internalNotes = target.internalNotes ?? [];
      target.internalNotes.unshift({
        id: crypto.randomUUID(),
        author: input.actor,
        body: note,
        createdAt: now,
      });
      target.auditTrail = target.auditTrail ?? [];
      target.auditTrail.unshift({
        id: crypto.randomUUID(),
        action: "internal_note_added",
        actor: input.actor,
        details: note,
        createdAt: now,
      });
    }

    persistRequests(requests);
    return target;
  });
}

export function addInternalNote(
  referenceCode: string,
  actor: string,
  body: string,
): Promise<VisaRequestRecord | null> {
  return addInternalNoteInDb(referenceCode, actor, body).then((dbRecord) => {
    if (dbRecord !== null && dbRecord !== undefined) {
      return dbRecord;
    }

    return updateRequestWorkflow(referenceCode, {
      actor,
      note: body,
    });
  });
}

export function createMissingDocumentRequest(
  referenceCode: string,
  input: MissingDocumentPayload,
): Promise<VisaRequestRecord | null> {
  return createMissingDocumentRequestInDb(referenceCode, input).then((dbRecord) => {
    if (dbRecord !== null && dbRecord !== undefined) {
      return dbRecord;
    }

    if (dbRecord === undefined) {
      return null;
    }

    const requests = loadRequestsFromFile();
    const target = requests.find((request) => request.referenceCode === referenceCode);
    if (!target) {
      return null;
    }

    const now = new Date().toISOString();
    const previousStatus = target.status;
    target.status = "waiting_documents";
    target.missingDocuments = target.missingDocuments ?? [];
    target.missingDocuments.unshift({
      id: crypto.randomUUID(),
      title: input.title.trim(),
      details: input.details.trim(),
      status: "open",
      requestedBy: input.actor,
      createdAt: now,
    });
    target.statusHistory.unshift({
      fromStatus: previousStatus,
      toStatus: "waiting_documents",
      note: "تم طلب مستندات إضافية من العميل.",
      createdAt: now,
    });
    target.auditTrail = target.auditTrail ?? [];
    target.auditTrail.unshift({
      id: crypto.randomUUID(),
      action: "missing_document_requested",
      actor: input.actor,
      details: `${input.title.trim()}: ${input.details.trim()}`,
      createdAt: now,
    });
    persistRequests(requests);
    return target;
  });
}

export function resolveMissingDocumentRequest(
  referenceCode: string,
  documentId: string,
  actor: string,
): Promise<VisaRequestRecord | null | false> {
  return resolveMissingDocumentRequestInDb(referenceCode, documentId, actor).then(
    (dbRecord) => {
      if (dbRecord !== null && dbRecord !== undefined) {
        return dbRecord;
      }

      if (dbRecord === undefined) {
        return null;
      }

      const requests = loadRequestsFromFile();
      const target = requests.find((request) => request.referenceCode === referenceCode);
      if (!target) {
        return null;
      }

      const document = (target.missingDocuments ?? []).find((item) => item.id === documentId);
      if (!document) {
        return false;
      }

      if (document.status === "resolved") {
        return target;
      }

      const now = new Date().toISOString();
      document.status = "resolved";
      document.resolvedBy = actor;
      document.resolvedAt = now;
      const hasOpenDocuments = (target.missingDocuments ?? []).some(
        (item) => item.status === "open",
      );
      if (!hasOpenDocuments && target.status === "waiting_documents") {
        target.statusHistory.unshift({
          fromStatus: "waiting_documents",
          toStatus: "in_review",
          note: "تم استلام المستندات المطلوبة وإعادة الطلب إلى المراجعة.",
          createdAt: now,
        });
        target.status = "in_review";
      }
      target.auditTrail = target.auditTrail ?? [];
      target.auditTrail.unshift({
        id: crypto.randomUUID(),
        action: "missing_document_resolved",
        actor,
        details: document.title,
        createdAt: now,
      });
      persistRequests(requests);
      return target;
    },
  );
}

export function bulkUpdateRequests(input: BulkWorkflowPayload): Promise<number> {
  return bulkUpdateRequestsInDb(input).then((dbCount) => {
    if (dbCount !== null) {
      return dbCount;
    }

    const requests = loadRequestsFromFile();
    const referenceSet = new Set(input.referenceCodes);
    let updatedCount = 0;

    for (const request of requests) {
      if (!referenceSet.has(request.referenceCode)) {
        continue;
      }

      const nextStatus = input.status ?? request.status;
      const normalizedAssignee =
        input.assignedTo === undefined
          ? undefined
          : input.assignedTo?.trim()
            ? input.assignedTo.trim()
            : null;
      const statusChanged = nextStatus !== request.status;
      const assignmentChanged =
        normalizedAssignee !== undefined &&
        normalizedAssignee !== (request.assignedTo ?? null);

      if (!statusChanged && !assignmentChanged) {
        continue;
      }

      const now = new Date().toISOString();
      if (statusChanged) {
        request.statusHistory.unshift({
          fromStatus: request.status,
          toStatus: nextStatus,
          note: "تم تحديث الطلب ضمن إجراء جماعي.",
          createdAt: now,
        });
        request.status = nextStatus;
      }

      if (assignmentChanged) {
        request.assignedTo = normalizedAssignee ?? undefined;
        request.assignedAt = normalizedAssignee ? now : undefined;
      }

      request.auditTrail = request.auditTrail ?? [];
      request.auditTrail.unshift({
        id: crypto.randomUUID(),
        action: "bulk_update",
        actor: input.actor,
        details: `status=${nextStatus}; assignedTo=${normalizedAssignee ?? "none"}`,
        createdAt: now,
      });
      updatedCount += 1;
    }

    persistRequests(requests);
    return updatedCount;
  });
}
