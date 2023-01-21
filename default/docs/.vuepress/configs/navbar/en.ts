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
          '/en/reference/error-codes.md',
          {
            text: 'Special File Formats',
            link: '/en/reference/file-formats/README.md',
            children: [
              '/en/reference/file-formats/kxp.md',
            ],
          }
        ],
      },
    ],
  },
]