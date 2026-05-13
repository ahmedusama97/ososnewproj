-- CreateTable
CREATE TABLE "NotificationEvent" (
    "id" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "recipient" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "provider" TEXT,
    "error" TEXT,
    "metadata" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "requestId" TEXT,

    CONSTRAINT "NotificationEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "NotificationEvent_event_createdAt_idx" ON "NotificationEvent"("event", "createdAt");

-- CreateIndex
CREATE INDEX "NotificationEvent_status_createdAt_idx" ON "NotificationEvent"("status", "createdAt");

-- CreateIndex
CREATE INDEX "NotificationEvent_requestId_createdAt_idx" ON "NotificationEvent"("requestId", "createdAt");

-- AddForeignKey
ALTER TABLE "NotificationEvent" ADD CONSTRAINT "NotificationEvent_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "VisaRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "NotificationEvent" ENABLE ROW LEVEL SECURITY;
