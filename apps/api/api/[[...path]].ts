import type { IncomingMessage, ServerResponse } from "node:http";
import { createApp } from "../src/create-app";

type RequestHandler = (req: IncomingMessage, res: ServerResponse) => void;

let cachedHandler: Promise<RequestHandler> | null = null;

async function getHandler() {
  const app = await createApp();
  await app.init();
  const instance = app.getHttpAdapter().getInstance();
  return instance as RequestHandler;
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  cachedHandler ??= getHandler();
  const requestHandler = await cachedHandler;
  return requestHandler(req, res);
}
