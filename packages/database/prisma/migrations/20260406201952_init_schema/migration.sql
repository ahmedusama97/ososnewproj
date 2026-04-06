-- CreateEnum
CREATE TYPE "VisaRequestStatus" AS ENUM ('draft', 'submitted', 'in_review', 'issued', 'rejected');

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "nameAr" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "visaType" TEXT NOT NULL,
    "accent" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisaRequest" (
    "id" TEXT NOT NULL,
    "referenceCode" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "passportNumber" TEXT NOT NULL,
    "visaType" TEXT NOT NULL,
    "issuingCountry" TEXT,
    "passportExpiryDate" TEXT,
    "passportDocumentName" TEXT,
    "personalPhotoName" TEXT,
    "travelDate" TEXT,
    "status" "VisaRequestStatus" NOT NULL DEFAULT 'submitted',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "countryId" TEXT NOT NULL,

    CONSTRAINT "VisaRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisaApplicant" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "passportNumber" TEXT NOT NULL,
    "issuingCountry" TEXT NOT NULL,
    "passportIssueDate" TEXT NOT NULL,
    "passportExpiryDate" TEXT NOT NULL,
    "passportDocumentName" TEXT NOT NULL,
    "personalPhotoName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "requestId" TEXT NOT NULL,

    CONSTRAINT "VisaApplicant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequestContext" (
    "id" TEXT NOT NULL,
    "channel" TEXT,
    "userAgent" TEXT,
    "deviceType" TEXT,
    "browser" TEXT,
    "operatingSystem" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "requestId" TEXT NOT NULL,

    CONSTRAINT "RequestContext_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusHistoryEvent" (
    "id" TEXT NOT NULL,
    "fromStatus" TEXT,
    "toStatus" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "requestId" TEXT NOT NULL,

    CONSTRAINT "StatusHistoryEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminCredential" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminCredential_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_code_key" ON "Country"("code");

-- CreateIndex
CREATE UNIQUE INDEX "VisaRequest_referenceCode_key" ON "VisaRequest"("referenceCode");

-- CreateIndex
CREATE INDEX "VisaRequest_status_createdAt_idx" ON "VisaRequest"("status", "createdAt");

-- CreateIndex
CREATE INDEX "VisaRequest_countryId_createdAt_idx" ON "VisaRequest"("countryId", "createdAt");

-- CreateIndex
CREATE INDEX "VisaApplicant_requestId_idx" ON "VisaApplicant"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "RequestContext_requestId_key" ON "RequestContext"("requestId");

-- CreateIndex
CREATE INDEX "StatusHistoryEvent_requestId_createdAt_idx" ON "StatusHistoryEvent"("requestId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "AdminCredential_username_key" ON "AdminCredential"("username");

-- AddForeignKey
ALTER TABLE "VisaRequest" ADD CONSTRAINT "VisaRequest_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisaApplicant" ADD CONSTRAINT "VisaApplicant_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "VisaRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequestContext" ADD CONSTRAINT "RequestContext_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "VisaRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusHistoryEvent" ADD CONSTRAINT "StatusHistoryEvent_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "VisaRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
