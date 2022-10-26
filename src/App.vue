<script setup lang="ts">
import { getCurrentInstance } from "vue";
import "./utils/mouseEffect";
import "./utils/titleRoll";

const { instance }: any = getCurrentInstance();

console.log(instance);
</script>

<template>
  <router-view />
</template>

<style scoped lang="scss">
div {
  background-color: $backgroundColor;
  @include boxShadow;
}
</style>
