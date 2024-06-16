import Button from "./Button.vue";
import ButtonBroup from './ButtonGroup.vue'
import { withInstall } from "@xm-element/utils";

export const XmButton = withInstall(Button);
export const XmButtonGroup = withInstall(ButtonBroup);

export * from './types'