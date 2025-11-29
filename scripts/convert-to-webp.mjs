import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const imgDir = path.resolve('src', 'img');
const targetExtensions = ['.jpg', '.jpeg', '.png'];

async function convertAll() {
  const entries = await fs.readdir(imgDir);

  for (const entry of entries) {
    const ext = path.extname(entry).toLowerCase();
    if (!targetExtensions.includes(ext)) continue;

    const baseName = path.basename(entry, ext);
    const sourcePath = path.join(imgDir, entry);
    const webpPath = path.join(imgDir, `${baseName}.webp`);

    try {
      // Skip if WebP already exists
      try {
        await fs.access(webpPath);
        console.log(`Skip (exists): ${webpPath}`);
        continue;
      } catch {
        // file does not exist -> continue
      }

      await sharp(sourcePath)
        .webp({ quality: 80 })
        .toFile(webpPath);

      console.log(`Converted: ${entry} -> ${baseName}.webp`);
    } catch (error) {
      console.error(`Failed: ${entry}`, error);
    }
  }
}

convertAll().catch((error) => {
  console.error('Unexpected error during WebP conversion', error);
  process.exit(1);
});


