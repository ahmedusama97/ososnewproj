import {
  createNotificationEventInDb,
  listNotificationEventsFromDb,
  updateNotificationEventStatusInDb,
  type NotificationEventStatus,
  type VisaRequestRecord,
} from "@visaflow/database";
import { REQUEST_STATUS_LABELS, type RequestStatusValue } from "../request-status";

type NotificationPayload = {
  event: string;
  recipient: string;
  subject: string;
  body: string;
  request?: VisaRequestRecord;
  metadata?: Record<string, unknown>;
};

type ResendResponse = {
  id?: string;
  message?: string;
  error?: string;
};

const DEFAULT_FROM_EMAIL = "VisaFlow <onboarding@resend.dev>";

function getFromEmail() {
  return process.env.NOTIFICATION_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL;
}

function getAdminRecipients() {
  return (process.env.ADMIN_NOTIFICATION_EMAILS ?? process.env.ADMIN_NOTIFICATION_EMAIL ?? "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function formatReference(request: VisaRequestRecord) {
  return request.referenceCode || request.id;
}

function getStatusLabel(status: VisaRequestRecord["status"]) {
  return REQUEST_STATUS_LABELS[status as RequestStatusValue] ?? status;
}

async function sendResendEmail(input: {
  recipient: string;
  subject: string;
  body: string;
}) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return {
      status: "skipped" as NotificationEventStatus,
      provider: "resend",
      error: "RESEND_API_KEY is not configured.",
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: getFromEmail(),
      to: [input.recipient],
      subject: input.subject,
      text: input.body,
    }),
  });

  const payload = (await response.json().catch(() => ({}))) as ResendResponse;

  if (!response.ok) {
    return {
      status: "failed" as NotificationEventStatus,
      provider: "resend",
      error:
        payload.message ||
        payload.error ||
        `Resend request failed with status ${response.status}.`,
    };
  }

  return {
    status: "sent" as NotificationEventStatus,
    provider: "resend",
    error: undefined,
  };
}

async function recordAndSend(input: NotificationPayload) {
  const event = await createNotificationEventInDb({
    event: input.event,
    channel: "email",
    recipient: input.recipient,
    subject: input.subject,
    body: input.body,
    status: "pending",
    provider: "resend",
    metadata: input.metadata ? JSON.stringify(input.metadata) : undefined,
    requestId: input.request?.id,
  });

  const result = await sendResendEmail(input);

  if (event) {
    await updateNotificationEventStatusInDb(event.id, result);
    return;
  }

  if (result.status === "failed") {
    console.error("[notifications] Email delivery failed", {
      event: input.event,
      recipient: input.recipient,
      error: result.error,
    });
  }
}

async function notifyMany(payloads: NotificationPayload[]) {
  await Promise.all(
    payloads.map((payload) =>
      recordAndSend(payload).catch((error) => {
        console.error("[notifications] Notification failed", {
          event: payload.event,
          recipient: payload.recipient,
          error,
        });
      }),
    ),
  );
}

export async function notifyRequestCreated(request: VisaRequestRecord) {
  const referenceCode = formatReference(request);
  const adminRecipients = getAdminRecipients();

  await notifyMany([
    {
      event: "request_created_customer",
      recipient: request.email,
      subject: `VisaFlow request received: ${referenceCode}`,
      body: [
        `Hello ${request.fullName || "there"},`,
        "",
        `We received your visa request ${referenceCode} for ${request.country}.`,
        "You can track it from your account or the tracking page.",
        "",
        "VisaFlow Team",
      ].join("\n"),
      request,
      metadata: { referenceCode },
    },
    ...adminRecipients.map((recipient) => ({
      event: "request_created_admin",
      recipient,
      subject: `New visa request: ${referenceCode}`,
      body: [
        `A new request was submitted.`,
        "",
        `Reference: ${referenceCode}`,
        `Applicant: ${request.fullName}`,
        `Country: ${request.country}`,
        `Visa type: ${request.visaType}`,
      ].join("\n"),
      request,
      metadata: { referenceCode },
    })),
  ]);
}

export async function notifyRequestStatusUpdated(request: VisaRequestRecord) {
  const referenceCode = formatReference(request);
  const statusLabel = getStatusLabel(request.status);

  await notifyMany([
    {
      event: "request_status_updated_customer",
      recipient: request.email,
      subject: `VisaFlow status update: ${referenceCode}`,
      body: [
        `Hello ${request.fullName || "there"},`,
        "",
        `Your request ${referenceCode} is now: ${statusLabel}.`,
        "You can review the latest timeline from your account.",
        "",
        "VisaFlow Team",
      ].join("\n"),
      request,
      metadata: { referenceCode, status: request.status },
    },
  ]);
}

export async function notifyMissingDocumentRequested(
  request: VisaRequestRecord,
  input: { title: string; details: string },
) {
  const referenceCode = formatReference(request);

  await notifyMany([
    {
      event: "missing_document_requested_customer",
      recipient: request.email,
      subject: `VisaFlow needs one more document: ${referenceCode}`,
      body: [
        `Hello ${request.fullName || "there"},`,
        "",
        `We need an additional document for request ${referenceCode}.`,
        `Document: ${input.title}`,
        `Details: ${input.details}`,
        "",
        "Please sign in to your account to review the request.",
        "",
        "VisaFlow Team",
      ].join("\n"),
      request,
      metadata: {
        referenceCode,
        title: input.title,
      },
    },
  ]);
}

export function listNotificationEvents(limit?: number) {
  return listNotificationEventsFromDb(limit).then((events) => events ?? []);
}
