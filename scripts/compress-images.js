import sharp from 'sharp';
import { readdir, rename, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMG_DIR = join(__dirname, '../src/img');

// 画像ごとの最適化設定
const imageConfigs = {
  // モバイル画像: 最大幅900px、品質75%
  'hero_mobile.jpg': { maxWidth: 900, quality: 75 },
  'compare_table_form_mobile.jpg': { maxWidth: 900, quality: 75 },
  'compare_table_mobile.jpg': { maxWidth: 900, quality: 75 },
  'value_proposition_mobile.jpg': { maxWidth: 900, quality: 75 },
  
  // PC画像: 最大幅1600px、品質80%
  'hero_pc.jpg': { maxWidth: 1600, quality: 80 },
  'compare_table_form_pc.jpg': { maxWidth: 1600, quality: 80 },
  'compare_table_pc.jpg': { maxWidth: 1600, quality: 80 },
  'value_proposition_pc.jpg': { maxWidth: 1600, quality: 80 },
  
  // ロゴ: 最大幅400px、品質85%（ロゴは少し高品質に）
  'logo_deeper.jpg': { maxWidth: 400, quality: 85 },
  
  // その他の画像: 最大幅1200px、品質75%
  'benefit1.jpg': { maxWidth: 1200, quality: 75 },
  'benefit2.jpg': { maxWidth: 1200, quality: 75 },
  'benefit3.jpg': { maxWidth: 1200, quality: 75 },
  'benefit4.jpg': { maxWidth: 1200, quality: 75 },
  'benfit.jpg': { maxWidth: 1200, quality: 75 },
  'company1.jpg': { maxWidth: 1200, quality: 75 },
  'ryo.jpg': { maxWidth: 1200, quality: 75 },
  'hero-businessman.jpg': { maxWidth: 1200, quality: 75 },
};

async function backupOriginalFile(filePath) {
  const ext = extname(filePath);
  const baseName = basename(filePath, ext);
  const dir = dirname(filePath);
  const backupPath = join(dir, `${baseName}_original${ext}`);
  
  // 既にバックアップがある場合はスキップ
  try {
    await stat(backupPath);
    console.log(`⚠️  バックアップ済み: ${basename(filePath)}`);
    return backupPath;
  } catch {
    // バックアップが存在しない場合は作成
    await rename(filePath, backupPath);
    console.log(`✅ バックアップ作成: ${basename(filePath)} → ${basename(backupPath)}`);
    return backupPath;
  }
}

async function compressImage(sourcePath, outputPath, config) {
  try {
    const image = sharp(sourcePath);
    const metadata = await image.metadata();
    
    const originalSize = (await stat(sourcePath)).size;
    const originalWidth = metadata.width;
    const originalHeight = metadata.height;
    
    // リサイズが必要かチェック
    let resizeOptions = null;
    if (originalWidth > config.maxWidth) {
      resizeOptions = {
        width: config.maxWidth,
        height: null, // アスペクト比を保持
        fit: 'inside',
        withoutEnlargement: true,
      };
    }
    
    // 圧縮処理
    let pipeline = image;
    if (resizeOptions) {
      pipeline = pipeline.resize(resizeOptions.width, resizeOptions.height, {
        fit: resizeOptions.fit,
        withoutEnlargement: resizeOptions.withoutEnlargement,
      });
    }
    
    pipeline = pipeline.jpeg({
      quality: config.quality,
      mozjpeg: true, // より良い圧縮
    });
    
    await pipeline.toFile(outputPath);
    
    const newSize = (await stat(outputPath)).size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    const sizeReductionKB = ((originalSize - newSize) / 1024).toFixed(1);
    
    console.log(`✅ 圧縮完了: ${basename(outputPath)}`);
    console.log(`   サイズ: ${(originalSize / 1024).toFixed(1)} KiB → ${(newSize / 1024).toFixed(1)} KiB (${reduction}%削減, ${sizeReductionKB} KiB削減)`);
    if (resizeOptions) {
      const newMetadata = await sharp(outputPath).metadata();
      console.log(`   解像度: ${originalWidth}x${originalHeight} → ${newMetadata.width}x${newMetadata.height}`);
    }
    
    return { originalSize, newSize, reduction: parseFloat(reduction) };
  } catch (error) {
    console.error(`❌ エラー: ${basename(outputPath)} - ${error.message}`);
    throw error;
  }
}

async function main() {
  console.log('🖼️  画像圧縮を開始します...\n');
  
  try {
    const files = await readdir(IMG_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    );
    
    let totalOriginalSize = 0;
    let totalNewSize = 0;
    let processedCount = 0;
    
    for (const file of imageFiles) {
      const filePath = join(IMG_DIR, file);
      const config = imageConfigs[file] || { maxWidth: 1200, quality: 75 };
      
      console.log(`\n📸 処理中: ${file}`);
      
      // バックアップ作成（既にバックアップがある場合はそのパスを返す）
      const backupPath = await backupOriginalFile(filePath);
      
      // バックアップファイルから圧縮して、元のファイル名で保存
      const result = await compressImage(backupPath, filePath, config);
      
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
      processedCount++;
    }
    
    console.log(`\n\n📊 圧縮結果サマリー:`);
    console.log(`   処理した画像数: ${processedCount}`);
    console.log(`   合計サイズ: ${(totalOriginalSize / 1024).toFixed(1)} KiB → ${(totalNewSize / 1024).toFixed(1)} KiB`);
    console.log(`   削減率: ${((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1)}%`);
    console.log(`   削減量: ${((totalOriginalSize - totalNewSize) / 1024).toFixed(1)} KiB`);
    console.log(`\n✅ すべての画像の圧縮が完了しました！`);
    
  } catch (error) {
    console.error(`\n❌ エラーが発生しました:`, error);
    process.exit(1);
  }
}

main();

