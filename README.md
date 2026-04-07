# VisaFlow Platform

Current stack:

- `apps/web`: Next.js + Tailwind + Route Handlers
- `apps/api`: legacy NestJS API kept for compatibility work
- `packages/database`: Prisma + PostgreSQL

## Run

```bash
npm run dev:web
npm run dev:api
```

## Routes

- `/home`
- `/apply`
- `/track`
- `/pricing`
- `/admin`
- `/privacy`
- `/terms`
- `/refund`
- `/compliance`
- `/visa/[slug]`

The root route `/` redirects to `/home`.

## Build

```bash
npm run build:web
npm run build:api
```

## Database

The web app is now prepared to use PostgreSQL through Prisma.

If `DATABASE_URL` is not set, the app falls back to the current local JSON storage.
If `DATABASE_URL` is set, the web API routes automatically switch to Prisma-backed repositories for:

- visa requests
- countries
- admin credentials

### Database commands

```bash
npm run db:generate
npm run db:migrate
npm run db:deploy
npm run db:studio
npm run db:seed
```

### Recommended production setup

1. Create a PostgreSQL database on Neon, Supabase, Railway, or Vercel Postgres.
2. Add `DATABASE_URL` and `DIRECT_URL` to the web app environment.
3. Run:
   ```bash
   npm run db:migrate
   npm run db:seed
   ```
4. Redeploy the web app.
5. At that point:
   - requests stop depending on local JSON files
   - added countries persist across deploys
   - admin credentials become database-backed

## Uploads

Document upload support is wired for Supabase Storage. Add these variables to `apps/web` on Vercel:

```bash
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=visa-documents
```

Create a private Supabase Storage bucket named `visa-documents`. If these variables are not configured, the app keeps the filename fallback so the demo flow does not break.

## Production Notes

- Rotate the Supabase database password before live usage if it was shared during setup.
- Keep `NEXT_PUBLIC_API_BASE_URL` unset. The API routes now live inside the Next.js web app.
- Payment is currently in manual-review mode. Configure a real provider before collecting payments online.
- Legal pages are operational drafts and should be reviewed by a lawyer before commercial launch.
