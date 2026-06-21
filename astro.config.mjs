// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ⚠️ ここをCloudflare Pagesの実際のドメイン（またはカスタムドメイン）に変更してください
  // 例: 'https://my-client.pages.dev' or 'https://example.com'
  site: 'https://your-project.pages.dev',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});
