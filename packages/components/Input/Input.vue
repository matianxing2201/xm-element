<template>
  <div
    class="xm-input"
    :class="{
      [`xm-input--${type}`]: type,
      [`xm-input--${size}`]: size,
      'is-disabled': isDisabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
      'is-focus': isFocused,
    }">
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" class="xm-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="xm-input__wrapper" ref="wrapperRef">
        <!-- prefix slot -->
        <span v-if="$slots.prefix" class="xm-input__prefix">
          <slot name="prefix"></slot>
        </span>
        <input
          class="xm-input__inner"
          ref="inputRef"
          :id="inputId"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          :disabled="isDisabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :form="form"
          v-model="innerValue"
          v-bind="attrs"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur" />
        <!-- suffix slot -->
        <span
          v-if="$slots.suffix || showClear || showPasswordArea"
          class="xm-input__suffix">
          <slot name="suffix"></slot>
          <Icon
            icon="circle-xmark"
            v-if="showClear"
            class="xm-input__clear"
            @click="clear"
            @mousedown.prevent="noop" />
          <Icon
            icon="eye"
            v-if="showPasswordArea && passwordVisible"
            class="xm-input__password"
            @click="togglePasswordVisible" />
          <Icon
            icon="eye-slash"
            v-if="showPasswordArea && !passwordVisible"
            class="xm-input__password"
            @click="togglePasswordVisible" />
        </span>
      </div>
      <!-- append slot -->
      <div v-if="$slots.append" class="xm-input__append">
        <slot name="append"></slot>
      </div>
    </template>

    <!-- textarea -->
    <template v-else>
      <textarea
        class="xm-textarea__wrapper"
        ref="textareaRef"
        :id="inputId"
        :disabled="isDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        v-bind="attrs"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"></textarea>
    </template>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watch, useAttrs, shallowRef, nextTick } from "vue";
import type { InputProps, InputEmits, InputInstance } from "./types";
import { useFocusController } from "@xm-element/hooks";
import { each, noop } from "lodash-es";
import Icon from "../Icon/Icon.vue";

defineOptions({
  name: "ErInput",
  inheritAttrs: false,
});
const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  autocomplete: "off",
});
const emits = defineEmits<InputEmits>();

const inputId = ref(`xm-input-${Date.now()}`);

const innerValue = ref(props.modelValue);
const passwordVisible = ref(false);

const inputRef = shallowRef<HTMLInputElement>();
const textareaRef = shallowRef<HTMLTextAreaElement>();

const showClear = computed(
  () =>
    props.clearable &&
    !!innerValue.value &&
    !isDisabled.value &&
    isFocused.value
);

const showPasswordArea = computed(
  () =>
    props.type === "password" &&
    props.showPassword &&
    !isDisabled.value &&
    !!innerValue.value
);

const _ref = computed(() => inputRef.value || textareaRef.value);

const attrs = useAttrs();
const isDisabled = ref(false);
const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(
  _ref,
  {
    afterBlur() {
    //   do sth
    },
  }
);

const clear: InputInstance["clear"] = function () {
  innerValue.value = "";
  each(["update:modelValue", "input", "change"], (e) => emits(e as any, ""));
  emits("clear");
};

const focus: InputInstance["focus"] = async function () {
  await nextTick();
  _ref.value?.focus();
};

const blur: InputInstance["blur"] = function () {
  _ref.value?.blur();
};

const select: InputInstance["select"] = function () {
  _ref.value?.select();
};

function handleInput() {
  emits("update:modelValue", innerValue.value);
  emits("input", innerValue.value);
}

function handleChange() {
  emits("change", innerValue.value);
}

function togglePasswordVisible() {
  passwordVisible.value = !passwordVisible.value;
}

watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue;
  }
);

defineExpose<InputInstance>({
  ref: _ref,
  focus,
  blur,
  select,
  clear,
});
</script>
<style scoped></style>
