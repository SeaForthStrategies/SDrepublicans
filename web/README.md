This is a [Next.js](https://nextjs.org) App Router project (mailer / endorsement guide UI).

## Getting Started

From this directory, install dependencies and run the dev server (uses [pnpm](https://pnpm.io)):

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Edit `src/app/page.tsx` or content under `src/content/` as needed.

Fonts use [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Inter and Oswald).

## Production build

```bash
pnpm build
pnpm start
```

## Deploy on Vercel

**Root Directory must be `web` (this folder).** Vercel detects **Next.js** from `package.json` (`next` in `dependencies`), `next.config.mjs`, and the App Router under `src/app/`. If Root Directory is the repository root (`.`), there is no `next` there and the framework shows as **Other** — the build will not behave as a Next.js app.

In the Vercel dashboard, set **Project → Settings → General → Root Directory** to **`web`**, then deploy. See the repository `README.md` for the full checklist.

`vercel.json` sets `framework: "nextjs"` and pins `pnpm install --frozen-lockfile` + `pnpm build`. `.vercelignore` excludes local OCR data and `scripts/` from uploads (not used by the Next build).
