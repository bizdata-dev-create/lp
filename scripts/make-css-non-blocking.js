import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIST_DIR = join(__dirname, '../dist');
const HTML_FILE = join(DIST_DIR, 'index.html');

try {
  console.log('🔧 CSSを非ブロッキング形式に変換中...');
  
  let html = readFileSync(HTML_FILE, 'utf-8');
  
  // 通常のCSS読み込みを非ブロッキング形式に変換
  // <link rel="stylesheet" ...> を以下の形式に変更:
  // <link rel="preload" as="style" ...>
  // <link rel="stylesheet" ... media="print" onload="this.media='all'">
  // <noscript><link rel="stylesheet" ...></noscript>
  
  const cssLinkRegex = /<link\s+rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g;
  
  html = html.replace(cssLinkRegex, (match, href) => {
    // 既に非ブロッキング形式の場合はスキップ
    if (match.includes('media="print"') || match.includes('rel="preload"')) {
      return match;
    }
    
    // crossorigin属性があるかチェック
    const crossorigin = match.includes('crossorigin') ? ' crossorigin' : '';
    
    return `
    <link rel="preload" as="style" href="${href}"${crossorigin}>
    <link rel="stylesheet" href="${href}"${crossorigin} media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="${href}"${crossorigin}></noscript>`;
  });
  
  writeFileSync(HTML_FILE, html, 'utf-8');
  
  console.log('✅ CSSを非ブロッキング形式に変換しました！');
  console.log('   - CSSは preload で先読みされます');
  console.log('   - レンダリングをブロックしません');
  
} catch (error) {
  console.error('❌ エラーが発生しました:', error.message);
  process.exit(1);
}




