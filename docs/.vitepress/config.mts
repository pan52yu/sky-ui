// docs/.vitepress/config.mts
import {defineConfig} from 'vitepress';
import {mdPlugin} from './plugins';
import apiConfig from '../configs/api.json';
import componentsConfig from '../configs/components.json';

// 配置参考：https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'SkyUI',
    description: 'Vue3 组件库',
    ignoreDeadLinks: true, // 忽略死链
    themeConfig: {
        // 新增 themeConfig.nav 头部导航配置
        // 参考：https://vitepress.dev/reference/default-theme-nav#navigation-links
        nav: [
            {text: '指南', link: '/guide/'},
            {text: '组件', link: '/components/'},
            {text: 'API', link: '/api/README'},
            {text: '演练场', link: '/playground'},
        ],
        // 新增 themeConfig.sidebar 文档章节导航配置
        // 参考：https://vitepress.dev/reference/default-theme-sidebar#multiple-sidebars
        sidebar: {
            // 指南部分的章节导航
            '/guide/': [
                {
                    text: '指引',
                    items: [
                        {text: '组件库介绍', link: '/guide/'},
                        {text: '快速开始', link: '/guide/quick-start'},
                    ],
                },
            ],
            // 组件部分的章节导航
            '/components/': componentsConfig,
            // API 部分的章节导航
            '/api/': apiConfig,
        },
        // 每篇文章右侧的大纲开启支持 3 级的深度
        outline: {
            level: [2, 3],
        }
    },
    // 注册 markdown-it 插件
    markdown: {
        config: md => {
            md.use(mdPlugin)
        }
    }
});
