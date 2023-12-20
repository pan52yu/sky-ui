import Button from './button.vue';
import './button.scss';
// 导入 UnoCSS 虚拟模块，确保 UnoCSS 定义的 CSS 变量部分能够被注入到样式产物中
import 'virtual:uno.css';

export { Button };
export type ButtonInstance = InstanceType<typeof Button>;
export * from './props';
