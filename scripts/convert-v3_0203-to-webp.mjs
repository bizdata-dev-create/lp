/**
 * src/img/original/v3_0203 内の画像をすべて WebP に変換し、
 * src/img/dev に出力する。元画像は変更しない。
 */
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const SOURCE_DIR = path.resolve('src', 'img', 'original', 'v3_0203');
const OUTPUT_DIR = path.resolve('src', 'img', 'dev');
const TARGET_EXT = ['.png', '.jpg', '.jpeg'];
const WEBP_QUALITY = 80;

async function walk(dir, fileList = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath, fileList);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (TARGET_EXT.includes(ext)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const files = await walk(SOURCE_DIR);
  console.log(`Found ${files.length} image(s) in v3_0203.\n`);

  for (const srcPath of files) {
    const relPath = path.relative(SOURCE_DIR, srcPath);
    const relDir = path.dirname(relPath);
    const baseName = path.basename(srcPath, path.extname(srcPath));
    const outPath = path.join(OUTPUT_DIR, relDir, `${baseName}.webp`);
    try {
      await fs.mkdir(path.dirname(outPath), { recursive: true });
      await sharp(srcPath)
        .webp({ quality: WEBP_QUALITY })
        .toFile(outPath);
      const outRel = path.join(relDir, `${baseName}.webp`);
      console.log(`✓ ${relPath} → dev/${outRel.split(path.sep).join('/')}`);
    } catch (err) {
      console.error(`✗ ${srcPath}:`, err.message);
    }
  }
  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
