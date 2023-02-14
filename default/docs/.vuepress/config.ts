import { defaultTheme, defineUserConfig } from 'vuepress'
import {
    navbarZh,
    navbarEn,
    sidebarZh,
    sidebarEn,
} from './configs/index.js'

// import { containerPlugin } from '@vuepress/plugin-container'
// import { palettePlugin } from '@vuepress/plugin-palette'

import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'KitX Docs',
    description: 'KitX 文档站点',
    base: '/KitX-Docs/',
    head: [
        ['link', { rel: 'icon', href: 'https://source.catrol.cn/icons/Project/Catrol/KitX/KitX-Icon-128x.png' }]
    ],
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: 'KitX Docs',
            description: 'KitX 文档站点',
        },
        '/en/': {
            lang: 'en-US',
            title: 'KitX Docs',
            description: 'Docs of KitX',
        },
    },

    theme: defaultTheme({
        logo: 'https://source.catrol.cn/icons/Project/Catrol/KitX/KitX-Icon-1024x-margin-2x.png',
        repo: 'https://github.com/Crequency/KitX',
        docsRepo: 'https://github.com/Crequency/KitX-Docs',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/default/:path',
        lastUpdated: true,
        contributors: true,
        locales: {
            '/': {
                selectLanguageName: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdatedText: '最后更新于',
                contributorsText: '贡献者',
                backToHome: '返回首页',
                openInNewWindow: '在新窗口打开',
                toggleColorMode: '切换主题',
                toggleSidebar: '切换侧边栏',
                navbar: navbarZh,
                sidebar: sidebarZh,
            },
            '/en/': {
                selectLanguageName: 'English',
                editLinkText: 'Edit this page on GitHub',
                lastUpdatedText: 'Last Updated',
                contributorsText: 'Contributors',
                backToHome: 'Back to Home',
                openInNewWindow: 'Open in new window',
                toggleColorMode: 'Toggle Color Mode',
                toggleSidebar: 'Toggle Sidebar',
                navbar: navbarEn,
                sidebar: sidebarEn,
            }
        },
    }),

    plugins: [

        // palettePlugin({
        //     preset: 'sass'
        // }),
        // containerPlugin({
        //     type: 'center',
        //     before: info => `<div class="custom-container-center"><div style="display: block; margin: 0 auto;">`,
        //     after: string => '</div></div>',
        // }),
        mdEnhancePlugin({
            flowchart: true,
            container: true, // 自定义容器
            mermaid: true,
        }),

    ]
})
