import path from 'node:path'
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import {
    navbarZh,
    navbarEn,
    sidebarZh,
    sidebarEn,
    searchBoxZh,
    searchBoxEn,
} from './configs/index.js'

import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',

    head: [
        [
            'link',
            { rel: 'icon', href: 'https://img.catrol.cn/icons/projects/kitx/KitX-Icon-128x.png' }
        ]
    ],

    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'KitX 文档站',
            description: 'KitX 文档站点',
        },
        '/en/': {
            lang: 'en-US',
            title: 'KitX Docs',
            description: 'KitX Docs Site',
        }
    },

    theme: plumeTheme({
        logo: 'https://img.catrol.cn/icons/projects/kitx/KitX-Icon-1024x-margin-2x.png',
        docsRepo: 'https://github.com/Crequency/KitX-Docs/',
        docsBranch: 'main',
        docsDir: 'docs',
        hostname: 'kitx.docs.catrol.cn',
        editLinkPattern: ':repo/edit/:branch/:path',
        lastUpdated: { formatOptions: { dateStyle: 'short', timeStyle: 'short' } },
        contributors: {
            mode: 'block',
        },
        changelog: true,

        social: [
            {
                icon: 'github',
                link: 'https://github.com/Crequency/KitX/'
            }
        ],

        blog: false,
        notes: false,

        locales: {
            '/': {
                home: '/',
                selectLanguageName: '简体中文',
                // bulletin: {
                //     layout: 'bottom-right',
                //     border: true,
                //     // enablePage: (page) => page.frontmatter.bulletin !== false,
                //     // lifetime: 'session',
                //     title: '公告',
                //     contentFile: path.join(__dirname, 'site-components/_bulletin.md'),
                //     contentType: 'markdown'
                // },
                navbar: navbarZh,
                sidebar: sidebarZh,
            },
            '/en/': {
                home: '/en/',
                selectLanguageName: 'English',
                // bulletin: {
                //     layout: 'bottom-right',
                //     border: true,
                //     title: 'Bulletin',
                //     contentFile: path.join(__dirname, 'en/site-components/_bulletin.md'),
                //     contentType: 'markdown'
                // },
                navbar: navbarEn,
                sidebar: sidebarEn,
            }
        },

        autoFrontmatter: {
            permalink: false,
            createTime: true,
            title: true,
        },

        plugins: {
            git: true,
            search: {},
            shiki: {
                languages: [
                    'csharp',
                    'c',
                    'c++',
                    'rust',
                    'dart',
                    'kotlin',
                    'java',
                    'python',
                    'html',
                    'css',
                    'javascript',
                    'typescript',
                    'php',
                    'zig',
                    'vb',
                    'lua',
                    'fortran-fixed-form',
                    'fortran-free-form',
                    'julia',
                    'powershell',
                    'shell',
                    'haskell',
                    'swift',
                    'go',
                    'ruby',
                    'perl',
                    'json',
                    'yaml',
                    'toml',
                    'xml',
                    'ini',
                    'make',
                    'makefile',
                    'cmake',
                    'mermaid',
                    'markdown',
                    'matlab',
                ]
            }
        }
    }),

    plugins: [
        mdEnhancePlugin({
            flowchart: true,
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
