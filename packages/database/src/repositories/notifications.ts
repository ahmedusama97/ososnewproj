import { getPrismaClient } from "../client";

export type NotificationEventStatus = "pending" | "sent" | "failed" | "skipped";

export type NotificationEventRecord = {
  id: string;
  event: string;
  channel: string;
  recipient: string;
  subject: string;
  body: string;
  status: NotificationEventStatus;
  provider?: string;
  error?: string;
  metadata?: string;
  requestId?: string;
  createdAt: string;
};

type CreateNotificationInput = {
  event: string;
  channel: string;
  recipient: string;
  subject: string;
  body: string;
  status?: NotificationEventStatus;
  provider?: string;
  error?: string;
  metadata?: string;
  requestId?: string;
};

function normalizeStatus(status: string): NotificationEventStatus {
  if (
    status === "pending" ||
    status === "sent" ||
    status === "failed" ||
    status === "skipped"
  ) {
    return status;
  }

  return "pending";
}

function mapNotification(row: {
  id: string;
  event: string;
  channel: string;
  recipient: string;
  subject: string;
  body: string;
  status: string;
  provider: string | null;
  error: string | null;
  metadata: string | null;
  requestId: string | null;
  createdAt: Date;
}): NotificationEventRecord {
  return {
    id: row.id,
    event: row.event,
    channel: row.channel,
    recipient: row.recipient,
    subject: row.subject,
    body: row.body,
    status: normalizeStatus(row.status),
    provider: row.provider ?? undefined,
    error: row.error ?? undefined,
    metadata: row.metadata ?? undefined,
    requestId: row.requestId ?? undefined,
    createdAt: row.createdAt.toISOString(),
  };
}

export async function createNotificationEventInDb(input: CreateNotificationInput) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const event = await prisma.notificationEvent.create({
    data: {
      event: input.event,
      channel: input.channel,
      recipient: input.recipient,
      subject: input.subject,
      body: input.body,
      status: input.status ?? "pending",
      provider: input.provider,
      error: input.error,
      metadata: input.metadata,
      requestId: input.requestId,
    },
  });

  return mapNotification(event);
}

export async function updateNotificationEventStatusInDb(
  id: string,
  input: {
    status: NotificationEventStatus;
    provider?: string;
    error?: string;
  },
) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const event = await prisma.notificationEvent.update({
    where: { id },
    data: {
      status: input.status,
      provider: input.provider,
      error: input.error,
    },
  });

  return mapNotification(event);
}

export async function listNotificationEventsFromDb(limit = 50) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const events = await prisma.notificationEvent.findMany({
    orderBy: [{ createdAt: "desc" }],
    take: Math.min(Math.max(limit, 1), 200),
  });

  return events.map(mapNotification);
}
