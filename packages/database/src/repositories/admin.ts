import { getPrismaClient } from "../client";

export type AdminCredentialRecord = {
  username: string;
  passwordHash: string;
  salt: string;
};

export async function getAdminCredentialFromDb() {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const admin = await prisma.adminCredential.findFirst({
    orderBy: { createdAt: "asc" },
  });

  if (!admin) {
    return undefined;
  }

  return {
    username: admin.username,
    passwordHash: admin.passwordHash,
    salt: admin.salt,
  } satisfies AdminCredentialRecord;
}

export async function upsertAdminCredentialInDb(input: AdminCredentialRecord) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const admin = await prisma.adminCredential.upsert({
    where: { username: input.username },
    update: {
      passwordHash: input.passwordHash,
      salt: input.salt,
    },
    create: {
      username: input.username,
      passwordHash: input.passwordHash,
      salt: input.salt,
    },
  });

  return {
    username: admin.username,
    passwordHash: admin.passwordHash,
    salt: admin.salt,
  } satisfies AdminCredentialRecord;
}
