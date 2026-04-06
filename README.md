# VisaFlow Platform

Current stack:

- `apps/web`: Next.js + Tailwind
- `apps/api`: NestJS
- `packages/database`: PostgreSQL schema draft

## Run

```bash
npm run dev:web
npm run dev:api
```

## Routes

- `/home`
- `/apply`
- `/admin`

The root route `/` redirects to `/home`.

## Build

```bash
npm run build:web
npm run build:api
```

## Deploy On Render

This repo is prepared for Render using [render.yaml](/C:/product2/render.yaml).

Services:

- `visaflow-api` from [apps/api](/C:/product2/apps/api)
- `visaflow-web` from [apps/web](/C:/product2/apps/web)

Important notes:

- Local development is unchanged. The API still uses port `4000` locally and automatically uses `PORT` on Render.
- For online testing, set `NEXT_PUBLIC_API_BASE_URL` on the web service to your Render API URL, for example:
  `https://visaflow-api.onrender.com`
- The current API stores data in local JSON files. On free hosting this storage is not durable, so data may reset after restart or redeploy.

### Render Setup

1. Push this repo to GitHub.
2. In Render choose `Blueprint` and connect the repo.
3. Render will detect [render.yaml](/C:/product2/render.yaml) and create both services.
4. In `visaflow-api` add these environment variables:
   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD_HASH`
   - `ADMIN_PASSWORD_SALT`
   - `ADMIN_TOKEN`
5. After the API gets its public URL, open `visaflow-web` environment variables and set:
   - `NEXT_PUBLIC_API_BASE_URL=https://your-api-name.onrender.com`
6. Redeploy the web service once after setting the API URL.

## API

- `GET /api/visa-requests`
- `POST /api/visa-requests`
- `GET /api/admin/requests`
- `PATCH /api/admin/requests/:referenceCode/status`
