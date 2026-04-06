import { createApp } from "./create-app";

async function bootstrap() {
  const app = await createApp();
  const port = Number.parseInt(process.env.PORT ?? "4000", 10);
  await app.listen(port, "0.0.0.0");
}

bootstrap();
