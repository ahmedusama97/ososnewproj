import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var __visaflowPrisma: PrismaClient | undefined;
}

export function hasDatabaseUrl() {
  return Boolean(process.env.DATABASE_URL);
}

export function getPrismaClient() {
  if (!hasDatabaseUrl()) {
    return null;
  }

  if (!globalThis.__visaflowPrisma) {
    globalThis.__visaflowPrisma = new PrismaClient();
  }

  return globalThis.__visaflowPrisma;
}
