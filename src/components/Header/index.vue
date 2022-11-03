<script setup lang="ts">
</script>

<template>
  <header id="creepre_header">
    <slot></slot>
  </header>
</template>



<style scoped lang="scss">
#creepre_header {
  height: 64px;
  @include boxShadow
}
</style>