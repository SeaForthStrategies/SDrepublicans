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

In the Vercel dashboard, set the project **Root Directory** to **`web`** (this folder), then connect the repo and deploy. See the repository `README.md` for the full checklist.

`vercel.json` pins install/build commands; `.vercelignore` excludes local OCR data and `scripts/` from uploads (not used by the Next build).
