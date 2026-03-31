import { createWorker } from "tesseract.js";

const images = process.argv.slice(2);
if (images.length === 0) {
  console.error("Usage: node scripts/ocr-mailer.mjs /abs/path/source.png [/abs/path/more.png ...]");
  process.exit(1);
}

const worker = await createWorker("eng");

for (const imagePath of images) {
  const { data } = await worker.recognize(imagePath);
  const text = (data.text ?? "")
    .replace(/\r/g, "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .join("\n");

  console.log(`\n----- OCR: ${imagePath} -----\n`);
  console.log(text);
}

await worker.terminate();

