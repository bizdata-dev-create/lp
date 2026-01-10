# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

React + Vite + TypeScriptで構築されたランディングページアプリケーション。i18n対応、Google Formsとの連携、画像最適化機能を含む。

## 開発コマンド

### 基本コマンド
```bash
# 開発サーバー起動（ポート3000）
npm run dev

# プロダクションビルド
npm run build

# ビルドのプレビュー
npm run preview

# 画像圧縮
npm run compress-images
```

### Makefileコマンド
```bash
# Gitプッシュ（ブランチとメッセージを指定可能）
make git-push BRANCH=main MSG="コミットメッセージ"

# mainブランチの最新を取得
make pull-main
```

## アーキテクチャ

### ルーティング構造
- `src/router/config.tsx`: ルート定義の一元管理
- `src/router/index.ts`: `window.REACT_APP_NAVIGATE`でグローバルナビゲーション関数を公開
- React Router v7を使用

### 自動インポート設定
`vite.config.ts`でunplugin-auto-importを使用:
- React hooks（useState、useEffect等）
- React Router hooks（useNavigate、useLocation等）
- react-i18next（useTranslation、Trans）

これらは明示的なインポート不要で使用可能。

### 環境変数
- `__BASE_PATH__`: ビルド時に注入されるベースパス（デフォルト: `/`）
- `__IS_PREVIEW__`: プレビューモードフラグ

### 国際化（i18n）
- `src/i18n/`: i18next設定
- デフォルト言語: 英語（en）
- ブラウザ言語検出機能あり

### Google Forms連携
`src/config/googleForm.ts`:
- FORM_ID: Google FormのID
- ENTRY: 各フィールドのentry ID（company、name、email、phone）
- `getFormPostUrl()`: 送信先URLを生成

### カスタムTailwindテーマ
`tailwind.config.ts`:
- カスタムカラー: `brand-blue`、`brand-blue-light`、`brand-red`、`brand-red-light`
- カスタムスクリーン: `mobile`（0px）、`desktop`（768px）
- `marker-yellow`: 黄色マーカー用グラデーション

### ビルドプロセス
ビルド時に自動実行されるスクリプト:
1. **make-css-non-blocking.js**: CSS読み込みを非ブロッキング化（preload + media="print"）
2. **update-404.js**: 404.htmlを生成し、GitHub Pages向けにパス復元スクリプトを挿入

### ページ構造
- `src/pages/home/`: ホームページ（メインLP）
- `src/pages/terms/`: 利用規約
- `src/pages/privacy/`: プライバシーポリシー
- `src/pages/company/`: 会社情報
- `src/pages/NotFound.tsx`: 404ページ

### 共通コンポーネント
- `Layout.tsx`: 全ページ共通レイアウト
- `ContactFormModal.tsx`: お問い合わせフォームモーダル
- `SpecialOffer.tsx`: 特別オファー表示
- `ScrollToTop.tsx`: ルート変更時の自動スクロール
- `AnchorLink.tsx`: アンカーリンク処理
- `icons.tsx`: 共通アイコンコンポーネント

### パスエイリアス
`@/`: `src/`ディレクトリへのエイリアス（vite.config.tsで設定）

## 画像処理

### 画像圧縮スクリプト
`scripts/compress-images.js`:
- WebP形式への変換
- 品質設定可能
- メタデータ除去

### その他の画像スクリプト
- `image-converter.mjs`: 汎用画像変換
- `convert-to-webp.mjs`: WebP変換
- `convert-specific-images.mjs`: 特定画像の変換

## デプロイメント

### GitHub Pages向け設定
- 404.htmlが自動生成され、SPAルーティングをサポート
- パス復元スクリプトにより、直接アクセス時も正しくルーティング

## 注意事項

### ビルド時の動作
- ビルド後、CSSは自動的に非ブロッキング形式に変換される
- 404.htmlは常にindex.htmlから生成される

### Google Forms設定変更時
`src/config/googleForm.ts`のFORM_IDとENTRYフィールドを更新する必要がある。
