<template lang="">
    <div>
        
    </div>
</template>
<script lang="ts" setup>
import type{ messageType } from './types';

function test (type: messageType) {
    console.log(type);
}

test('a');
</script>
<style scoped>
    
</style>