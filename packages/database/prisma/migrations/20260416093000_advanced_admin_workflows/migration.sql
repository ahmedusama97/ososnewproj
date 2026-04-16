ALTER TYPE "VisaRequestStatus" ADD VALUE IF NOT EXISTS 'payment_pending';
ALTER TYPE "VisaRequestStatus" ADD VALUE IF NOT EXISTS 'waiting_documents';
ALTER TYPE "VisaRequestStatus" ADD VALUE IF NOT EXISTS 'embassy_processing';
ALTER TYPE "VisaRequestStatus" ADD VALUE IF NOT EXISTS 'ready_for_delivery';

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'MissingDocumentStatus') THEN
    CREATE TYPE "MissingDocumentStatus" AS ENUM ('open', 'resolved');
  END IF;
END $$;

ALTER TABLE "VisaRequest"
  ADD COLUMN IF NOT EXISTS "assignedTo" TEXT,
  ADD COLUMN IF NOT EXISTS "assignedAt" TIMESTAMP(3);

CREATE TABLE IF NOT EXISTS "InternalNote" (
  "id" TEXT NOT NULL,
  "author" TEXT NOT NULL,
  "body" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "requestId" TEXT NOT NULL,
  CONSTRAINT "InternalNote_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "InternalNote_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "VisaRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "MissingDocumentRequest" (
  "id" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "details" TEXT NOT NULL,
  "status" "MissingDocumentStatus" NOT NULL DEFAULT 'open',
  "requestedBy" TEXT NOT NULL,
  "resolvedBy" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "resolvedAt" TIMESTAMP(3),
  "requestId" TEXT NOT NULL,
  CONSTRAINT "MissingDocumentRequest_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "MissingDocumentRequest_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "VisaRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "RequestAuditEvent" (
  "id" TEXT NOT NULL,
  "action" TEXT NOT NULL,
  "actor" TEXT NOT NULL,
  "details" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "requestId" TEXT NOT NULL,
  CONSTRAINT "RequestAuditEvent_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "RequestAuditEvent_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "VisaRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS "VisaRequest_assignedTo_createdAt_idx" ON "VisaRequest"("assignedTo", "createdAt");
CREATE INDEX IF NOT EXISTS "InternalNote_requestId_createdAt_idx" ON "InternalNote"("requestId", "createdAt");
CREATE INDEX IF NOT EXISTS "MissingDocumentRequest_requestId_status_createdAt_idx" ON "MissingDocumentRequest"("requestId", "status", "createdAt");
CREATE INDEX IF NOT EXISTS "RequestAuditEvent_requestId_createdAt_idx" ON "RequestAuditEvent"("requestId", "createdAt");

ALTER TABLE public."InternalNote" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."MissingDocumentRequest" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."RequestAuditEvent" ENABLE ROW LEVEL SECURITY;
