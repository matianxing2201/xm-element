import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue"
import { withInstall} from "@xm-element/utils";

export const XmCollapse = withInstall(Collapse)
export const XmCollapseItem = withInstall(CollapseItem)

export * from './types.ts'
