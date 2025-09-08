import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  css: {
    postcss: './postcss.config.cjs',
  },
});
