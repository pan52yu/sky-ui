import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'SkyuiShared',
      fileName: 'skyui-shared',
    },

    minify: false,

    rollupOptions: {
      external: [/@skyui.*/, 'vue'],

      output: {},
    },
  },
});
