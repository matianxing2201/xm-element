<script lang="ts" setup>
import { XmMessage } from "xm-element";

const openCenter = () => {
    XmMessage({
        showClose: true,
        message: "Centered text",
        center: true,
    });
};
</script>

<template>
    <xm-button plain @click="openCenter">Centered text</xm-button>
</template>
