# SDrepublicans

Next.js site (mailer / endorsement guide) in the `web` directory.

## Deploy on Vercel

1. Import this Git repository in [Vercel](https://vercel.com/new).
2. Under **Project Settings → General → Root Directory**, set **`web`**.  
   The app and `vercel.json` live there; the repository root has no `package.json`.
3. Leave **Framework Preset** as Next.js. Vercel will use `pnpm` via `packageManager` in `web/package.json` and the lockfile.
4. No environment variables are required for the current build.
5. Deploy. Production builds run `pnpm install --frozen-lockfile` and `pnpm build` as defined in `web/vercel.json`.

CLI from your machine (after `pnpm i -g vercel` or `npx vercel`), run inside `web`:

```bash
cd web && vercel
```

For more detail, see `web/README.md`.
