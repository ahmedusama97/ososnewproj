import { readJsonFile, writeJsonFile } from "./storage";
import {
  createRequestInDb,
  listRequestsFromDb,
  updateRequestStatusInDb,
  type ApplicantRecord,
  type RequestContextRecord,
  type VisaRequestRecord,
} from "@visaflow/database";

type CreatePayload = Omit<
  VisaRequestRecord,
  "id" | "referenceCode" | "createdAt" | "statusHistory"
>;

const STORAGE_KEY = "visa-requests.json";

function loadRequestsFromFile() {
  return readJsonFile<VisaRequestRecord[]>(STORAGE_KEY, []);
}

function persistRequests(requests: VisaRequestRecord[]) {
  writeJsonFile(STORAGE_KEY, requests);
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
  return listRequestsFromDb().then((requests) => requests ?? loadRequestsFromFile());
}

export function createRequest(
  payload: CreatePayload,
  inputContext?: RequestContextRecord,
) {
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
    };

    requests.unshift(record);
    persistRequests(requests);
    return record;
  });
}

export function updateRequestStatus(
  referenceCode: string,
  status: VisaRequestRecord["status"],
  note: string,
) {
  return updateRequestStatusInDb(referenceCode, status, note).then((dbRecord) => {
    if (dbRecord !== null) {
      return dbRecord;
    }

    const requests = loadRequestsFromFile();
    const target = requests.find((request) => request.referenceCode === referenceCode);

    if (!target) {
      return null;
    }

    const previousStatus = target.status;
    target.status = status;
    target.statusHistory.unshift({
      fromStatus: previousStatus,
      toStatus: status,
      note,
      createdAt: new Date().toISOString(),
    });

    persistRequests(requests);
    return target;
  });
}
