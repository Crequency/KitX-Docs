import type { NavItem } from 'vuepress-theme-plume'
import { languagesNavItems } from './languages.ts'

export const navbarEn: NavItem[] = [
    {
        text: 'Rules',
        link: '/en/rules/',
    },
    {
        text: 'Guide',
        items: [
            {
                text: 'Desktop',
                link: '/en/client/guide/',
            },
            {
                text: 'Mobile',
                link: '/en/mobile/guide/',
            }
        ],
    },
    {
        text: 'Reference',
        prefix: '/en/reference/',
        items: [
            {
                text: 'KitX Dashboard (Desktop)',
                items: [
                    'error-codes.md',
                    'file-formats/README.md',
                    'file-formats/kxp.md',
                ],
            },
        ],
    },
    {
        text: 'Language',
        icon: 'material-symbols:translate',
        items: languagesNavItems,
    }
]
