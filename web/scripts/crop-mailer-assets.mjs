import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";

function crop(srcPng, x, y, w, h) {
  const out = new PNG({ width: w, height: h });
  for (let yy = 0; yy < h; yy++) {
    for (let xx = 0; xx < w; xx++) {
      const srcIdx = (srcPng.width * (y + yy) + (x + xx)) << 2;
      const dstIdx = (w * yy + xx) << 2;
      out.data[dstIdx + 0] = srcPng.data[srcIdx + 0];
      out.data[dstIdx + 1] = srcPng.data[srcIdx + 1];
      out.data[dstIdx + 2] = srcPng.data[srcIdx + 2];
      out.data[dstIdx + 3] = srcPng.data[srcIdx + 3];
    }
  }
  return out;
}

const page1Path = path.join(process.cwd(), "scripts", "tmp", "page1-clean.png");

const page1 = PNG.sync.read(fs.readFileSync(page1Path));

// Coordinates tuned for the provided 1024x819 JPG renders.
// Page 1: Trump portrait on the top-right.
const trump = crop(page1, 898, 78, 126, 220);
fs.mkdirSync(path.join(process.cwd(), "public", "mailer", "graphics"), {
  recursive: true,
});
fs.writeFileSync(
  path.join(process.cwd(), "public", "mailer", "graphics", "trump.png"),
  PNG.sync.write(trump),
);

// Chairman photo: use public/mailer/people/corey.png (full-res headshot), not a scan crop.

console.log("Wrote public/mailer/graphics/trump.png");

