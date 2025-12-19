import { convertImage } from './image-converter.mjs';
import fs from 'fs/promises';
import path from 'path';

async function convertRyo() {
  const v2Dir = path.resolve('src', 'img', 'original', 'v2_1206');
  const devDir = path.resolve('src', 'img', 'dev');
  
  const imageFile = 'ryo.jpg';
  const imagePath = path.join(v2Dir, imageFile);
  
  try {
    // 画像を1080pxのwebpに変換（同じフォルダに出力）
    const outputPath = await convertImage(
      imagePath,
      1080,
      'webp',
      v2Dir
    );

    // devフォルダにコピー（上書きOK）
    const fileName = path.basename(outputPath);
    const devPath = path.join(devDir, fileName);
    await fs.copyFile(outputPath, devPath);
    console.log(`✓ Copied to dev: ${fileName}`);
    
    console.log('\n✓ ryo.jpg processed and copied!');
  } catch (error) {
    console.error(`✗ Failed to process ${imageFile}:`, error.message);
    process.exit(1);
  }
}

convertRyo();



