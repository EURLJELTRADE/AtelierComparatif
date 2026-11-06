import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ateliercomparatif.fr',
  trailingSlash: 'always',
  integrations: [sitemap()]
});
