<template>
  <button style="background-color: #535bf2;color: red">xm-button</button>
</template>

<script setup lang="ts">
  import {ref} from "vue";

  defineOptions({
    name: 'XmButton'
  })

  const num = ref(0);
  console.log(num)
</script>


<style scoped>

</style>
