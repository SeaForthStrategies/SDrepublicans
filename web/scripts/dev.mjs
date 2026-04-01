/**
 * Free ports that often hold a stuck `next dev`, then start the dev server.
 * Stops EADDRINUSE when an old dev process was left running.
 *
 * With `--clean`, deletes `.next` first. Stale chunks on external drives often
 * cause dev to 500 with: Cannot find module './NNN.js'
 */
import { spawn, spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { existsSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const argv = process.argv.slice(2);
const shouldClean = argv.includes("--clean");
let nextArgv = argv.filter((a) => a !== "--clean");
// npm/pnpm scripts often pass a standalone `--` separator; Next treats unknown
// positional args as a directory, so strip the separator before forwarding.
if (nextArgv[0] === "--") nextArgv = nextArgv.slice(1);

/**
 * Ports to free before `next dev`. Defaults cover common Next binds; we also
 * merge `-p` / `--port` from forwarded args and `PORT` so custom ports (e.g.
 * 3010) are not left occupied — otherwise Next exits with EADDRINUSE.
 */
function collectPortsToFree(forwardedArgv) {
  const ports = new Set([3000, 3001, 8080]);
  const envPort = process.env.PORT?.trim();
  if (envPort && /^\d+$/.test(envPort)) ports.add(Number(envPort));
  for (let i = 0; i < forwardedArgv.length; i++) {
    const a = forwardedArgv[i];
    if (a === "-p" || a === "--port") {
      const v = forwardedArgv[i + 1];
      if (v && /^\d+$/.test(v)) ports.add(Number(v));
    } else if (a.startsWith("--port=")) {
      const v = a.slice("--port=".length);
      if (/^\d+$/.test(v)) ports.add(Number(v));
    }
  }
  return [...ports].sort((a, b) => a - b);
}

const PORTS = collectPortsToFree(nextArgv);
console.log(`[dev] freeing TCP ports: ${PORTS.join(", ")}`);

if (shouldClean) {
  const nextDir = join(root, ".next");
  if (existsSync(nextDir)) {
    console.log("[dev] removing .next (avoids stale webpack chunk errors)");
    rmSync(nextDir, { recursive: true, force: true });
  }
}

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

/** Second pass: kill-port catches listeners lsof sometimes misses (busy port / EADDRINUSE). */
if (process.env.NEXT_DEV_SKIP_KILL_PORT !== "1") {
  try {
    const require = createRequire(import.meta.url);
    const killPort = require("kill-port");
    for (const port of PORTS) {
      await killPort(port).catch(() => {});
    }
  } catch {
    /* kill-port optional if node_modules incomplete */
  }
}

await new Promise((r) => setTimeout(r, 150));

/** Run the project-local Next CLI with Node (no corepack/pnpm on PATH required). */
const nextBin = join(root, "node_modules", "next", "dist", "bin", "next");
if (!existsSync(nextBin)) {
  console.error(
    "[dev] missing node_modules/next. Run: corepack enable && pnpm install",
  );
  process.exit(1);
}

function hasHostnameFlag(argv) {
  return argv.some((a) => a === "-H" || a === "--hostname");
}

/**
 * Optional bind: set NEXT_DEV_HOSTNAME (e.g. 127.0.0.1, 0.0.0.0, localhost).
 * If unset, Next uses its default (works with most browsers and Cursor previews).
 */
const devHost = process.env.NEXT_DEV_HOSTNAME?.trim();
const spawnArgs = [nextBin, "dev"];
if (!hasHostnameFlag(nextArgv) && devHost) {
  spawnArgs.push("-H", devHost);
  console.log(`[dev] hostname: ${devHost}`);
}
spawnArgs.push(...nextArgv);

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
