

<template>
  <xm-tooltip ref="tooltipRef" trigger="click" :hide-timeout="hideAfter">
    <template #content>
      <div class="xm-popconfirm" :style="style">
        <div class="xm-popconfirm__main">
          <xm-icon v-if="!hideIcon && icon" :icon="icon" :color="iconColor" />
          {{ title }}
        </div>
        <div class="xm-popconfirm__action">
          <xm-button
            size="small"
            class="xm-popconfirm__cancel"
            :type="cancelButtonType"
            @click="cancel"
          >
            {{ cancelButtonText || "取消" }}
          </xm-button>
          <xm-button
            size="small"
            class="xm-popconfirm__confirm"
            :type="confirmButtonType"
            @click="confirm"
          >
            {{ confirmButtonText || "确定" }}
          </xm-button>
        </div>
      </div>
    </template>

    <template v-if="$slots.default" #default>
      <slot name="default"></slot>
    </template>

    <template v-if="$slots.reference" #default>
      <slot name="reference"></slot>
    </template>
  </xm-tooltip>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { addUnit } from "@xm-element/utils";
import type { PopconfirmProps, PopconfirmEmits } from "./types";
import type { TooltipInstance } from "../Tooltip";

import XmButton from "../Button/Button.vue";
import XmIcon from "../Icon/Icon.vue";
import XmTooltip from "../Tooltip/Tooltip.vue";

defineOptions({
  name: "XmPopconfirm",
});

const props = withDefaults(defineProps<PopconfirmProps>(), {
  title: "",
  confirmButtonType: "primary",
  icon: "question-circle",
  iconColor: "#f90",
  hideAfter: 200,
  width: 150,
});

const emits = defineEmits<PopconfirmEmits>();
const tooltipRef = ref<TooltipInstance>();
const style = computed(() => ({ width: addUnit(props.width) }));


function hidePopper() {
  tooltipRef.value?.hide();
}

function confirm(e: MouseEvent) {
  emits("confirm", e);
  hidePopper();
}

function cancel(e: MouseEvent) {
  emits("cancel", e);
  hidePopper();
}
</script>

<style scoped>
@import "./style.css";
</style>
