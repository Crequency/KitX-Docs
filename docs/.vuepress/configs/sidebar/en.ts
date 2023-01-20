import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
    '/en/guide/': [
        {
            text: 'Guide',
            children: [
                '/en/guide/README.md',
                '/en/guide/getting-started.md',
                '/en/guide/configuration.md',
                '/en/guide/page.md',
                '/en/guide/markdown.md',
                '/en/guide/assets.md',
                '/en/guide/i18n.md',
                '/en/guide/deployment.md',
                '/en/guide/theme.md',
                '/en/guide/plugin.md',
                '/en/guide/bundler.md',
                '/en/guide/migration.md',
            ],
        },
    ],
    '/en/reference/': [
        {
            text: 'VuePress Reference',
            collapsible: true,
            children: [
                '/en/reference/cli.md',
                '/en/reference/config.md',
                '/en/reference/frontmatter.md',
                '/en/reference/components.md',
                '/en/reference/plugin-api.md',
                '/en/reference/theme-api.md',
                '/en/reference/client-api.md',
                '/en/reference/node-api.md',
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