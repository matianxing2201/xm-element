<template>
    <Transition
        :name="transitionName"
        @enter="boxHeight = messageRef!.getBoundingClientRect().height"
        @after-leave="!visible && onDestroy()"
    >
        <div
            ref="messageRef"
            class="xm-message"
            :class="{
                [`xm-message--${type}`]: type,
                'is-close': showClose,
                'text-center': center
            }"
            :style="cssStyle"
            v-show="visible"
            @mouseenter="clearTimer"
            @mouseleave="startTimmer"
        ></div>
    </Transition>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import type { MessageProps } from './types'
import { getLastBottomOffset } from './methods';
import { bind, delay } from "lodash-es";
import { useOffset } from "@xm-element/hooks"

defineOptions({
    name: "XmMessage"
})

const props = withDefaults(defineProps<MessageProps>(), {
    type: "info",
    duration: 3000,
    offset: 10,
    transitionName: "fade-up"
})

const visible = ref(false);

const messageRef = ref<HTMLDivElement>();

// div 的高度
const boxHeight = ref(0);
const { topOffset, bottomOffset } = useOffset({
  getLastBottomOffset: bind(getLastBottomOffset, props),
  offset: props.offset,
  boxHeight,
});

const cssStyle = computed(() => ({
  top: topOffset.value + "px",
  zIndex: props.zIndex,
}));


let timer: number;
function startTimmer() {
  if (props.duration === 0) return;
  timer = delay(close, props.duration);
}

function clearTimer() {
  clearTimeout(timer);
}
function close() {
  visible.value = false;
}

defineExpose({
  bottomOffset,
  close,
});


</script>
<style scoped>
@import "./style.css"
</style>
