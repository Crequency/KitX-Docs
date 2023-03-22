import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
    '/client/guide/': [
        {
            text: '指南',
            children: [
                '/client/guide/README.md',
                '/client/guide/getting-started.md',
                '/client/guide/order.md',
                '/client/guide/network-connection.md',
                '/client/guide/package-plugin.md',
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
                        '/reference/file-formats/README.md',
                        '/reference/file-formats/kxp.md',
                    ],
                }
            ],
        },
    ],
    '/mobile/guide/': [
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
