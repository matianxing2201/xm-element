<template>
  <div
      class="xm-collapse-item"
      :class="{
      'is-disabled': disabled,
    }"
  >
    <div
        class="xm-collapse-item__header"
        :id="`item-header-${name}`"
        :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
        @click="handleClick"
    >
      <span class="xm-collapse-item__title">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <xm-icon icon="angle-right" class="header-angle" />
    </div>
    <transition name="slide">
      <div class="xm-collapse-item__wapper" v-show="isActive">
        <div class="xm-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { CollapseItemProps } from './types.ts'
import { inject, computed } from 'vue'
import { COLLAPSE_CTX_KEY } from './constants.ts'
import XmIcon from "../Icon/Icon.vue";

defineOptions({
  name: 'XmCollapseItem'
})

const props = defineProps<CollapseItemProps>()
const ctx = inject(COLLAPSE_CTX_KEY, void 0);
const isActive = computed(() => ctx?.activeNames.value?.includes(props.name)) // 判断当前name是否在activeNames中

// 点击事件
const handleClick = () => {
  if(props.disabled) return;
  ctx?.handleItemClick(props.name)
}

</script>


<style scoped>
@import "./style.css";
</style>
