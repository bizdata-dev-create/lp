import { convertImage } from './image-converter.mjs';
import fs from 'fs/promises';
import path from 'path';

async function convertAndCopy() {
  const v2Dir = path.resolve('src', 'img', 'original', 'v2_1206');
  const devDir = path.resolve('src', 'img', 'dev');
  
  const imagesToConvert = [
    'ryo.jpg',
    'bizdata_log_blue_back.jpg'
  ];

  for (const imageFile of imagesToConvert) {
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
    } catch (error) {
      console.error(`✗ Failed to process ${imageFile}:`, error.message);
    }
  }

  console.log('\n✓ All images processed and copied!');
}

convertAndCopy().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});

