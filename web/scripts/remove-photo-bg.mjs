/**
 * Flood-fill from image edges to remove light / studio-style backgrounds.
 * Usage: node scripts/remove-photo-bg.mjs <input.png> [output.png]
 * Env: WHITE_TOL (default 42), MIN_LUMA (default 0.78)
 */
import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";

const inputPath =
  process.argv[2] ??
  path.join(process.cwd(), "public", "mailer", "graphics", "trump.png");
const outputPath = process.argv[3] ?? inputPath;

const WHITE_TOL = Number(process.env.WHITE_TOL ?? 42);
const MIN_LUMA = Number(process.env.MIN_LUMA ?? 0.78);

function colorDist(a, b) {
  const dr = a[0] - b[0];
  const dg = a[1] - b[1];
  const db = a[2] - b[2];
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

function luma(r, g, b) {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function getRGBA(png, x, y) {
  const idx = (png.width * y + x) << 2;
  return [
    png.data[idx + 0],
    png.data[idx + 1],
    png.data[idx + 2],
    png.data[idx + 3],
  ];
}

function setAlpha0(png, x, y) {
  const idx = (png.width * y + x) << 2;
  png.data[idx + 3] = 0;
}

function isLikelyBackground(c) {
  const [r, g, b, a] = c;
  if (a < 8) return false;
  if (luma(r, g, b) >= MIN_LUMA) return true;
  return colorDist(c, [255, 255, 255, 255]) <= WHITE_TOL;
}

function clearFromEdges(png) {
  const w = png.width;
  const h = png.height;
  const seen = new Uint8Array(w * h);
  const qx = new Int32Array(w * h);
  const qy = new Int32Array(w * h);
  let qt = 0;

  function push(x, y) {
    const i = y * w + x;
    if (seen[i]) return;
    const c = getRGBA(png, x, y);
    if (!isLikelyBackground(c)) return;
    seen[i] = 1;
    qx[qt] = x;
    qy[qt] = y;
    qt++;
  }

  for (let x = 0; x < w; x++) {
    push(x, 0);
    push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    push(0, y);
    push(w - 1, y);
  }

  let qh = 0;
  while (qh < qt) {
    const x = qx[qh];
    const y = qy[qh];
    qh++;
    setAlpha0(png, x, y);
    if (x > 0) push(x - 1, y);
    if (x + 1 < w) push(x + 1, y);
    if (y > 0) push(x, y - 1);
    if (y + 1 < h) push(x, y + 1);
  }
}

const input = fs.readFileSync(inputPath);
const png = PNG.sync.read(input);
clearFromEdges(png);
fs.writeFileSync(outputPath, PNG.sync.write(png));
console.log(`Wrote: ${path.relative(process.cwd(), outputPath)}`);
