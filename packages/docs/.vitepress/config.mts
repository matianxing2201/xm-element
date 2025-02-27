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
      },
      {
        text: "基础组件",
        collapsed: false,
        items: [
          { text: "Button 按钮", link: "components/button" },
          { text: "Collapse 折叠面板", link: "components/collapse" },
        ]
      },
      {
        text: "反馈组件",
        collapsed: false,
        items: [
          { text: "Alert 提示", link: "components/alert" },
          { text: "Tooltip 文字提示", link: "components/tooltip" },
          { text: "Popconfirm 气泡确认框", link: "components/popconfirm" },
        ],
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
