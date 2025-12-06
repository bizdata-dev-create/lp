# 画像変換ツール使用方法

## 概要

`scripts/image-converter.mjs` は、画像を指定したサイズ・形式に変換する再利用可能な関数を提供します。

## 基本的な使い方

### 1. 関数として使用する場合

```javascript
import { convertImage } from './scripts/image-converter.mjs';

// 横幅1600pxのwebpに変換
await convertImage(
  'src/img/original/v2_1206/hero_pc.jpg',
  1600,
  'webp',
  'src/img/original/v2_1206'
);
```

### 2. オプション付きで使用する場合

```javascript
import { convertImage } from './scripts/image-converter.mjs';

// 横幅1080pxのjpgに変換（品質90）
await convertImage(
  'src/img/original/v2_1206/hero_mobile.jpg',
  1080,
  'jpg',
  'src/img/original/v2_1206',
  { 
    quality: 90,
    maintainAspectRatio: true  // デフォルト: true
  }
);
```

## パラメータ説明

### `convertImage(imagePath, width, outputFormat, outputDir, options)`

- **imagePath** (string): 変換元の画像ファイルパス
- **width** (number): 出力画像の横幅（px）
- **outputFormat** (string): 出力形式（'webp', 'jpg', 'png' など）
- **outputDir** (string): 出力先ディレクトリパス
- **options** (object, オプション):
  - `quality` (number): 品質（webp/jpgの場合、デフォルト: 80）
  - `maintainAspectRatio` (boolean): 縦横比を維持するか（デフォルト: true）

## 使用例

### 例1: 単一画像をwebpに変換

```javascript
import { convertImage } from './scripts/image-converter.mjs';

await convertImage(
  'src/img/original/sample.jpg',
  1200,
  'webp',
  'src/img/dev'
);
```

### 例2: 複数画像を一括変換

```javascript
import { convertImage } from './scripts/image-converter.mjs';

const images = [
  { path: 'src/img/original/image1.jpg', width: 1080 },
  { path: 'src/img/original/image2.jpg', width: 1600 },
  { path: 'src/img/original/image3.jpg', width: 1080 },
];

for (const img of images) {
  await convertImage(
    img.path,
    img.width,
    'webp',
    'src/img/dev'
  );
}
```

### 例3: 高品質でjpgに変換

```javascript
import { convertImage } from './scripts/image-converter.mjs';

await convertImage(
  'src/img/original/high_quality.jpg',
  1920,
  'jpg',
  'src/img/dev',
  { quality: 95 }
);
```

## v2_1206フォルダの一括処理

`v2_1206`フォルダ内の画像を一括処理する場合は、スクリプトを直接実行します：

```bash
node scripts/image-converter.mjs
```

このコマンドは以下の処理を自動で行います：

1. 元画像を`_original`としてリネームしてバックアップ
2. `_pc`がついている画像 → 横幅1600pxのwebpに変換
3. それ以外の画像 → 横幅1080pxのwebpに変換
4. 変換後の画像を同じフォルダに配置

## 注意事項

- 元画像より大きくリサイズすることはありません（`withoutEnlargement: true`）
- 縦横比は自動的に維持されます
- 出力ディレクトリが存在しない場合は自動的に作成されます
- 既に同じ名前のファイルが存在する場合は上書きされます

