import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import {
    navbarZh,
    navbarEn,
    sidebarZh,
    sidebarEn,
} from './configs/index.js'

import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"

export default defineUserConfig({
    head: [
        [
            'link',
            { rel: 'icon', href: 'https://img.catrol.cn/icons/projects/kitx/KitX-Icon-128x.png' }
        ]
    ],

    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'KitX Docs',
            description: 'KitX 文档站点',
        },
        '/en/': {
            lang: 'zh-CN',
            title: 'KitX Docs',
            description: 'KitX Docs Site',
        }
    },

    theme: plumeTheme({
        logo: 'https://img.catrol.cn/icons/projects/kitx/KitX-Icon-1024x-margin-2x.png',
        docsRepo: 'https://github.com/Crequency/KitX-Docs/',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        lastUpdated: { formatOptions: { dateStyle: 'short', timeStyle: 'short' } },
        contributors: {
            mode: 'block',
        },
        changelog: true,

        blog: false,

        notes: false,

        locales: {
            '/': {
                navbar: navbarZh,
                sidebar: sidebarZh
            },
            '/en/': {
                navbar: navbarEn,
                sidebar: sidebarEn,
            }
        },

        autoFrontmatter: {
            permalink: false, // 是否生成永久链接
            createTime: true, // 是否生成创建时间
            title: true, // 是否生成标题
        },

        plugins: {
            git: true,
            search: {

            },
            shiki: {
                languages: ['shell', 'mermaid', 'csharp', 'java', 'json', 'javascript', 'typescript', 'c', 'c++', 'python', 'go', 'rust', 'yaml', 'xml']
            }
        }
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
