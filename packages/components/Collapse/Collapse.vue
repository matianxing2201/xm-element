<template>
    <div class="xm-collapse">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import type { CollapseProps, CollapseEmits, CollapseItemName } from "./types";

import { ref, provide, watch } from "vue";
import { COLLAPSE_CTX_KEY } from "./constants";

defineOptions({
  name: "XmCollapse",
});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();
const activeNames = ref<CollapseItemName[]>(props.modelValue);

if (props.accordion && activeNames.value.length > 1) {
    console.warn("只能有一个展开的节点");
}

const handleItemClick = (item: CollapseItemName) => {
    let _activeNames = [...activeNames.value];
    if(props.accordion) {
        // 只允许单个打开
        _activeNames = [_activeNames[0] === item ? '' : item]
        updateActiveNames(_activeNames)
        return
    }

    const index = _activeNames.indexOf(item);
    if(index > -1) {
        // 存在 折叠
        _activeNames.splice(index, 1)
    }else {
        // 不存在 展开
        _activeNames.push(item)
    }
    updateActiveNames(_activeNames)
};

const updateActiveNames = (newVames: CollapseItemName[]) => {
  activeNames.value = newVames;
  emits("update:modelValue", newVames);
  emits("change", newVames);
};

watch(
  () => props.modelValue,
  (newValue) => updateActiveNames(newValue)
);

// 依赖注入
provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick,
});
</script>
<style scoped>
@import './style.css';
</style>