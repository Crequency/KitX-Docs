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
        text: 'KitX',
        children: [
          '/en/reference/ErrorCodes.md'
          // {
          //   text: 'CLI',
          //   link: '/en/reference/cli.html',
          // },
        ],
      },
    ],
  },
]