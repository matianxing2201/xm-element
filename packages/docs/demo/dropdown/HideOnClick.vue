<script setup lang="ts">
import { type DropdownItemProps } from "xm-element";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];
</script>

<template>
  <div class="row">
    <div class="col">
      <div class="desc">hide-on-click="true"(default)</div>
      <xm-dropdown :items="items">
        <span class="dropdown-link">
          Dropdown List
          <xm-icon icon="angle-down" />
        </span>
      </xm-dropdown>
    </div>
    <div class="col">
      <div class="desc">hide-on-click="false"</div>
      <xm-dropdown :items="items" :hide-on-click="false">
        <span class="dropdown-link">
          Dropdown List
          <xm-icon icon="angle-down" />
        </span>
      </xm-dropdown>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.col {
  flex: 1;
}
.desc {
  display: block;
  color: var(--xm-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--xm-color-primary);
  i {
    margin-left: 8px;
  }
}
</style>
