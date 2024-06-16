<template>
  <i
    class="xm-icon"
    :class="{ [`xm-icon--${type}`]: type }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filterProps"></font-awesome-icon>
  </i>
</template>

<script setup lang="ts">
import type { IconProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { omit } from "lodash-es";
import { computed } from "vue";

defineOptions({
  name: "XmIcon",
  inheritAttrs: false,
});

const props = defineProps<IconProps>();
const filterProps = computed(() => omit(props, ["type", "color"]));  //  移除自定义的属性传入font awesome
const customStyles = computed(() => ({ color: props.color ?? void 0 }));

</script>

<style scoped>
@import './style.css';
</style>