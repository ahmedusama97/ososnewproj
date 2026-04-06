import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";

function resolveStoragePath(fileName: string) {
  if (process.env.VERCEL) {
    return join(tmpdir(), "visaflow-web-data", fileName);
  }

  return join(process.cwd(), "data", fileName);
}

export function readJsonFile<T>(fileName: string, fallback: T): T {
  const storagePath = resolveStoragePath(fileName);
  if (!existsSync(storagePath)) {
    return fallback;
  }

  try {
    const raw = readFileSync(storagePath, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeJsonFile(fileName: string, payload: unknown) {
  const storagePath = resolveStoragePath(fileName);
  mkdirSync(dirname(storagePath), { recursive: true });
  writeFileSync(storagePath, JSON.stringify(payload, null, 2), "utf8");
}
