import type { SidebarMulti } from 'vuepress-theme-plume'

export const sidebarEn: SidebarMulti = {
    '/rules/': [
        '/en/rules/README.md',
        {
            text: 'Entire Architecture',
            collapsed: false,
            items: [
                '/en/rules/entire/README.md',
                '/en/rules/entire/kitx-network.md',
                '/en/rules/entire/kitx-plugin-load.md',
                '/en/rules/entire/kitx-encryption-ring.md',
            ]
        },
        {
            text: 'Network',
            collapsed: false,
            items: [
                '/en/rules/network/README.md',
                '/en/rules/network/kitx-dashboard-network.md',
                '/en/rules/network/kitx-web-command.md',
            ]
        },
        '/en/rules/installer.md',
        {
            text: 'Loader',
            collapsed: false,
            items: [
                '/en/rules/loader/README.md',
                '/en/rules/loader/active-loader.md',
                '/en/rules/loader/self-loader.md',
                '/en/rules/loader/process.md',
                {
                    text: 'Loaders List',
                    collapsed: true,
                    items: [
                        '/en/rules/loader/items/loader-csharp.md',
                    ]
                }
            ],
        }
    ],
    '/client/': [
        {
            text: 'Desktop Guide',
            collapsed: false,
            items: [
                '/en/client/guide/README.md',
                '/en/client/guide/getting-started.md',
                '/en/client/guide/order.md',
                '/en/client/guide/network-connection.md',
                '/en/client/guide/package-plugin.md',
            ]
        }
    ],
    '/mobile/': [
        {
            text: 'Mobile Guide',
            items: [
                '/en/mobile/guide/README.md',
                '/en/mobile/guide/getting-started.md',
                '/en/mobile/guide/packages.md',
            ],
        }
    ],
    '/reference/': [
        {
            text: 'Reference',
            items: [
                '/en/reference/error-codes.md',
                {
                    text: 'Proprietary File Formats',
                    items: [
                        '/en/reference/file-formats/README.md',
                        '/en/reference/file-formats/kxp.md',
                    ],
                }
            ],
        }
    ],
}
