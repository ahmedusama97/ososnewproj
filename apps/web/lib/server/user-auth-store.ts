import { createHash, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import {
  createUserInDb,
  createUserSessionInDb,
  deleteUserByIdInDb,
  deleteUserSessionByTokenHashFromDb,
  deleteUserSessionsByUserIdFromDb,
  getUserByEmailFromDb,
  getUserSessionByTokenHashFromDb,
  updateUserPasswordInDb,
} from "@visaflow/database";

export const USER_TOKEN_COOKIE = "visaflow_user_token";
const USER_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

type SafeUser = {
  id: string;
  fullName: string;
  email: string;
  locale: string;
  createdAt: string;
};

function sanitizeEmail(input: string) {
  return input.trim().toLowerCase();
}

function sanitizeName(input: string) {
  return input.trim().replace(/\s+/g, " ");
}

function hashSessionToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

function verifyPassword(password: string, passwordHash: string, salt: string) {
  const candidate = scryptSync(password, salt, 64);
  const stored = Buffer.from(passwordHash, "hex");

  if (candidate.length !== stored.length) {
    return false;
  }

  return timingSafeEqual(candidate, stored);
}

function toSafeUser(user: {
  id: string;
  fullName: string;
  email: string;
  locale: string;
  createdAt: string;
}) {
  return {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    locale: user.locale,
    createdAt: user.createdAt,
  } satisfies SafeUser;
}

async function createSessionForUser(userId: string) {
  const rawToken = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + USER_SESSION_MAX_AGE_SECONDS * 1000);

  const session = await createUserSessionInDb({
    userId,
    tokenHash: hashSessionToken(rawToken),
    expiresAt,
  });

  if (!session) {
    return null;
  }

  return {
    token: rawToken,
    expiresAt: expiresAt.toISOString(),
  };
}

export function getUserSessionCookieOptions() {
  return {
    name: USER_TOKEN_COOKIE,
    value: "",
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: USER_SESSION_MAX_AGE_SECONDS,
  };
}

export async function registerUserAccount(input: {
  fullName: string;
  email: string;
  password: string;
  locale?: string;
}) {
  const fullName = sanitizeName(input.fullName);
  const email = sanitizeEmail(input.email);
  const password = input.password.trim();

  if (fullName.length < 3) {
    return { type: "invalid-name" as const };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { type: "invalid-email" as const };
  }

  if (password.length < 8) {
    return { type: "invalid-password-length" as const };
  }

  const existing = await getUserByEmailFromDb(email);
  if (existing === null) {
    return { type: "unavailable" as const };
  }

  if (existing) {
    return { type: "already-exists" as const };
  }

  const salt = randomBytes(16).toString("hex");
  const passwordHash = scryptSync(password, salt, 64).toString("hex");
  const user = await createUserInDb({
    fullName,
    email,
    passwordHash,
    salt,
    locale: input.locale || "ar",
  });

  if (!user) {
    return { type: "unavailable" as const };
  }

  const session = await createSessionForUser(user.id);
  if (!session) {
    return { type: "unavailable" as const };
  }

  return {
    type: "success" as const,
    user: toSafeUser(user),
    token: session.token,
    expiresAt: session.expiresAt,
  };
}

export async function loginUserAccount(input: {
  email: string;
  password: string;
}) {
  const email = sanitizeEmail(input.email);
  const password = input.password.trim();

  if (!email || !password) {
    return { type: "invalid-credentials" as const };
  }

  const user = await getUserByEmailFromDb(email);
  if (user === null) {
    return { type: "unavailable" as const };
  }

  if (!user || !verifyPassword(password, user.passwordHash, user.salt)) {
    return { type: "invalid-credentials" as const };
  }

  const session = await createSessionForUser(user.id);
  if (!session) {
    return { type: "unavailable" as const };
  }

  return {
    type: "success" as const,
    user: toSafeUser(user),
    token: session.token,
    expiresAt: session.expiresAt,
  };
}

export async function getUserSessionFromToken(token?: string | null) {
  if (!token) {
    return null;
  }

  const session = await getUserSessionByTokenHashFromDb(hashSessionToken(token));
  if (session === null) {
    return undefined;
  }

  if (!session) {
    return null;
  }

  if (new Date(session.expiresAt).getTime() <= Date.now()) {
    await deleteUserSessionByTokenHashFromDb(session.tokenHash);
    return null;
  }

  return {
    user: toSafeUser(session.user),
    token,
    expiresAt: session.expiresAt,
  };
}

export async function logoutUserAccount(token?: string | null) {
  if (!token) {
    return;
  }

  await deleteUserSessionByTokenHashFromDb(hashSessionToken(token));
}

export async function changeUserPassword(input: {
  token?: string | null;
  currentPassword: string;
  newPassword: string;
}) {
  const session = await getUserSessionFromToken(input.token);
  if (session === undefined) {
    return { type: "unavailable" as const };
  }

  if (!session) {
    return { type: "unauthorized" as const };
  }

  const user = await getUserByEmailFromDb(session.user.email);
  if (!user) {
    return { type: "unauthorized" as const };
  }

  if (!verifyPassword(input.currentPassword, user.passwordHash, user.salt)) {
    return { type: "invalid-password" as const };
  }

  if (input.newPassword.trim().length < 8) {
    return { type: "invalid-length" as const };
  }

  const salt = randomBytes(16).toString("hex");
  const passwordHash = scryptSync(input.newPassword.trim(), salt, 64).toString("hex");
  const updated = await updateUserPasswordInDb({
    userId: user.id,
    passwordHash,
    salt,
  });

  if (!updated) {
    return { type: "unavailable" as const };
  }

  await deleteUserSessionsByUserIdFromDb(user.id);
  const nextSession = await createSessionForUser(user.id);
  if (!nextSession) {
    return { type: "unavailable" as const };
  }

  return {
    type: "success" as const,
    token: nextSession.token,
    user: toSafeUser(updated),
  };
}

export async function deleteUserAccount(input: {
  token?: string | null;
  password: string;
}) {
  const session = await getUserSessionFromToken(input.token);
  if (session === undefined) {
    return { type: "unavailable" as const };
  }

  if (!session) {
    return { type: "unauthorized" as const };
  }

  const user = await getUserByEmailFromDb(session.user.email);
  if (!user) {
    return { type: "unauthorized" as const };
  }

  if (!verifyPassword(input.password, user.passwordHash, user.salt)) {
    return { type: "invalid-password" as const };
  }

  const deleted = await deleteUserByIdInDb(user.id);
  if (!deleted) {
    return { type: "unavailable" as const };
  }

  return { type: "success" as const };
}
