import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://louvre.my.id',
  output: 'static',
  build: { inlineStylesheets: 'always' },
});
