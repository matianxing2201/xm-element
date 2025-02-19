import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xm-Element",
  description: "A VitePress Site",
  base: "/xm-element/",
  appearance: false, // 明暗主题开关
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "开始使用", link: "/get-started" },
      { text: "组件", link: "/components/button" },
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: "指南",
        collapsed: false,
        items: [
          {
            text: "快速开始",
            link: "/get-started"
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/matianxing2201/xm-element' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  }
})
