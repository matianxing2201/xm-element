<template>
  <div class="xm-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { CollapseProps, CollapseEmits, CollapseItemName } from './types.ts'
import { ref, provide, watch } from 'vue'
import { COLLAPSE_CTX_KEY } from './constants.ts'

defineOptions({
  name: 'XmCollapse'
})

const props = defineProps<CollapseProps>();
const emit = defineEmits<CollapseEmits>();

const activeNames = ref(props.modelValue)

if (props.arrordion && activeNames.value.length > 1) {
  console.warn('[xm-ui]: Collapse 组件 arrordion 模式下，activeNames 只允许传入一个值')
}

// 点击子组件触发
const handleItemClick = (item: CollapseItemName) => {
  let _activeNames = [...activeNames.value]; // 拷贝一份数据，避免直接修改原数据

  // arrordion 模式下，只允许选中一个子组件 如果有值，则删除，没有值，则添加
  if(props.arrordion) {
    _activeNames = [_activeNames[0] === item ? "" : item]
    updateActiveNames(_activeNames)
    return
  }

  // 判断当前name是否在activeNames中 存在删除，不存在添加
  const index = _activeNames.indexOf(item);
  if(index > -1) {
    _activeNames.splice(index, 1)
  } else {
    _activeNames.push(item)
  }
  updateActiveNames(_activeNames)
}

// 更新子组件数据
const updateActiveNames = (newNames: CollapseItemName) => {
  activeNames.value = newNames;
  emit('update:modelValue', newNames)
  emit('change', newNames)
}

watch(() => props.modelValue, (newNames) => {
  updateActiveNames(newNames)
})

// 向子组件提供数据
provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick,
})
</script>


<style scoped>
@import "./style.css";
</style>
