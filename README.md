# Portfolio

Jun Hirako のポートフォリオサイトです。GitHub Pages で公開するため、Next.js の静的エクスポートとしてビルドします。

## 実装概要

- フレームワーク: Next.js App Router
- 言語: TypeScript
- UI: React, Tailwind CSS, sanitize.css
- データ管理: YAML
- デプロイ: GitHub Actions から GitHub Pages へ自動デプロイ
- Node.js: `.tool-versions` に記載したバージョンを使用

サイト上に表示する文章は英語で管理します。この README のみ日本語で記載します。

## ディレクトリ構成

- `src/app/layout.tsx`: ルートレイアウト、メタデータ、ヘッダーとフッターの配置
- `src/app/page.tsx`: 1 ページ構成のポートフォリオ本体
- `src/layouts/Header.tsx`: ページ上部の名前とページ内リンク
- `src/layouts/Footer.tsx`: コピーライトとリポジトリリンク
- `src/components/ExternalLink.tsx`: 外部リンク用コンポーネント
- `src/lib/content.ts`: YAML ファイルをビルド時に読み込む処理と型定義
- `src/data/profile.yaml`: 名前、所属、写真パス
- `src/data/publications.yaml`: 査読済み論文、プレプリント、その他公開物
- `src/data/experience.yaml`: 経歴、学歴、受賞歴
- `src/data/links.yaml`: 各種アカウントへのリンク
- `public/profile-placeholder.svg`: 写真差し替えまで使用する仮画像
- `.github/workflows/nextjs.yml`: GitHub Pages へのビルドとデプロイ

## ローカル開発

依存関係をインストールします。

```bash
yarn install
```

開発サーバーを起動します。

```bash
yarn dev
```

品質チェックを実行します。

```bash
yarn typecheck
yarn lint
yarn build
```

`yarn build` を実行すると、静的サイトが `out/` に生成されます。

## データの編集

各項目は `src/data/*.yaml` を編集します。表示順は YAML の配列順です。新しい論文、経歴、リンクを追加する場合は、既存の項目と同じキー構造で追記します。

写真を差し替える場合は、画像を `public/` に追加し、`src/data/profile.yaml` の `photo.src` を `/画像ファイル名` に変更します。

## デプロイ

`main` ブランチへ push すると、GitHub Actions が以下を実行します。

1. Node.js と依存関係をセットアップ
2. `yarn typecheck`
3. `yarn lint`
4. `yarn build`
5. `out/` を GitHub Pages にデプロイ

GitHub Pages の公開元は GitHub Actions に設定します。
