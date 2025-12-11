import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, '../dist');
const indexHtmlPath = join(distDir, 'index.html');
const html404Path = join(distDir, '404.html');

if (!existsSync(indexHtmlPath)) {
  console.error('Error: index.html not found in dist directory. Please run "npm run build" first.');
  process.exit(1);
}

// index.htmlを読み込む
const indexHtml = readFileSync(indexHtmlPath, 'utf-8');

// 404.html用のJavaScriptを追加（パス復元用）
const pathRestoreScript = `
    <script>
      // GitHub Pages用: 404エラー時にパスを復元してReact Routerに処理させる
      // 404.htmlが表示された時点で、URLは既に正しいパス（例: /privacy）になっている
      // 無限ループを防ぐため、/index.htmlが含まれている場合は処理しない
      (function() {
        var path = window.location.pathname;
        var search = window.location.search;
        var hash = window.location.hash;
        
        // 既に/index.htmlが含まれている場合は無限ループを防ぐ
        if (path.indexOf('/index.html') === -1 && path !== '/') {
          // パスを復元してhistory APIで置き換える
          // これにより、React Routerが正しくルーティングを処理できる
          var newPath = path + search + hash;
          window.history.replaceState(null, '', newPath);
        }
      })();
    </script>
`;

// index.htmlの</head>の前にパス復元スクリプトを挿入
const html404 = indexHtml.replace('</head>', pathRestoreScript + '</head>');

// 404.htmlを書き込む
writeFileSync(html404Path, html404, 'utf-8');

console.log('✅ 404.html has been updated with the latest build files.');

