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
          // {
          //   text: 'CLI',
          //   link: '/reference/cli.md',
          // },
          // '/reference/config.md',
        ],
      },
    ],
  },
]