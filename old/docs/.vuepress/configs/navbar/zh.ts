import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
  {
    text: '指南',
    link: '/guide/',
  },
  {
    text: '参考',
    children: [
      {
        text: 'KitX',
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
    ],
  },
]