import { createHash, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { readJsonFile, writeJsonFile } from "./storage";

type AuthSettings = {
  username: string;
  passwordHash: string;
  salt: string;
};

const STORAGE_KEY = "admin-auth.json";
const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "admin123";
const DEFAULT_SALT = "2ff7325e22e05c9d71b4bdddfd986c59";
const DEFAULT_PASSWORD_HASH =
  "d65cf595b881d96add3d34b28f1ad17c61f578470aed7b11ebcefd8f894bb4d457d8794866268197fbdc405a6f04d789cadfc6e5155b60b8448a4981285abc2f";

function createDefaultSettings(): AuthSettings {
  const salt = process.env.ADMIN_PASSWORD_SALT ?? DEFAULT_SALT;
  const passwordHash =
    process.env.ADMIN_PASSWORD_HASH ??
    DEFAULT_PASSWORD_HASH;

  return {
    username: process.env.ADMIN_USERNAME ?? DEFAULT_USERNAME,
    passwordHash,
    salt,
  };
}

function loadSettings() {
  if (process.env.VERCEL) {
    return createDefaultSettings();
  }

  const stored = readJsonFile<AuthSettings | null>(STORAGE_KEY, null);
  if (stored) {
    return stored;
  }

  const settings = createDefaultSettings();
  writeJsonFile(STORAGE_KEY, settings);
  return settings;
}

function verifyPassword(password: string, settings: AuthSettings) {
  const candidate = scryptSync(password, settings.salt, 64);
  const stored = Buffer.from(settings.passwordHash, "hex");

  if (candidate.length !== stored.length) {
    return false;
  }

  return timingSafeEqual(candidate, stored);
}

function createSessionToken(settings: AuthSettings) {
  const seed =
    process.env.ADMIN_TOKEN ??
    `${settings.username}:${settings.passwordHash}:${settings.salt}`;

  return createHash("sha256").update(seed).digest("hex");
}

export function loginAdmin(username: string, password: string) {
  const settings = loadSettings();
  if (username !== settings.username || !verifyPassword(password, settings)) {
    return null;
  }

  return {
    token: createSessionToken(settings),
    username: settings.username,
  };
}

export function assertAdminToken(authorization?: string | null) {
  const settings = loadSettings();
  const token = authorization?.startsWith("Bearer ")
    ? authorization.slice(7)
    : authorization ?? "";

  return token === createSessionToken(settings);
}

export function changeAdminPassword(
  authorization: string | null,
  currentPassword: string,
  newPassword: string,
) {
  if (process.env.VERCEL) {
    return { type: "unsupported" as const };
  }

  const settings = loadSettings();
  const token = authorization?.startsWith("Bearer ")
    ? authorization.slice(7)
    : authorization ?? "";

  if (token !== createSessionToken(settings)) {
    return { type: "unauthorized" as const };
  }

  if (!verifyPassword(currentPassword, settings)) {
    return { type: "invalid-password" as const };
  }

  if (newPassword.trim().length < 8) {
    return { type: "invalid-length" as const };
  }

  const salt = randomBytes(16).toString("hex");
  const passwordHash = scryptSync(newPassword, salt, 64).toString("hex");
  const nextSettings: AuthSettings = {
    ...settings,
    salt,
    passwordHash,
  };

  writeJsonFile(STORAGE_KEY, nextSettings);

  return {
    type: "success" as const,
    token: createSessionToken(nextSettings),
    username: nextSettings.username,
  };
}
