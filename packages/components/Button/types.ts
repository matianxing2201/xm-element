import type { Component, ComputedRef, Ref } from "vue";
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type NativeType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'large' | 'medium' | 'small';

export interface ButtonProps {
    tag?: string | Component;
    type?: ButtonType;
    nativeType?: NativeType;
    size?: ButtonSize;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    disabled?: boolean;
    autofocus?: boolean;
    icon?: string;
    loading?: boolean;
    loadingIcon?: string;
    useThrottle?: boolean;
    throttleDuration?: number;
}

export interface ButtonGroupProps {
    size?: ButtonSize,
    type?: ButtonType,
    disabled?: boolean,
}
// 注入子组件属性
export interface ButtonGroupContext {
    size?: ButtonSize,
    type?: ButtonType,
    disabled?: boolean,
}

export interface ButtonEmits {
    (e: 'click', event: MouseEvent): void;
}

export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>;
    disabled: ComputedRef<boolean>;
    size: ComputedRef<ButtonSize | "">;
    type: ComputedRef<ButtonType | "">;
}


