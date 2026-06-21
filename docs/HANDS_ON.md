# template-astro-static ハンズオン

このテンプレートは、店舗HP・コーポレートサイト・士業サイト・教室サイト・サロンサイトなど、更新頻度が高すぎないWebサイトを素早く作るための静的サイトスターターです。

## できあがるもの

- トップページ
- サービス紹介
- 実績一覧・実績詳細
- サービス提供の流れ
- 会社概要
- お問い合わせページ
- MicroCMSが未設定でも動くモックデータ表示
- Cloudflare Pagesへの公開

## 1. テンプレートからリポジトリを作る

```bash
gh repo create biki-cloud/client-sample-site --template biki-cloud/template-astro-static --private
git clone https://github.com/biki-cloud/client-sample-site.git
cd client-sample-site
```

`client-sample-site` は案件名に置き換えてください。

## 2. 依存関係を入れる

```bash
npm install
```

Node.js は `package.json` の `engines` に合わせて `22.12.0` 以上を使います。

## 3. 最初に変更するファイル

まずはこの2つだけ変更すれば、案件用サイトとして見た目を確認できます。

| ファイル | 目的 |
| --- | --- |
| `src/config.ts` | 屋号、連絡先、サービス、料金、FAQ、会社概要を変更 |
| `astro.config.mjs` | 公開URLを変更 |

## 4. サイト情報を入れる

`src/config.ts` を開き、以下から順番に置き換えます。

1. `name`: 屋号・会社名
2. `description`: 検索結果やOGPで使う説明文
3. `contact`: 電話番号、住所、営業時間、メール、LINE
4. `company.details`: 会社概要テーブル
5. `hero`: トップのキャッチコピーと画像
6. `services`: サービス内容
7. `prices`: 料金目安
8. `process`: 問い合わせから完了までの流れ
9. `faq`: よくある質問

画像は最初はURLのままで構いません。納品前に `public/images/` へ案件用画像を置き、`/images/example.jpg` のようなパスに差し替えると管理しやすいです。

## 5. 環境変数を作る

```bash
cp .env.example .env
```

MicroCMSとGoogle Formsを使わない初期確認では、`.env` は空欄のままで動きます。

```env
MICROCMS_API_KEY=
MICROCMS_SERVICE_DOMAIN=
GOOGLE_FORM_ID=
```

## 6. 開発サーバーで確認する

```bash
npm run dev
```

ブラウザで `http://localhost:4321` を開きます。

確認するポイント:

- 会社名・電話番号・住所が差し替わっている
- サービス名が案件内容に合っている
- 料金表に不自然な表現がない
- FAQが業種に合っている
- スマホ幅で文字が崩れていない

## 7. MicroCMSを使う場合

実績とニュースをクライアント側で更新したい場合だけ設定します。不要ならこの手順は飛ばせます。

MicroCMSで作るAPI:

| API | 用途 |
| --- | --- |
| `works` | 実績・事例 |
| `news` | お知らせ |

`.env` に設定します。

```env
MICROCMS_API_KEY=xxxxxxxx
MICROCMS_SERVICE_DOMAIN=your-service-domain
```

未設定の場合は `src/lib/microcms.ts` のモックデータが表示されます。

## 8. Google Formsを使う場合

問い合わせフォームをGoogle Formsで受ける場合は、フォームIDを `.env` に入れます。

```env
GOOGLE_FORM_ID=xxxxxxxxxxxxxxxx
```

フォームIDはGoogle Formsの埋め込みURLから取得します。

## 9. Cloudflare Pagesで公開する

Cloudflare PagesでGitHubリポジトリを連携し、以下を設定します。

| 項目 | 値 |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm install && npm run build` |
| Output directory | `dist` |

公開後、`astro.config.mjs` の `site` を実際のURLに変更します。

```js
site: 'https://client-sample-site.pages.dev',
```

変更後にコミット・プッシュすると、sitemapやOGPのURLも正しくなります。

## 10. 納品前チェック

```bash
npm run build
npm run preview
```

確認項目:

- `npm run build` が成功する
- PCとスマホで主要ページを確認する
- 電話リンクが正しい
- Google Formsまたは問い合わせ導線が動く
- MicroCMSを使う場合、実績・ニュースが表示される
- OGP画像とタイトルが案件名になっている

## よくある詰まりどころ

### MicroCMSの値が空でも大丈夫か

大丈夫です。未設定時はモックデータが表示されます。クライアント更新が必要な案件だけMicroCMSを設定してください。

### どこまで `src/config.ts` で変えられるか

基本情報、サービス、料金、流れ、FAQ、会社概要は `src/config.ts` で変更できます。ページ構成そのものを変える場合は `src/pages/` を編集します。

### 静的サイトで十分か

店舗HP、会社紹介、LP、実績紹介、お知らせ程度なら十分です。ログイン、会員別表示、ユーザー投稿、決済後のマイページが必要なら `template-nextjs-dynamic` を使います。
