import { tmpdir } from "node:os";
import { join } from "node:path";

export function resolveStoragePath(fileName: string) {
  if (process.env.VERCEL) {
    return join(tmpdir(), "visaflow-data", fileName);
  }

  return join(process.cwd(), "data", fileName);
}
