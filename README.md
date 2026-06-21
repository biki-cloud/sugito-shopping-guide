# template-astro-static

**Astro + Tailwind CSS v4 + MicroCMS + Cloudflare Pages** の汎用静的コーポレートサイトテンプレートです。

`src/config.ts` の1ファイルを書き換えるだけで、どんな業種のホームページにも転用できます。

---

## 🧱 技術スタック

| 用途 | ツール |
|------|--------|
| フレームワーク | Astro（静的サイト生成） |
| スタイリング | Tailwind CSS v4 |
| CMS | MicroCMS（実績・ニュース管理） |
| お問い合わせ | Google Forms 埋め込み |
| ホスティング | Cloudflare Pages |

---

## 🚀 新規プロジェクトの作り方

```bash
gh repo create biki-cloud/client-xxx --template biki-cloud/template-astro-static --private
```

---

## ⚙️ セットアップ手順

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数ファイルを作成

```bash
cp .env.example .env
```

`.env` に以下を設定：

```
MICROCMS_API_KEY=your_api_key_here
MICROCMS_SERVICE_DOMAIN=your_service_domain
GOOGLE_FORM_ID=your_google_form_id
```

> **補足**: MicroCMS・Google Formsを使わない場合は空欄のままでも動きます。モックデータが自動的に表示されます。

### 3. サイト情報の設定（← ここが一番重要）

**`src/config.ts`** を開いて、クライアント情報を書き換えます。

```
src/config.ts  ← ここだけ書き換えればOK
```

変更できる項目：
- サイト名・説明・ドメイン
- 電話番号・メール・住所・営業時間
- サービス内容（最大6件）・料金感
- 会社概要・代表メッセージ
- サービス提供の流れ（ステップ）・FAQ

### 4. ドメインの設定

`astro.config.mjs` の `site` をCloudflare Pagesのドメインに変更します：

```js
site: 'https://your-project.pages.dev', // ← 実際のドメインに変更
```

### 5. 開発サーバー起動

```bash
npm run dev
```

---

## 📁 ページ構成

| ページ | URL | 説明 |
|--------|-----|------|
| TOP | `/` | ヒーロー・サービス概要・実績・FAQ |
| 実績一覧 | `/works/` | MicroCMS連携（モック対応あり） |
| 実績詳細 | `/works/{id}/` | 個別実績ページ |
| サービス | `/service/` | サービス詳細・料金目安 |
| サービス提供の流れ | `/flow/` | プロセス説明・FAQ |
| 会社概要 | `/about/` | 企業情報・代表メッセージ |
| お問い合わせ | `/contact/` | Google Forms 埋め込み |

---

## 🌐 Cloudflare Pages デプロイ設定

| 項目 | 値 |
|------|-----|
| Build command | `npm install && npm run build` |
| Output directory | `dist` |

---

## 🔧 よく使うコマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm run preview  # ビルド結果のプレビュー
```

## 詳しいハンズオン

初回セットアップから公開までの手順は [docs/HANDS_ON.md](docs/HANDS_ON.md) にまとめています。
