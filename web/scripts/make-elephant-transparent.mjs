import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";

const inputPath =
  process.argv[2] ??
  path.join(process.cwd(), "public", "mailer", "brand", "elephant.png");

const outputPath = process.argv[3] ?? inputPath;

const NAVY_TOLERANCE = Number(process.env.NAVY_TOLERANCE ?? 70);
const YELLOW_TOLERANCE = Number(process.env.YELLOW_TOLERANCE ?? 150);

function colorDist(a, b) {
  const dr = a[0] - b[0];
  const dg = a[1] - b[1];
  const db = a[2] - b[2];
  return Math.sqrt(dr * dr + dg * dg + db * db);
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

function clearBackgroundByEdgeConnectivity(png) {
  const w = png.width;
  const h = png.height;
  const bgA = getRGBA(png, 0, 0); // navy
  const bgB = getRGBA(png, 0, h - 1); // yellow wedge

  const seen = new Uint8Array(w * h);
  const qx = new Int32Array(w * h);
  const qy = new Int32Array(w * h);
  let qh = 0;
  let qt = 0;

  function shouldClear(c) {
    if (c[3] === 0) return false;
    return (
      colorDist(c, bgA) <= NAVY_TOLERANCE || colorDist(c, bgB) <= YELLOW_TOLERANCE
    );
  }

  function push(x, y) {
    const i = y * w + x;
    if (seen[i]) return;
    const c = getRGBA(png, x, y);
    if (!shouldClear(c)) return;
    seen[i] = 1;
    qx[qt] = x;
    qy[qt] = y;
    qt++;
  }

  // Seed with all edge pixels that look like background.
  for (let x = 0; x < w; x++) {
    push(x, 0);
    push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    push(0, y);
    push(w - 1, y);
  }

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

function trimToNonTransparent(png, padding = 18) {
  const w = png.width;
  const h = png.height;
  let minX = w;
  let minY = h;
  let maxX = -1;
  let maxY = -1;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (w * y + x) << 2;
      const a = png.data[idx + 3];
      if (a === 0) continue;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }

  if (maxX < minX || maxY < minY) return png;

  minX = Math.max(0, minX - padding);
  minY = Math.max(0, minY - padding);
  maxX = Math.min(w - 1, maxX + padding);
  maxY = Math.min(h - 1, maxY + padding);

  const outW = maxX - minX + 1;
  const outH = maxY - minY + 1;
  const out = new PNG({ width: outW, height: outH });

  for (let y = 0; y < outH; y++) {
    for (let x = 0; x < outW; x++) {
      const srcIdx = (w * (minY + y) + (minX + x)) << 2;
      const dstIdx = (outW * y + x) << 2;
      out.data[dstIdx + 0] = png.data[srcIdx + 0];
      out.data[dstIdx + 1] = png.data[srcIdx + 1];
      out.data[dstIdx + 2] = png.data[srcIdx + 2];
      out.data[dstIdx + 3] = png.data[srcIdx + 3];
    }
  }

  return out;
}

function clearFaintEdgePixels(png, alphaThreshold = 200) {
  const w = png.width;
  const h = png.height;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (x !== 0 && y !== 0 && x !== w - 1 && y !== h - 1) continue;
      const idx = (w * y + x) << 2;
      const a = png.data[idx + 3];
      if (a > 0 && a < alphaThreshold) png.data[idx + 3] = 0;
    }
  }
}

function addTransparentMargin(png, margin = 18) {
  const out = new PNG({
    width: png.width + margin * 2,
    height: png.height + margin * 2,
  });

  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const srcIdx = (png.width * y + x) << 2;
      const dstIdx = (out.width * (y + margin) + (x + margin)) << 2;
      out.data[dstIdx + 0] = png.data[srcIdx + 0];
      out.data[dstIdx + 1] = png.data[srcIdx + 1];
      out.data[dstIdx + 2] = png.data[srcIdx + 2];
      out.data[dstIdx + 3] = png.data[srcIdx + 3];
    }
  }

  return out;
}

const input = fs.readFileSync(inputPath);
let png = PNG.sync.read(input);

clearBackgroundByEdgeConnectivity(png);
png = trimToNonTransparent(png);
clearFaintEdgePixels(png);
png = addTransparentMargin(png);

const out = PNG.sync.write(png);
fs.writeFileSync(outputPath, out);

console.log(
  `Wrote transparent PNG: ${path.relative(process.cwd(), outputPath)} (navyTol=${NAVY_TOLERANCE}, yellowTol=${YELLOW_TOLERANCE})`,
);

