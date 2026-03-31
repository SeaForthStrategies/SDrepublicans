/**
 * Free ports that often hold a stuck `next dev`, then start the dev server.
 * Stops EADDRINUSE when an old dev process was left running.
 *
 * With `--clean`, deletes `.next` first. Stale chunks on external drives often
 * cause dev to 500 with: Cannot find module './NNN.js'
 */
import { spawn } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { spawnSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const argv = process.argv.slice(2);
const shouldClean = argv.includes("--clean");
let nextArgv = argv.filter((a) => a !== "--clean");
// npm/pnpm scripts often pass a standalone `--` separator; Next treats unknown
// positional args as a directory, so strip the separator before forwarding.
if (nextArgv[0] === "--") nextArgv = nextArgv.slice(1);

if (shouldClean) {
  const nextDir = join(root, ".next");
  if (existsSync(nextDir)) {
    console.log("[dev] removing .next (avoids stale webpack chunk errors)");
    rmSync(nextDir, { recursive: true, force: true });
  }
}

const PORTS = [3000, 3001, 8080];

for (const port of PORTS) {
  const res = spawnSync("lsof", ["-nP", "-tiTCP:" + port, "-sTCP:LISTEN"], {
    cwd: root,
    encoding: "utf8",
  });
  const pids = (res.stdout ?? "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  for (const pid of pids) {
    spawnSync("kill", ["-9", pid], { cwd: root });
  }
}

await new Promise((r) => setTimeout(r, 250));

/** Run the project-local Next CLI with Node (no corepack/pnpm on PATH required). */
const nextBin = join(root, "node_modules", "next", "dist", "bin", "next");
if (!existsSync(nextBin)) {
  console.error(
    "[dev] missing node_modules/next. Run: corepack enable && pnpm install",
  );
  process.exit(1);
}

const spawnArgs = [nextBin, "dev", ...nextArgv];
console.log(`[dev] starting: ${process.execPath} ${spawnArgs.join(" ")}`);
console.log(
  "[dev] from web/: use `npm run dev` or `node scripts/dev.mjs --clean` on external drives if you see missing chunk / 500 errors",
);

/**
 * macOS external volumes (/Volumes/...) often break native FS watchers (missed
 * events, flaky HMR, intermittent dev 500s). Polling is slower but reliable.
 * Override: NEXT_DEV_POLLING=0
 */
const env = { ...process.env };
const onExternalVolume =
  root.startsWith("/Volumes/") || root.startsWith("/mnt/");
const forcePoll =
  env.NEXT_DEV_POLLING === "1" ||
  (onExternalVolume && env.NEXT_DEV_POLLING !== "0");
if (forcePoll) {
  env.WATCHPACK_POLLING = "true";
  env.CHOKIDAR_USEPOLLING = "true";
  if (!env.WATCHPACK_POLLING_INTERVAL) env.WATCHPACK_POLLING_INTERVAL = "1000";
  console.log(
    "[dev] WATCHPACK_POLLING enabled (external volume or NEXT_DEV_POLLING=1)",
  );
}

/** Reduce random dev exits from V8 OOM during big webpack compiles on slow I/O. */
if (!/\bmax-old-space-size=/.test(env.NODE_OPTIONS ?? "")) {
  env.NODE_OPTIONS = `${env.NODE_OPTIONS ?? ""} --max-old-space-size=6144`.trim();
}

const child = spawn(process.execPath, spawnArgs, {
  cwd: root,
  stdio: "inherit",
  env,
});

child.on("error", (err) => {
  console.error("[dev] failed to spawn child process:", err);
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 0);
});
