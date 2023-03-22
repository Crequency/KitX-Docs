import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
    {
        text: 'Guide',
        children: [
            {
                text: 'Dashboard',
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
        children: [
            {
                text: 'KitX Dashboard (Desktop)',
                children: [
                    '/en/reference/error-codes.md',
                    {
                        text: 'Special File Formats',
                        link: '/en/reference/file-formats/README.md',
                        children: [
                            '/en/reference/file-formats/kxp.md',
                        ],
                    }
                ],
            },
        ],
    },
    {
        text: 'Mobile Client',
        children: [
            {
                text: 'Home',
                link: '/en/mobile/README.md',
            },
            {
                text: 'Guide',
                children: [
                    '/en/mobile/guide/README.md',
                    '/en/mobile/guide/getting-started.md',
                    '/en/mobile/guide/packages.md',
                ],
            }
        ],
    },
]
