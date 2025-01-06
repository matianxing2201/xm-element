<script setup lang="ts">
const handleChange = (newValue) => {
  console.log(newValue)
}
</script>

<template>
  <div>
    <xm-collapse :modelValue="['a']" @change="handleChange" arrordion>
      <xm-collapse-item title="标题1" name="a">
        内容1
      </xm-collapse-item>
      <xm-collapse-item title="标题2" name="b">
        内容2
      </xm-collapse-item>
    </xm-collapse>
  </div>
</template>

<style scoped>

</style>
