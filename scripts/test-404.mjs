import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = resolve(__dirname, '../dist');
const port = 4173;

const server = createServer((req, res) => {
  let filePath = join(distDir, req.url === '/' ? 'index.html' : req.url);
  
  // GitHub Pagesの動作を再現: 存在しないパスは404.htmlを返す
  if (!existsSync(filePath) || req.url.endsWith('/')) {
    // ディレクトリの場合はindex.htmlを探す
    if (req.url.endsWith('/')) {
      filePath = join(distDir, req.url, 'index.html');
    }
    
    // それでも存在しない場合は404.htmlを返す
    if (!existsSync(filePath)) {
      filePath = join(distDir, '404.html');
      res.writeHead(404, { 'Content-Type': 'text/html' });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
    }
  } else {
    // ファイルが存在する場合
    const ext = filePath.split('.').pop();
    const contentType = {
      'html': 'text/html',
      'js': 'application/javascript',
      'css': 'text/css',
      'json': 'application/json',
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'webp': 'image/webp',
      'svg': 'image/svg+xml',
      'ico': 'image/x-icon',
    }[ext] || 'application/octet-stream';
    
    res.writeHead(200, { 'Content-Type': contentType });
  }
  
  try {
    const content = readFileSync(filePath);
    res.end(content);
  } catch (err) {
    // 404.htmlも存在しない場合はエラー
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(port, () => {
  console.log(`\n🚀 Test server running at http://localhost:${port}`);
  console.log(`\n📝 Test URLs:`);
  console.log(`   - Home: http://localhost:${port}/`);
  console.log(`   - Privacy: http://localhost:${port}/privacy`);
  console.log(`   - Terms: http://localhost:${port}/terms`);
  console.log(`   - Company: http://localhost:${port}/company`);
  console.log(`\n⚠️  Make sure to run 'npm run build' first!\n`);
});


