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
  import { ref, computed } from "vue";
  import type { ButtonProps, ButtonEmits, ButtonInstance } from './types.ts'
  import { throttle } from 'lodash-es'
  import XmIcon from '../Icon/Icon.vue'

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

  const _ref = ref<HTMLButtonElement>()

  const iconStyle = computed(() => ({marginRight: slots.default ? '6px' : '0'}))

  // 防抖截流
  const handleBtnClick = (e: MouseEvent) => {
    emits('click', e)
  }

  const handleClickThrottle = throttle(handleBtnClick, props.throttleDuration);

  defineExpose<ButtonInstance>({
    ref: _ref
  })
</script>


<style scoped>
@import "./style.css";
</style>
