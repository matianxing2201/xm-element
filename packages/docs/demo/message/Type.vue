<script lang="ts" setup>
import { XmMessage } from "xm-element";

const open1 = () => {
    XmMessage("This is a message.");
};
const open2 = () => {
    XmMessage({
        message: "Congrats, this is a success message.",
        type: "success",
    });
};
const open3 = () => {
    XmMessage({
        message: "Warning, this is a warning message.",
        type: "warning",
    });
};
const open4 = () => {
    XmMessage.error("Oops, this is a error message.");
};
</script>

<template>
    <xm-button :plain="true" @click="open2">Success</xm-button>
    <xm-button :plain="true" @click="open3">Warning</xm-button>
    <xm-button :plain="true" @click="open1">Message</xm-button>
    <xm-button :plain="true" @click="open4">Error</xm-button>
</template>
