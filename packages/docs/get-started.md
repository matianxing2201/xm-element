---
search: false
next:
  link: /components/button
  text: Button 按钮
---
# 基于 Vue3 + TS 高仿 ElementPlus 的组件库

## 开始使用

**全局使用**


```js
// 引入所有组件
import XmElement from 'xm-element'
// 引入样式
import 'xm-element/dist/index.css'

import App from './App.vue'
// 全局使用
createApp(App).use(XmElement).mount('#app')
```

```vue
<template>
  <er-button>我是 Button</er-button>
</template>
```

**单个导入**

```vue
<template>
  <er-button>我是 Button</er-button>
</template>
<script>
  import { XmButton } from 'xm-element'
  export default {
    components: { XmButton },
  }
</script>
```

## 亮点

::: details
- Vite + Vitepress 工具链
- monorepo 分包管理
- github actions 实现 CI/CD 自动化部署
:::
