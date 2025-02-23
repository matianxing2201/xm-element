<template>
  <div class="xm-tooltip" ref="containerNode" v-on="outerEvents">
    <div class="xm-tooltip__trigger" 
        ref="triggerNode" 
        v-on="events" 
        >
        <!-- v-if="!virtualTriggering" -->
        <slot></slot>
    </div>
    <!-- <slot name="default" v-else></slot> -->
    <transition :name="transition" @after-leave="destroyPopperInstance">
        <div 
            class="xm-tooltip__popper"
            ref="popperNode"
            v-on="visible"
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
import type{ TooltipProps, TooltipEmits, TooltipInstance } from './types';
import { createPopper, type Instance } from '@popperjs/core';
import { computed, ref, watchEffect, watch, type Ref, onUnmounted } from 'vue';
import { bind, debounce, isNil, type DebouncedFunc } from 'lodash-es';
import { useClickOutside } from 'xm-element/hooks';

defineOptions({
    name: 'XmTooltip'
})


const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'bottom',
    trigger: 'hover',
    transition: 'fade',
    showTimeout: 0,
    hideTimeout: 200,
})

const emits = defineEmits<TooltipEmits>();

const visible = ref(false);

const events: Ref<Record<string, EventListener>> = ref({});
const outerEvents: Ref<Record<string, EventListener>> = ref({});
const dropdownEvents: Ref<Record<string, EventListener>> = ref({});

const containerNode = ref<HTMLElement>();
const popperNode = ref<HTMLElement>();
const triggerNode = ref<HTMLElement>();

const popperOptions = computed(() => ({
    placement: props.placement,
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 9],
            }
        }
    ],
    ...props.popperOptions,
}))

const openDelay = computed(() => props.trigger === 'hover' ? props.showTimeout : 0);
const closeDeley = computed(() => props.trigger === 'hover' ? props.hideTimeout : 0);

let openDebounce: DebouncedFunc<() => void> | null = null;
let closeDebounce: DebouncedFunc<() => void> | null = null;


function openFinal() {
    closeDebounce?.cancel();
    openDebounce?.();
}

function closeFinal() {
    openDebounce?.cancel();
    closeDebounce?.();
}

function tooglePopper() {
    visible.value ? closeFinal() : openFinal();
}

function setVisable(val: boolean) {
    if(props.disable) return;
    visible.value = val;
    emits('visivle-change', val);
}

function attachEvents() {
    if(props.disable || props.manual) return;
    if(props.trigger === 'hover') {
        events.value['mouseenter'] = openFinal;
        outerEvents.value['mouseleave'] = closeFinal;
        dropdownEvents.value['mouseenter'] = openFinal;
        return;
    }
    if(props.trigger === 'click') {
        events.value['click'] = tooglePopper;
        return;
    }
    if(props.trigger === 'contextmenu') {
        events.value['contextmenu'] = (e) => {
            e.preventDefault();
            openFinal();
        }
        return;
    }
}

let popperInstance: null | Instance

function destroyPopperInstance() {
    if(isNil(popperInstance)) return;

    popperInstance.destroy();
    popperInstance = null;
}

function resetEvents() {
    events.value = {};
    outerEvents.value = {};
    dropdownEvents.value = {};

    attachEvents();
}

const show: TooltipInstance['show'] = openFinal
const hide: TooltipInstance['hide'] = function() {
    openDebounce?.cancel();
    setVisable(false);
}


watch(visible, (val) => {
    if(!val) return;
    if(triggerNode.value && popperNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
    }
}, {flush: 'post'})

watch(() => props.manual, (isManual) => {
    if(isManual) {
        resetEvents();
        return;
    }
    attachEvents();
})

watch(() => props.trigger, (val, oldVal) => {
    if(val === oldVal) return;
    openDebounce?.cancel();
    visible.value = false;
    emits('visivle-change', false);
    resetEvents();
})

watchEffect(() => {
    if(!props.manual) {
        attachEvents();
    }

    openDebounce = debounce(bind(setVisable, null, true), openDelay.value)
    closeDebounce = debounce(bind(setVisable, null, false), closeDeley.value)
})

useClickOutside(containerNode, () => {
    emits('click-outside');
    if(props.trigger === 'hover' || props.manual) return;

    visible.value && closeFinal();
})

onUnmounted(() => {
    destroyPopperInstance();
})

defineExpose<TooltipInstance>({
    show,
    hide,
})

</script>
<style scoped>
</style>