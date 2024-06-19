

<template>
  <xm-collapse v-model="activeNames" > 
    <xm-collapse-item
        title="first"
        name="1"
    >
        <div>this is first</div>
    </xm-collapse-item>
    <xm-collapse-item
        title="second"
        name="2"
    >
        <div>this is second</div>
    </xm-collapse-item>
  </xm-collapse>
</template>
<script setup lang="ts">
import { ref } from "vue";

const activeNames = ref(["1", "2"]);
</script>

<style scoped>
</style>
