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
          '/reference/error-codes.md',
          {
            text: '专有文件格式',
            link: '/reference/file-formats/README.md',
            children: [
              '/reference/file-formats/kxp.md',
            ],
          }
        ],
      },
    ],
  },
]