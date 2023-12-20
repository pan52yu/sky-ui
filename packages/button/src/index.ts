// packages/button/src/index.ts
import SkyButton from './button.vue';
import './button.scss';
// 导入 UnoCSS 虚拟模块，确保 UnoCSS 定义的 CSS 变量部分能够被注入到样式产物中
import 'virtual:uno.css';

export { SkyButton };
export * from './button';
