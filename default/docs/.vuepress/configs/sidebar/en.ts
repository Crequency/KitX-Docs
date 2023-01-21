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
            ],
        },
    ],
    '/en/reference/': [
        {
            text: 'Reference',
            collapsible: true,
            children: [
                
            ],
        },
        {
            text: 'Official Plugins Reference',
            collapsible: true,
            children: [
                {
                    text: 'Common Features',
                    children: [
                        '/en/reference/plugin/back-to-top.md',
                        '/en/reference/plugin/container.md',
                        '/en/reference/plugin/external-link-icon.md',
                        '/en/reference/plugin/google-analytics.md',
                        '/en/reference/plugin/medium-zoom.md',
                        '/en/reference/plugin/nprogress.md',
                        '/en/reference/plugin/register-components.md',
                    ],
                },
            ],
        },
    ],
}