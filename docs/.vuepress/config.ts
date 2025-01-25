import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { plumeTheme, LastUpdatedOptions } from 'vuepress-theme-plume'
import {
    navbarZh,
    navbarEn,
    sidebarZh,
    sidebarEn,
} from './configs/index.js'

import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'KitX Docs',
    description: 'KitX 文档站点',
    base: '/',

    head: [
        [
            'link',
            { rel: 'icon', href: 'https://img.catrol.cn/icons/projects/kitx/KitX-Icon-128x.png' }
        ]
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

    // theme: defaultTheme({
    //     logo: 'https://img.catrol.cn/icons/projects/kitx/KitX-Icon-1024x-margin-2x.png',
    //     repo: 'https://github.com/Crequency/KitX/',
    //     docsRepo: 'https://github.com/Crequency/KitX-Docs/',
    //     docsBranch: 'main',
    //     docsDir: 'docs',
    //     editLinkPattern: ':repo/edit/:branch/:path',
    //     lastUpdated: true,
    //     contributors: true,

    //     locales: {
    //         '/': {
    //             selectLanguageName: '简体中文',
    //             editLinkText: '在 GitHub 上编辑此页',
    //             lastUpdatedText: '最后更新于',
    //             contributorsText: '贡献者',
    //             backToHome: '返回首页',
    //             openInNewWindow: '在新窗口打开',
    //             toggleColorMode: '切换主题',
    //             toggleSidebar: '切换侧边栏',
    //             navbar: navbarZh,
    //             sidebar: sidebarZh,
    //         },
    //         '/en/': {
    //             selectLanguageName: 'English',
    //             editLinkText: 'Edit this page on GitHub',
    //             lastUpdatedText: 'Last Updated',
    //             contributorsText: 'Contributors',
    //             backToHome: 'Back to Home',
    //             openInNewWindow: 'Open in new window',
    //             toggleColorMode: 'Toggle Color Mode',
    //             toggleSidebar: 'Toggle Sidebar',
    //             navbar: navbarEn,
    //             sidebar: sidebarEn,
    //         }
    //     },
    // }),

    theme: plumeTheme({
        logo: 'https://img.catrol.cn/icons/projects/kitx/KitX-Icon-1024x-margin-2x.png',
        docsRepo: 'https://github.com/Crequency/KitX-Docs/',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        // lastUpdated: true,
        contributors: {
            mode: 'block',
        },
        changelog: true,

        autoFrontmatter: {
            permalink: true, // 是否生成永久链接
            createTime: true, // 是否生成创建时间
            title: true, // 是否生成标题
        },

        plugins: { git: true }
    }),

    plugins: [
        mdEnhancePlugin({
            flowchart: true,
            // container: true, // 自定义容器
            mermaid: true,
            chartjs: true,
            echarts: true,
        }),
    ],

    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {},
    }),
})
