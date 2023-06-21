import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
    {
        text: '规则',
        link: '/rules/',
    },
    {
        text: '指南',
        children: [
            {
                text: '桌面端',
                link: '/client/guide/',
            },
            {
                text: '移动端',
                link: '/mobile/guide/',
            }
        ],
    },
    {
        text: '参考',
        children: [
            {
                text: 'KitX 仪表盘 (桌面端)',
                children: [
                    '/reference/error-codes.md',
                    {
                        text: '专有文件格式',
                        link: '/reference/file-formats/README.md',
                        children: [
                            '/reference/file-formats/kxp.md',
                        ],
                    }
                ],
            },
        ],
    },
]
