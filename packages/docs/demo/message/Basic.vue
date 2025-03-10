<script lang="ts" setup>
import { h } from "vue";
import { XmMessage } from "xm-element";

const open = () => {
  XmMessage("This is a message.");
};

const openVn = () => {
  XmMessage({
    message: h("p", { style: "line-height: 1; font-size: 14px" }, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};
</script>

<template>
  <xm-button :plain="true" @click="open">Show message</xm-button>
  <xm-button :plain="true" @click="openVn">VNode</xm-button>
</template>
