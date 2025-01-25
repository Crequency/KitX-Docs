import type { NavItem } from 'vuepress-theme-plume'
import { languagesNavItems } from './languages.ts'

export const navbarZh: NavItem[] = [
    {
        text: '规则',
        link: '/rules/',
    },
    {
        text: '指南',
        items: [
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
        prefix: '/reference/',
        items: [
            {
                text: 'KitX 仪表盘 (桌面端)',
                items: [
                    'error-codes.md',
                    'file-formats/README.md',
                    'file-formats/kxp.md',
                ],
            },
        ],
    },
    {
        text: '语言',
        icon: 'material-symbols:translate',
        items: languagesNavItems,
    }
]
