<script lang="ts" setup>
import { ref } from "vue";

const disabled = ref(false);
</script>

<template>
  <xm-tooltip
    :disabled="disabled"
    content="click to close tooltip function"
    placement="bottom"
  >
    <xm-button @click="disabled = !disabled"
      >click to {{ disabled ? "active" : "close" }} tooltip function</xm-button
    >
  </xm-tooltip>
</template>
