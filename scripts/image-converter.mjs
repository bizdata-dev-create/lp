import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

/**
 * 画像を指定したサイズ・形式に変換する再利用可能な関数
 * 
 * @param {string} imagePath - 変換元の画像ファイルパス
 * @param {number} width - 出力画像の横幅（px）
 * @param {string} outputFormat - 出力形式 ('webp', 'jpg', 'png' など)
 * @param {string} outputDir - 出力先ディレクトリパス
 * @param {object} options - オプション
 * @param {number} options.quality - 品質（webp/jpgの場合、デフォルト: 80）
 * @param {boolean} options.maintainAspectRatio - 縦横比を維持するか（デフォルト: true）
 * @returns {Promise<string>} 出力ファイルのパス
 * 
 * @example
 * // 横幅1600pxのwebpに変換
 * await convertImage(
 *   'src/img/original/v2_1206/hero_pc.jpg',
 *   1600,
 *   'webp',
 *   'src/img/original/v2_1206'
 * );
 * 
 * @example
 * // 横幅1080pxのjpgに変換（品質90）
 * await convertImage(
 *   'src/img/original/v2_1206/hero_mobile.jpg',
 *   1080,
 *   'jpg',
 *   'src/img/original/v2_1206',
 *   { quality: 90 }
 * );
 */
export async function convertImage(imagePath, width, outputFormat, outputDir, options = {}) {
  const {
    quality = 80,
    maintainAspectRatio = true
  } = options;

  try {
    // 入力ファイルの存在確認
    await fs.access(imagePath);

    // 出力ディレクトリの作成
    await fs.mkdir(outputDir, { recursive: true });

    // ファイル名の生成
    const inputFileName = path.basename(imagePath);
    const inputBaseName = path.basename(imagePath, path.extname(imagePath));
    const outputFileName = `${inputBaseName}.${outputFormat}`;
    const outputPath = path.join(outputDir, outputFileName);

    // Sharpで画像を読み込み
    let sharpInstance = sharp(imagePath);

    // メタデータを取得して縦横比を計算
    const metadata = await sharpInstance.metadata();
    const aspectRatio = metadata.width / metadata.height;

    // リサイズ設定
    const resizeOptions = {
      width: width,
      height: maintainAspectRatio ? Math.round(width / aspectRatio) : undefined,
      fit: 'inside',
      withoutEnlargement: true // 元画像より大きくしない
    };

    // 形式に応じた変換処理
    switch (outputFormat.toLowerCase()) {
      case 'webp':
        sharpInstance = sharpInstance
          .resize(resizeOptions)
          .webp({ quality });
        break;
      case 'jpg':
      case 'jpeg':
        sharpInstance = sharpInstance
          .resize(resizeOptions)
          .jpeg({ quality, mozjpeg: true });
        break;
      case 'png':
        sharpInstance = sharpInstance
          .resize(resizeOptions)
          .png({ quality: Math.round(quality / 100 * 9), compressionLevel: 9 });
        break;
      default:
        throw new Error(`Unsupported output format: ${outputFormat}`);
    }

    // ファイルに出力
    await sharpInstance.toFile(outputPath);

    console.log(`✓ Converted: ${inputFileName} -> ${outputFileName} (${width}px width)`);
    return outputPath;
  } catch (error) {
    console.error(`✗ Failed to convert ${imagePath}:`, error.message);
    throw error;
  }
}

/**
 * v2_1206フォルダ内の画像を一括処理する関数
 */
async function processV2_1206Images() {
  const v2Dir = path.resolve('src', 'img', 'original', 'v2_1206');
  
  try {
    // フォルダ内のファイルを取得
    const entries = await fs.readdir(v2Dir);
    const imageFiles = entries.filter(entry => {
      const ext = path.extname(entry).toLowerCase();
      return ['.jpg', '.jpeg', '.png'].includes(ext);
    });

    console.log(`Found ${imageFiles.length} image files in v2_1206 folder\n`);

    for (const file of imageFiles) {
      const filePath = path.join(v2Dir, file);
      const baseName = path.basename(file, path.extname(file));
      const ext = path.extname(file);

      try {
        // ① 元画像を_originalとしてリネームして残す
        const originalPath = path.join(v2Dir, `${baseName}_original${ext}`);
        try {
          await fs.access(originalPath);
          console.log(`⚠ Original file already exists: ${baseName}_original${ext}`);
        } catch {
          await fs.copyFile(filePath, originalPath);
          console.log(`✓ Created backup: ${baseName}_original${ext}`);
        }

        // ② 変換処理
        // _pcがついている画像は1600px、それ以外は1080px
        const width = baseName.includes('_pc') ? 1600 : 1080;
        
        await convertImage(filePath, width, 'webp', v2Dir);
      } catch (error) {
        console.error(`Failed to process ${file}:`, error.message);
      }
    }

    console.log('\n✓ All images processed!');
  } catch (error) {
    console.error('Error processing v2_1206 images:', error);
    process.exit(1);
  }
}

// スクリプトとして直接実行された場合
if (import.meta.url.endsWith(process.argv[1]) || process.argv[1]?.includes('image-converter.mjs')) {
  processV2_1206Images();
}

