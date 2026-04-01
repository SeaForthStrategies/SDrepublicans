# SDrepublicans

Next.js site (mailer / endorsement guide) in the `web` directory.

The repository root includes a minimal `package.json` (for tooling and `pnpm -C web build`). **Vercel must still use Root Directory `web`** so Next.js is detected from `web/package.json` and `web/next.config.mjs`.

## Deploy on Vercel

1. Import this Git repository in [Vercel](https://vercel.com/new). On the **Configure Project** screen (or right after import), set **Root Directory** to **`web`** before the first deployment. The Next.js app and its lockfile live under `web/`; that is what Vercel should treat as the project root for framework detection.
2. Confirm **Project → Settings → General → Root Directory** is **`web`** (not `.` or empty). If this points at the repository root, Vercel cannot see `next` or `next.config.mjs`, so the framework shows as **Other** and builds will fail or behave incorrectly.
3. Under **Framework Preset**, choose **Next.js** if it is not already selected (after Root Directory is `web`, it should usually detect automatically).
4. **Node.js:** the app targets **Node 20** (`web/.nvmrc` and `package.json` `engines`). In Vercel **Settings → General → Node.js Version**, pick **20.x** (or leave default if it follows `.nvmrc`).
5. No environment variables are required for the current build.
6. Deploy. Production builds use `pnpm install --frozen-lockfile` and `pnpm build` from `web/vercel.json`.

### If the project already shows “Other”

1. **Settings → General → Root Directory** → **Edit** → set to **`web`** → Save.
2. **Framework Preset** → set to **Next.js** → Save.
3. **Deployments** → **Redeploy** the latest deployment (or push a new commit).

If Root Directory stays on the repo root, Vercel will keep treating the repo as a generic project.

CLI from your machine (after `pnpm i -g vercel` or `npx vercel`), run inside `web`:

```bash
cd web && vercel
```

For more detail, see `web/README.md`.
