import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/en/guide/',
  },
  {
    text: 'Reference',
    children: [
      {
        text: 'VuePress',
        children: [
          {
            text: 'CLI',
            link: '/en/reference/cli.html',
          },
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
        text: 'Bundlers',
        children: [
          '/en/reference/bundler/vite.md',
          '/en/reference/bundler/webpack.md',
        ],
      },
      {
        text: 'Default Theme',
        children: [
          '/en/reference/default-theme/config.md',
          '/en/reference/default-theme/frontmatter.md',
          '/en/reference/default-theme/components.md',
          '/en/reference/default-theme/markdown.md',
          '/en/reference/default-theme/styles.md',
          '/en/reference/default-theme/extending.md',
        ],
      },
    ],
  },
]