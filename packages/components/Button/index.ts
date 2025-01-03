import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import { withInstall } from '@xm-element/utils'

// 导出组件
export const XmButton = withInstall(Button)
export const XmButtonGroup = withInstall(ButtonGroup)

// 导出类型
export * from './types.ts'

