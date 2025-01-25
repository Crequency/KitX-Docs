import type { SidebarMulti } from 'vuepress-theme-plume'

export const sidebarZh: SidebarMulti = {
    '/rules/': [
        'README.md',
        {
            text: '总体架构',
            collapsed: false,
            items: [
                '/rules/entire/README.md',
                '/rules/entire/kitx-network.md',
                '/rules/entire/kitx-plugin-load.md',
                '/rules/entire/kitx-encryption-ring.md',
            ]
        },
        {
            text: '网络',
            collapsed: false,
            items: [
                '/rules/network/README.md',
                '/rules/network/kitx-dashboard-network.md',
                '/rules/network/kitx-web-command.md',
            ]
        },
        'installer.md',
        {
            text: '加载器',
            collapsed: false,
            items: [
                '/rules/loader/README.md',
                '/rules/loader/active-loader.md',
                '/rules/loader/self-loader.md',
                '/rules/loader/process.md',
                {
                    text: '加载器列表',
                    collapsed: true,
                    items: [
                        '/rules/loader/items/loader-csharp.md',
                    ]
                }
            ],
        }
    ],
    '/client/': [
        {
            text: '桌面端指南',
            collapsed: false,
            items: [
                '/client/guide/README.md',
                '/client/guide/getting-started.md',
                '/client/guide/order.md',
                '/client/guide/network-connection.md',
                '/client/guide/package-plugin.md',
            ]
        }
    ],
    '/mobile/': [
        {
            text: '移动端指南',
            items: [
                '/mobile/guide/README.md',
                '/mobile/guide/getting-started.md',
                '/mobile/guide/packages.md',
            ],
        }
    ],
    '/reference/': [
        {
            text: '参考',
            items: [
                'error-codes.md',
                {
                    text: '专有文件格式',
                    items: [
                        '/reference/file-formats/README.md',
                        '/reference/file-formats/kxp.md',
                    ],
                }
            ],
        }
    ],
}
