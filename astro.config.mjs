import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sawachier.github.io',
  base: '/soireeGuitare',
  integrations: [sitemap()],
});
