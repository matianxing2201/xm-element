<script setup lang="ts">
import { type DropdownItemProps } from "xm-element";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];

function handleClick() {
}
</script>

<template>
  <div class="row">
    <xm-dropdown :items="items">
      <xm-button type="primary">
        Dropdown List
        <xm-icon icon="angle-down" style="margin-left: 8px" />
      </xm-button>
    </xm-dropdown>
    <xm-dropdown
      :items="items"
      type="primary"
      @click="handleClick"
      split-button
    >
      Dropdown List
    </xm-dropdown>
  </div>
</template>

<style scoped>
.row div {
  margin-right: 16px;
}
</style>
