<script setup lang="ts">
import  { type DropdownItemProps } from "xm-element";

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
      <div class="desc">通过 slot 传入 item</div>
      <xm-dropdown :manual="true">
        <span class="dropdown-link">
          Dropdown List
          <xm-icon icon="angle-down" />
        </span>
        <template #dropdown>
          <xm-dropdown-item command="1">Action 1</xm-dropdown-item>
          <xm-dropdown-item command="2" label="Action 2" />
          <xm-dropdown-item command="3" disabled>Action 3</xm-dropdown-item>
          <xm-dropdown-item command="4" divided>Action 4</xm-dropdown-item>
        </template>
      </xm-dropdown>
    </div>
    <div class="col">
      <div class="desc">通过 props 传入 item</div>
      <xm-dropdown :items="items">
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
