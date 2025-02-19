<script setup>
function handleBtnClick() {
  console.log('click');
  
}
</script>

<template>
  <p>
    <xm-button @click="handleBtnClick"> with throttle</xm-button>
    <xm-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</xm-button
    >
  </p>
</template>
