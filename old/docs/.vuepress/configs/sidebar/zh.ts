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
            ],
        },
    ],
    '/reference/': [
        {
            text: 'VuePress 参考',
            collapsible: true,
            children: [
                '/reference/cli.md',
                '/reference/config.md',
                '/reference/frontmatter.md',
                '/reference/components.md',
                '/reference/plugin-api.md',
                '/reference/theme-api.md',
                '/reference/client-api.md',
                '/reference/node-api.md',
            ],
        },
        {
            text: '官方插件参考',
            collapsible: true,
            children: [
                {
                    text: '常用功能',
                    children: [
                        '/reference/plugin/back-to-top.md',
                        '/reference/plugin/container.md',
                        '/reference/plugin/external-link-icon.md',
                        '/reference/plugin/google-analytics.md',
                        '/reference/plugin/medium-zoom.md',
                        '/reference/plugin/nprogress.md',
                        '/reference/plugin/register-components.md',
                    ],
                },
            ],
        },
    ],
}