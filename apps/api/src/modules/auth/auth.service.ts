import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

type AuthSettings = {
  username: string;
  passwordHash: string;
  salt: string;
};

const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "admin123";

@Injectable()
export class AuthService {
  private readonly storagePath = join(process.cwd(), "data", "admin-auth.json");
  private readonly settings: AuthSettings = this.loadSettings();
  private currentToken =
    process.env.ADMIN_TOKEN ?? randomBytes(24).toString("hex");

  login(username: string, password: string) {
    if (username !== this.settings.username || !this.verifyPassword(password)) {
      throw new UnauthorizedException("Invalid admin credentials.");
    }

    return {
      token: this.currentToken,
      username: this.settings.username,
    };
  }

  changePassword(
    authorization: string | undefined,
    currentPassword: string,
    newPassword: string,
  ) {
    this.assertAuthorized(authorization);

    if (!this.verifyPassword(currentPassword)) {
      throw new UnauthorizedException("Current password is incorrect.");
    }

    if (newPassword.trim().length < 8) {
      throw new BadRequestException("New password must be at least 8 characters.");
    }

    const newSalt = randomBytes(16).toString("hex");
    const newHash = scryptSync(newPassword, newSalt, 64).toString("hex");

    this.settings.salt = newSalt;
    this.settings.passwordHash = newHash;
    this.persistSettings();
    this.currentToken = randomBytes(24).toString("hex");

    return {
      token: this.currentToken,
      username: this.settings.username,
    };
  }

  assertAuthorized(authorization?: string) {
    const token = authorization?.startsWith("Bearer ")
      ? authorization.slice(7)
      : authorization;

    if (token !== this.currentToken) {
      throw new UnauthorizedException("Unauthorized admin request.");
    }
  }

  private verifyPassword(password: string) {
    const candidate = scryptSync(password, this.settings.salt, 64);
    const stored = Buffer.from(this.settings.passwordHash, "hex");

    if (candidate.length !== stored.length) {
      return false;
    }

    return timingSafeEqual(candidate, stored);
  }

  private loadSettings() {
    if (existsSync(this.storagePath)) {
      try {
        const raw = readFileSync(this.storagePath, "utf8");
        return JSON.parse(raw) as AuthSettings;
      } catch {}
    }

    const salt = process.env.ADMIN_PASSWORD_SALT ?? randomBytes(16).toString("hex");
    const passwordHash =
      process.env.ADMIN_PASSWORD_HASH ??
      scryptSync(DEFAULT_PASSWORD, salt, 64).toString("hex");

    const settings: AuthSettings = {
      username: process.env.ADMIN_USERNAME ?? DEFAULT_USERNAME,
      passwordHash,
      salt,
    };

    this.persistRaw(settings);
    return settings;
  }

  private persistSettings() {
    this.persistRaw(this.settings);
  }

  private persistRaw(settings: AuthSettings) {
    mkdirSync(dirname(this.storagePath), { recursive: true });
    writeFileSync(this.storagePath, JSON.stringify(settings, null, 2), "utf8");
  }
}
