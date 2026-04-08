import { getPrismaClient } from "../client";

export type UserRecord = {
  id: string;
  fullName: string;
  email: string;
  locale: string;
  createdAt: string;
};

export type UserAuthRecord = UserRecord & {
  passwordHash: string;
  salt: string;
};

export type UserSessionRecord = {
  id: string;
  tokenHash: string;
  expiresAt: string;
  userId: string;
};

function mapUser(user: {
  id: string;
  fullName: string;
  email: string;
  locale: string;
  createdAt: Date;
}) {
  return {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    locale: user.locale,
    createdAt: user.createdAt.toISOString(),
  } satisfies UserRecord;
}

export async function createUserInDb(input: {
  fullName: string;
  email: string;
  passwordHash: string;
  salt: string;
  locale?: string;
}) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const user = await prisma.user.create({
    data: {
      fullName: input.fullName.trim(),
      email: input.email.trim().toLowerCase(),
      passwordHash: input.passwordHash,
      salt: input.salt,
      locale: input.locale?.trim() || "ar",
    },
  });

  return {
    ...mapUser(user),
    passwordHash: user.passwordHash,
    salt: user.salt,
  } satisfies UserAuthRecord;
}

export async function getUserByEmailFromDb(email: string) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { email: email.trim().toLowerCase() },
  });

  if (!user) {
    return undefined;
  }

  return {
    ...mapUser(user),
    passwordHash: user.passwordHash,
    salt: user.salt,
  } satisfies UserAuthRecord;
}

export async function getUserByIdFromDb(userId: string) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return undefined;
  }

  return {
    ...mapUser(user),
    passwordHash: user.passwordHash,
    salt: user.salt,
  } satisfies UserAuthRecord;
}

export async function createUserSessionInDb(input: {
  userId: string;
  tokenHash: string;
  expiresAt: Date;
}) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const session = await prisma.userSession.create({
    data: {
      userId: input.userId,
      tokenHash: input.tokenHash,
      expiresAt: input.expiresAt,
    },
  });

  return {
    id: session.id,
    tokenHash: session.tokenHash,
    expiresAt: session.expiresAt.toISOString(),
    userId: session.userId,
  } satisfies UserSessionRecord;
}

export async function getUserSessionByTokenHashFromDb(tokenHash: string) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const session = await prisma.userSession.findUnique({
    where: { tokenHash },
    include: { user: true },
  });

  if (!session) {
    return undefined;
  }

  return {
    id: session.id,
    tokenHash: session.tokenHash,
    expiresAt: session.expiresAt.toISOString(),
    userId: session.userId,
    user: {
      ...mapUser(session.user),
      passwordHash: session.user.passwordHash,
      salt: session.user.salt,
    } satisfies UserAuthRecord,
  };
}

export async function deleteUserSessionByTokenHashFromDb(tokenHash: string) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const result = await prisma.userSession.deleteMany({
    where: { tokenHash },
  });

  return result.count;
}

export async function deleteUserSessionsByUserIdFromDb(userId: string) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const result = await prisma.userSession.deleteMany({
    where: { userId },
  });

  return result.count;
}

export async function updateUserPasswordInDb(input: {
  userId: string;
  passwordHash: string;
  salt: string;
}) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  const user = await prisma.user.update({
    where: { id: input.userId },
    data: {
      passwordHash: input.passwordHash,
      salt: input.salt,
    },
  });

  return {
    ...mapUser(user),
    passwordHash: user.passwordHash,
    salt: user.salt,
  } satisfies UserAuthRecord;
}

export async function deleteUserByIdInDb(userId: string) {
  const prisma = getPrismaClient();
  if (!prisma) {
    return null;
  }

  await prisma.user.delete({
    where: { id: userId },
  });

  return true;
}
