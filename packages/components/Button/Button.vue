<template>
  <component
    ref="_ref"
    :is="tag"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading"
    class="xm-button"
    :class="{
      [`xm-button--${type}`]: type,
      [`xm-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="(e: MouseEvent) => useThrottle ? handleClickThrottle(e) : handleBtnClick(e)"
  >
    <template v-if="loading">
      <slot name="loading">
        <xm-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          size="1x"
          spin
        />
      </slot>
    </template>
    <xm-icon
      :icon="icon"
      size="1x"
      :style="iconStyle"
      v-if="icon && !loading"
    />
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { ref, computed, inject } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types.ts'
import { throttle } from 'lodash-es'
import XmIcon from '../Icon/Icon.vue'
import { BUTTON_GROUP_CTX_KEY } from './contants.ts'

defineOptions({
  name: 'XmButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500
})

const emits = defineEmits<ButtonEmits>();

const slots = defineSlots()

const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0)

const _ref = ref<HTMLButtonElement>()

const iconStyle = computed(() => ({marginRight: slots.default ? '6px' : '0'}))

// 处理buttonGroup 与 button 的size、type、disabled
const size = computed(() => ctx?.size ?? props?.size ?? '')
const type = computed(() => ctx?.type ?? props?.type ?? '')
const disabled = computed(() => ctx?.disabled || props.disabled || false)

const handleBtnClick = (e: MouseEvent) => {
  emits('click', e)
}
// 防抖截流
const handleClickThrottle = throttle(handleBtnClick, props.throttleDuration);

defineExpose<ButtonInstance>({
  ref: _ref
})
</script>


<style scoped>
@import "./style.css";
</style>
