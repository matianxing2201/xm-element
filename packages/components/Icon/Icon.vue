<template>
  <i
      class="xm-icon"
      :class="{[`xm-icon-${props.type}`] : type}"
      :style="customStyle"
  >
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<script setup lang="ts">
import type { IconProps } from './types.ts'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
import { computed } from 'vue'
defineOptions({
  name: 'XmIcon',
  inheritAttrs: false
})



const props = defineProps<IconProps>()
// 去除 type 和 color 非fontawesome 图标属性
const filterProps = computed(() => omit(props, ['type', 'color']))
const customStyle = computed(() => ({ color: props.color ?? void 0}))

</script>


<style scoped>
@import "./style.css";
</style>
