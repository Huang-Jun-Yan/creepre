<script setup lang="ts">
// import { getCurrentInstance } from "vue";
import "./utils/mouseEffect";
import "./utils/titleRoll";

// const { proxy }: any = getCurrentInstance();

// console.log(proxy._debounce);
</script>

<template>
  <router-view />
</template>

<style scoped lang="scss">
div {
  background-color: $backgroundColor;
//   @include boxShadow;
}
</style>
