import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  // 增加插件的使用
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'SkyuiInput',
      fileName: 'skyui-input',
    },
    minify: false,
    rollupOptions: {
      external: [
        // 除了 @skyui/shared，未来可能还会依赖其他内部模块，不如用正则表达式将 @skyui 开头的依赖项一起处理掉
        /@skyui.*/,
        'vue',
      ],
    },
  },
});
