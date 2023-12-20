// demo/vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'node:path';
import unocss from 'unocss/vite';

export default defineConfig({
  plugins: [vue(), unocss()],
  resolve: {
    alias: [
      {
        find: /^@skyuix\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1', 'src'),
      },
    ],
  },
});
