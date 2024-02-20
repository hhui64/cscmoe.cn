import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',

  title: 'CSCMOE',
  description: '友爱和谐的菜市场小镇',

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '游玩指南', link: '/guide/getting-started' }
    ],

    sidebar: [
      {
        text: '游玩指南',
        items: [
          { text: '简介', link: '/guide/introduction' },
          { text: '开始游玩', link: '/guide/getting-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2024 CSCMOE GAMES'
    }
  },
  vite: {
    server: {
      host: '0.0.0.0'
    }
  }
})
