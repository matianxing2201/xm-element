export type CollapseItemName = string | number;
import type { Ref } from 'vue'

export interface CollapseProps {
    modelValue: CollapseItemName[];
    arrordion?: boolean;
}

export interface CollapseItemProps {
    name: CollapseItemName;
    title?: string;
    disabled?: boolean
}

export interface CollapseEmits {
    (e: 'update:modelValue', value: CollapseItemName[]): void;
    (e: 'change', value: CollapseItemName[]): void;
}

export interface CollapseContext {
    activeNames: Ref<CollapseItemName[]>;  // 展开状态的折叠面板
    handleItemClick(name: CollapseItemName): void; // 点击折叠面板触发
}
