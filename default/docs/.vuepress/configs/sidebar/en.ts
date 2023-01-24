import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
    '/en/guide/': [
        {
            text: 'Guide',
            children: [
                '/en/guide/README.md',
                '/en/guide/getting-started.md',
                '/en/guide/order.md',
                '/en/guide/network-connection.md',
                '/en/guide/package-plugin.md',
            ],
        },
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
                        '/en/reference/file-formats/kxp.md',
                    ],
                }
            ],
        },
    ],
}