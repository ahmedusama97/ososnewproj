import { Injectable } from "@nestjs/common";
import {
  CreateVisaRequestDto,
  RequestContextDto,
  VisaApplicantDto,
} from "./visa-requests.dto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

export type VisaRequestRecord = CreateVisaRequestDto & {
  id: string;
  referenceCode: string;
  createdAt: string;
  statusHistory: Array<{
    fromStatus: string | null;
    toStatus: string;
    note: string;
    createdAt: string;
  }>;
};

@Injectable()
export class VisaRequestsService {
  private readonly storagePath = join(process.cwd(), "data", "visa-requests.json");
  private readonly requests: VisaRequestRecord[] = this.loadRequests();

  list() {
    return this.requests;
  }

  create(dto: CreateVisaRequestDto, incomingContext?: RequestContextDto) {
    const requestContext = this.buildRequestContext(incomingContext);
    const applicants = this.normalizeApplicants(dto.applicants);
    const primaryApplicant = applicants[0];
    const record: VisaRequestRecord = {
      ...dto,
      applicants,
      fullName: primaryApplicant?.fullName ?? dto.fullName,
      passportNumber: primaryApplicant?.passportNumber ?? dto.passportNumber,
      issuingCountry: primaryApplicant?.issuingCountry ?? dto.issuingCountry,
      passportExpiryDate: primaryApplicant?.passportExpiryDate ?? dto.passportExpiryDate,
      passportDocumentName:
        primaryApplicant?.passportDocumentName ?? dto.passportDocumentName,
      personalPhotoName:
        primaryApplicant?.personalPhotoName ?? dto.personalPhotoName,
      travelDate: primaryApplicant?.passportIssueDate ?? dto.travelDate,
      requestContext,
      id: crypto.randomUUID(),
      referenceCode: `VF-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${Math.floor(
        1000 + Math.random() * 9000,
      )}`,
      createdAt: new Date().toISOString(),
      statusHistory: [
        {
          fromStatus: null,
          toStatus: dto.status,
          note: "Request created",
          createdAt: new Date().toISOString(),
        },
      ],
    };

    this.requests.unshift(record);
    this.persistRequests();
    return record;
  }

  updateStatus(referenceCode: string, status: string, note: string) {
    const target = this.requests.find((request) => request.referenceCode === referenceCode);
    if (!target) {
      return null;
    }

    const previousStatus = target.status;
    target.status = status as VisaRequestRecord["status"];
    target.statusHistory.unshift({
      fromStatus: previousStatus,
      toStatus: status,
      note,
      createdAt: new Date().toISOString(),
    });

    this.persistRequests();
    return target;
  }

  private loadRequests() {
    if (!existsSync(this.storagePath)) {
      return [];
    }

    try {
      const raw = readFileSync(this.storagePath, "utf8");
      return JSON.parse(raw) as VisaRequestRecord[];
    } catch {
      return [];
    }
  }

  private persistRequests() {
    mkdirSync(dirname(this.storagePath), { recursive: true });
    writeFileSync(this.storagePath, JSON.stringify(this.requests, null, 2), "utf8");
  }

  private buildRequestContext(context?: RequestContextDto): RequestContextDto {
    const userAgent = context?.userAgent?.trim() ?? "";
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
      : normalizedAgent.includes("iphone") || normalizedAgent.includes("ipad") || normalizedAgent.includes("ios")
        ? "iOS"
        : normalizedAgent.includes("windows")
          ? "Windows"
          : normalizedAgent.includes("mac os x") || normalizedAgent.includes("macintosh")
            ? "macOS"
            : normalizedAgent.includes("linux")
              ? "Linux"
              : "Unknown";

    const deviceType = normalizedAgent.includes("ipad") || normalizedAgent.includes("tablet")
      ? "tablet"
      : normalizedAgent.includes("mobi") || normalizedAgent.includes("android") || normalizedAgent.includes("iphone")
        ? "mobile"
        : "desktop";

    return {
      channel: context?.channel?.trim() || "web",
      userAgent: userAgent || "Unknown",
      browser,
      operatingSystem,
      deviceType,
    };
  }

  private normalizeApplicants(applicants: VisaApplicantDto[]) {
    return applicants.map((applicant) => ({
      ...applicant,
      fullName: applicant.fullName.trim(),
      nationality: applicant.nationality.trim(),
      passportNumber: applicant.passportNumber.trim(),
      issuingCountry: applicant.issuingCountry.trim(),
      passportIssueDate: applicant.passportIssueDate.trim(),
      passportExpiryDate: applicant.passportExpiryDate.trim(),
      passportDocumentName: applicant.passportDocumentName.trim(),
      personalPhotoName: applicant.personalPhotoName.trim(),
    }));
  }
}
