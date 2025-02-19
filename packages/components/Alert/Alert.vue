<template>
   <transition name="xm-alert-fade">
    <div
      v-show="visible"
      class="xm-alert"
      role="alert"
      :class="{
        [`xm-alert__${type}`]: type,
        [`xm-alert__${effect}`]: effect,
        'text-center': center,
      }"
    >
      <xm-icon
        v-if="showIcon"
        class="xm-alert__icon"
        :class="{ 'big-icon': withDescription }"
        :icon="iconName"
      />
      <div class="xm-alert__content">
        <span
          class="xm-alert__title"
          :class="{ 'with-desc': withDescription }"
          :style="{ display: center && !showIcon ? 'flow' : 'inline' }"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="xm-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <div class="xm-alert__close" v-if="closable">
          <xm-icon @click.stop="close" icon="xmark" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import type { AlertProps, AlertEmits, AlertInstance } from "./types";
import { typeIconMap } from '@xm-element/utils';
import { computed, ref } from "vue";
import XmIcon from "../Icon/Icon.vue";
defineOptions({
    name: "XmAlert"
})

const props = withDefaults(defineProps<AlertProps>() , {
    effect: "light",
    type: "info",
    closable: true,
})

const emits = defineEmits<AlertEmits>();
const slots = defineSlots();

const visible = ref(true);

const iconName = computed(() => typeIconMap.get(props.type) ?? "circle-info");
const withDescription = computed(() => props.description || slots.default);

console.log(withDescription);


// 关闭 Alert 时触发的事件抛出
const close = () => {
    visible.value = false;
    emits("close");
}

const open = () => {
    visible.value = true;
}

defineExpose<AlertInstance>({
    close,
    open
})
</script>

<style scoped>
@import "./style.css";
</style>