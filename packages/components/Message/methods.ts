import type { MessageProps, MessageInstance } from "./types";
import { findIndex, get } from "lodash-es";

import { shallowReactive } from "vue";

const instances: MessageInstance[] = shallowReactive([]);

// 计算 Message 组件堆叠布局时的位置偏移量
export function getLastBottomOffset(this: MessageProps) {
    const idx = findIndex(instances, { id: this.id });
    if (idx <= 0) return 0;
  
    return get(instances, [idx - 1, "vm", "exposed", "bottomOffset", "value"]);
}