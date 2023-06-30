import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
    '/en/rules/': [
        {
            text: 'Rules',
        }
    ],
    '/en/client/guide/': [
        {
            text: 'Guide',
            children: [
                '/en/client/guide/README.md',
                '/en/client/guide/getting-started.md',
                '/en/client/guide/order.md',
                '/en/client/guide/network-connection.md',
                '/en/client/guide/package-plugin.md',
            ],
        },
    ],
    '/en/mobile/guide/': [
        {
            text: 'Mobile Guide',
            children: [
                '/en/mobile/guide/README.md',
                '/en/mobile/guide/getting-started.md',
                '/en/mobile/guide/packages.md',
            ],
        }
    ],
    '/en/reference/': [
        {
            text: 'Reference',
            children: [
                '/en/reference/error-codes.md',
                {
                    text: 'Special File Formats',
                    collapsible: true,
                    children: [
                        '/en/reference/file-formats/README.md',
                        '/en/reference/file-formats/kxp.md',
                    ],
                }
            ],
        },
    ],
}
