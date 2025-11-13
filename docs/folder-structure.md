# フォルダ構成ドキュメント

## プロジェクト概要

このプロジェクトは、React 19 + TypeScript + Viteを使用したランディングページアプリケーションです。
国際化対応、ルーティング、外部サービス統合（Firebase、Supabase、Stripe）などの機能を備えています。

## ルートディレクトリ構成

```
form-sales-lp/
├── docs/                    # ドキュメント
├── src/                     # ソースコード
├── index.html              # HTMLエントリーポイント
├── package.json            # 依存関係とスクリプト
├── vite.config.ts          # Vite設定
├── tailwind.config.ts      # Tailwind CSS設定
├── postcss.config.ts        # PostCSS設定
├── tsconfig.json           # TypeScript設定（共通）
├── tsconfig.app.json       # TypeScript設定（アプリケーション）
└── tsconfig.node.json      # TypeScript設定（Node.js）
```

## src/ ディレクトリ詳細

### 主要ファイル

- `main.tsx` - アプリケーションのエントリーポイント
  - React StrictModeでアプリを初期化
  - i18nとCSSをインポート
  - ルート要素にAppコンポーネントをレンダリング

- `App.tsx` - メインアプリケーションコンポーネント
  - BrowserRouterでルーティングを設定
  - AppRoutesコンポーネントをレンダリング

- `index.css` - グローバルスタイルシート

- `vite-env.d.ts` - Viteの型定義ファイル

### pages/ - ページコンポーネント

ページコンポーネントを格納するディレクトリです。

```
src/pages/
├── home/
│   └── page.tsx           # ホームページコンポーネント
└── NotFound.tsx           # 404エラーページコンポーネント
```

**設計方針:**
- 各ページは独立したディレクトリまたはファイルとして管理
- ページ名に応じてディレクトリを作成（例: `home/`）
- 各ページディレクトリ内に`page.tsx`を配置

### router/ - ルーティング設定

React Routerの設定を管理するディレクトリです。

```
src/router/
├── config.tsx             # ルート定義（RouteObject[]）
└── index.ts               # ルーターエクスポート
```

**設計方針:**
- `config.tsx`にルート定義を集約
- `index.ts`からAppRoutesコンポーネントをエクスポート
- ルート追加時は`config.tsx`を編集

### i18n/ - 国際化設定

i18nextを使用した国際化（多言語対応）の設定を管理するディレクトリです。

```
src/i18n/
├── index.ts               # i18n初期化設定
└── local/
    └── index.ts           # 翻訳リソース（言語ファイル）
```

**設計方針:**
- `index.ts`でi18nextの初期化と設定を行う
- `local/`ディレクトリに各言語の翻訳リソースを配置
- 言語検出は`i18next-browser-languagedetector`を使用

## 設定ファイル詳細

### ビルド・開発ツール

- **vite.config.ts** - Viteのビルド設定
  - React SWCプラグイン使用
  - 開発サーバー設定

- **tsconfig.json** - TypeScript共通設定
- **tsconfig.app.json** - アプリケーション用TypeScript設定
- **tsconfig.node.json** - Node.js環境用TypeScript設定

### スタイリング

- **tailwind.config.ts** - Tailwind CSS設定
- **postcss.config.ts** - PostCSS設定（Tailwind CSS用）

## 依存関係の主要パッケージ

### コアライブラリ
- `react` / `react-dom` - React 19
- `react-router-dom` - ルーティング
- `typescript` - 型安全性

### 国際化
- `i18next` - 国際化フレームワーク
- `react-i18next` - React用i18nextバインディング
- `i18next-browser-languagedetector` - ブラウザ言語検出

### 外部サービス
- `firebase` - Firebase統合
- `@supabase/supabase-js` - Supabase統合
- `@stripe/react-stripe-js` - Stripe決済統合

### UI・ビジュアライゼーション
- `tailwindcss` - ユーティリティファーストCSS
- `recharts` - グラフ・チャートライブラリ
- `lucide-react` - アイコンライブラリ

## 開発スクリプト

```json
{
  "dev": "vite",           # 開発サーバー起動
  "build": "vite build",   # 本番ビルド
  "preview": "vite preview" # ビルド結果のプレビュー
}
```

## フォルダ構成の設計原則

1. **関心の分離**: ページ、ルーティング、国際化を独立したディレクトリで管理
2. **スケーラビリティ**: 新しいページ追加時は`pages/`配下にディレクトリを作成
3. **型安全性**: TypeScript設定を環境ごとに分離（app/node）
4. **モジュール化**: 各機能を独立したモジュールとして管理

## 今後の拡張予想

以下のようなディレクトリが追加される可能性があります：

```
src/
├── components/          # 再利用可能なコンポーネント
├── hooks/              # カスタムフック
├── utils/              # ユーティリティ関数
├── types/              # TypeScript型定義
├── services/           # API通信・外部サービス連携
├── stores/             # 状態管理（必要に応じて）
└── assets/             # 静的リソース（画像、フォント等）
```

## 更新履歴

- 初版作成: 2024年


