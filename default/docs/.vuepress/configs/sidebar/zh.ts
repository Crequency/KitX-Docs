import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
    '/guide/': [
        {
            text: '指南',
            children: [
                '/guide/README.md',
                '/guide/getting-started.md',
                '/guide/order.md',
                '/guide/network-connection.md',
                '/guide/package-plugin.md',
            ],
        },
    ],
    '/reference/': [
        {
            text: '参考',
            children: [
                '/reference/error-codes.md',
                {
                    text: '专有文件格式',
                    collapsible: true,
                    children: [
                        '/reference/file-formats/kxp.md',
                    ],
                }
            ],
        },
    ],
    '/mobile/': [
        {
            text: '移动端指南',
            children: [
                '/mobile/guide/README.md',
                '/mobile/guide/getting-started.md',
                '/mobile/guide/packages.md',
            ],
        }
    ],
}