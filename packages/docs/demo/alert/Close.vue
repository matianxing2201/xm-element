<script setup>

function handleClose() {
    console.log('close')
}
</script>
<template>
  <div class="basic block">
    <xm-alert title="Unclosable alert" type="success" :closable="false" />
    <xm-alert title="Alert with callback" type="warning" @close="handleClose" />
  </div>
</template>
