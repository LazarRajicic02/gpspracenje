import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const logoPath = join(__dirname, "..", "public", "logo.png");

const image = sharp(logoPath);
const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const threshold = 85; // pixels with max(r,g,b) below this become transparent
const fadeEnd = 120;   // smooth edge: between threshold and fadeEnd alpha is reduced

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const maxCh = Math.max(r, g, b);
  if (maxCh <= threshold) {
    data[i + 3] = 0;
  } else if (maxCh < fadeEnd) {
    data[i + 3] = Math.round((255 * (maxCh - threshold)) / (fadeEnd - threshold));
  }
}

const out = await sharp(data, { raw: { width, height, channels } })
  .png()
  .toBuffer();

writeFileSync(logoPath, out);
console.log("Logo background set to transparent:", logoPath);
