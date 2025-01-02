import type { Component, Ref } from "vue";
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

export interface ButtonEmits {
    (e: 'click', event: MouseEvent): void;
}

export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>
}
