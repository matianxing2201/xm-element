<script lang="ts" setup>
import { XmMessage } from "xm-element";

const open1 = () => {
    XmMessage({
        message: "Congrats, this is a success message.",
        type: "success",
    });
};
const open2 = () => {
    XmMessage.success("Congrats, this is a success message.");
};
</script>
<template>
    <div>
        <xm-button @click="open1">插件式调用</xm-button>
        <xm-button @click="open2">函数式调用</xm-button>
        <xm-button @click="$message.success('Congrats, this is a success message.')">全局方法调用</xm-button>
    </div>
</template>
