import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { readJsonFile, writeJsonFile } from "./storage";

type AuthSettings = {
  username: string;
  passwordHash: string;
  salt: string;
  token: string;
};

const STORAGE_KEY = "admin-auth.json";
const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "admin123";

function createDefaultSettings(): AuthSettings {
  const salt = process.env.ADMIN_PASSWORD_SALT ?? randomBytes(16).toString("hex");
  const passwordHash =
    process.env.ADMIN_PASSWORD_HASH ??
    scryptSync(DEFAULT_PASSWORD, salt, 64).toString("hex");

  return {
    username: process.env.ADMIN_USERNAME ?? DEFAULT_USERNAME,
    passwordHash,
    salt,
    token: process.env.ADMIN_TOKEN ?? randomBytes(24).toString("hex"),
  };
}

function loadSettings() {
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

export function loginAdmin(username: string, password: string) {
  const settings = loadSettings();
  if (username !== settings.username || !verifyPassword(password, settings)) {
    return null;
  }

  return {
    token: settings.token,
    username: settings.username,
  };
}

export function assertAdminToken(authorization?: string | null) {
  const settings = loadSettings();
  const token = authorization?.startsWith("Bearer ")
    ? authorization.slice(7)
    : authorization ?? "";

  return token === settings.token;
}

export function changeAdminPassword(
  authorization: string | null,
  currentPassword: string,
  newPassword: string,
) {
  const settings = loadSettings();
  const token = authorization?.startsWith("Bearer ")
    ? authorization.slice(7)
    : authorization ?? "";

  if (token !== settings.token) {
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
    token: randomBytes(24).toString("hex"),
  };

  writeJsonFile(STORAGE_KEY, nextSettings);

  return {
    type: "success" as const,
    token: nextSettings.token,
    username: nextSettings.username,
  };
}
