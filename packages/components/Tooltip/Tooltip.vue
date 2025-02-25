<template>
  <div class="xm-tooltip" ref="containerNode" v-on="outerEvents">
    <div
      class="xm-tooltip__trigger"
      ref="_triggerNode"
      v-on="events"
    >
      <slot></slot>
    </div>

    <transition :name="transition" @after-leave="destroyPopperInstance">
      <div
        class="xm-tooltip__popper"
        ref="popperNode"
        v-on="dropdownEvents"
        v-if="visible"
      >
        <slot name="content">
          {{ content }}
        </slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { createPopper, type Instance } from "@popperjs/core";
import { ref, watch, watchEffect, onUnmounted, computed, type Ref } from "vue";
import { bind, debounce, type DebouncedFunc } from "lodash-es";
import useClickOutside from "../../hooks/useClickOutside";

import type { TooltipProps, TooltipEmits, TooltipInstance } from "./types";


defineOptions({
  name: "XmTooltip",
});


// 设置默认值
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: "bottom",
  trigger: "hover",
  transition: "fade",
  showTimeout: 0,
  hideTimeout: 200,
});
const emits = defineEmits<TooltipEmits>();
const visible = ref(false);

// 定义事件监听器对象
const events: Ref<Record<string, EventListener>> = ref({});
const outerEvents: Ref<Record<string, EventListener>> = ref({});
const dropdownEvents: Ref<Record<string, EventListener>> = ref({});

// 定义 DOM 引用
const containerNode = ref<HTMLElement>();
const popperNode = ref<HTMLElement>();
const _triggerNode = ref<HTMLElement>();


// 返回触发节点
const triggerNode = computed(() => {
  return _triggerNode.value as HTMLElement;
});


// 返回 popper 的配置选项
const popperOptions = computed(() => ({
  placement: props.placement,
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 9],
      },
    },
  ],
  ...props.popperOptions,
}));

// 打开延迟时间
const openDelay = computed(() =>
  props.trigger === "hover" ? props.showTimeout : 0
);

// 关闭延迟时间
const closeDelay = computed(() =>
  props.trigger === "hover" ? props.hideTimeout : 0
);

// 定义触发策略映射
const triggerStrategyMap: Map<string, () => void> = new Map();
triggerStrategyMap.set("hover", () => {
  events.value["mouseenter"] = openFinal;
  outerEvents.value["mouseleave"] = closeFinal;
  dropdownEvents.value["mouseenter"] = openFinal;
});
triggerStrategyMap.set("click", () => {
  events.value["click"] = togglePopper;
});
triggerStrategyMap.set("contextmenu", () => {
  events.value["contextmenu"] = (e) => {
    e.preventDefault();
    openFinal();
  };
});

// 定义防抖函数
let openDebounce: DebouncedFunc<() => void> | void;
let closeDebounce: DebouncedFunc<() => void> | void;

// 打开最终函数
function openFinal() {
  closeDebounce?.cancel();
  openDebounce?.();
}

// 关闭最终函数
function closeFinal() {
  openDebounce?.cancel();
  closeDebounce?.();
}

// 切换 popper 显示状态
function togglePopper() {
  visible.value ? closeFinal() : openFinal();
}

function setVisible(val: boolean) {
  if (props.disabled) return;
  visible.value = val;
  emits("visible-change", val);
}
// 事件监听器
function attachEvents() {
  if (props.disabled || props.manual) return;
  triggerStrategyMap.get(props.trigger)?.();
}

let popperInstance: null | Instance;
function destroyPopperInstance() {
  popperInstance?.destroy();
  popperInstance = null;
}

function resetEvents() {
  events.value = {};
  outerEvents.value = {};
  dropdownEvents.value = {};

  attachEvents();
}

if (!props.manual) {
  attachEvents();
}

const show: TooltipInstance["show"] = openFinal;

const hide: TooltipInstance["hide"] = function () {
  openDebounce?.cancel();
  setVisible(false);
};

useClickOutside(containerNode, () => {
  emits("click-outside");
  if (props.trigger === "hover" || props.manual) return;
  visible.value && closeFinal();
});

watch(
  visible,
  (val) => {
    if (!val) return;

    if (triggerNode.value && popperNode.value) {
      popperInstance = createPopper(
        triggerNode.value,
        popperNode.value,
        popperOptions.value
      );
    }
  },
  { flush: "post" }
);

watch(
  () => props.manual,
  (isManual) => {
    console.log(isManual);
    if (isManual) {
      events.value = {};
      outerEvents.value = {};
      dropdownEvents.value = {};
      return;
    }
    attachEvents();
  }
);

watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger === oldTrigger) return;
    resetEvents();
  }
);

watch(
  () => props.disabled,
  (val, oldVal) => {
    if (val === oldVal) return;
    openDebounce?.cancel();
    visible.value = false;
    emits("visible-change", false);
    resetEvents();
  }
);

watchEffect(() => {
  openDebounce = debounce(bind(setVisible, null, true), openDelay.value);
  closeDebounce = debounce(bind(setVisible, null, false), closeDelay.value);
});



onUnmounted(() => {
  destroyPopperInstance();
});

defineExpose<TooltipInstance>({
  show,
  hide,
});
</script>

<style scoped>
@import "./style.css";
</style>
