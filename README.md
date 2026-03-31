# SDrepublicans

Next.js site (mailer / endorsement guide) in the `web` directory.

## Deploy on Vercel

1. Import this Git repository in [Vercel](https://vercel.com/new). On the **Configure Project** screen (or right after import), set **Root Directory** to **`web`** before the first deployment. The repo root has no `package.json`; the Next.js app only exists under `web/`.
2. Confirm **Project → Settings → General → Root Directory** is **`web`** (not `.` or empty). If this points at the repository root, Vercel cannot see `next` or `next.config.mjs`, so the framework shows as **Other** and builds will fail or behave incorrectly.
3. Under **Framework Preset**, choose **Next.js** if it is not already selected (after Root Directory is `web`, it should usually detect automatically).
4. No environment variables are required for the current build.
5. Deploy. Production builds use `pnpm install --frozen-lockfile` and `pnpm build` from `web/vercel.json`.

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
