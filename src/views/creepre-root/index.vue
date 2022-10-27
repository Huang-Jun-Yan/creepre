<script lang="ts">
import Header from "@/components/Header/index.vue";
import Content from "@/components/Content/index.vue";
import Footer from "@/components/Footer/index.vue";
</script>

<template>
  <div id="root">
    <!-- 头部 -->
    <Header />
    <!-- 内容 -->
    <Content />
    <!-- 底部 -->
    <Footer />
  </div>
</template>



<style scoped lang="scss">
#root {
  height: 100%;
}
</style>