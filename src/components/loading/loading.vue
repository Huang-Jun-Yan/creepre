<script setup lang="ts">
import { ref } from "vue";
const props: any = defineProps({
  msg: Object,
});

const a = ref("");

setInterval(() => {
  if (a.value.length == 3) {
    a.value = "";
  }
  a.value += ".";
}, 500);

/* 卸载阶段 */
</script>

<template>
  <div class="flex-center" v-show="props.msg.show">
    <div class="loading three-balls-bounce">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
    </div>
    <div class="loadingText">
      {{ props.msg.title }}<span>{{ a }}</span>
    </div>
  </div>
</template>



<style scoped lang="scss">
.flex-center {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
  flex-direction: column;
  .loadingText {
    margin-top: 20px;
    font-size: 14px;
    letter-spacing: 1px;
    // transform: translateX(15%)
  }
}
.three-balls-bounce {
  position: relative;
  width: 200px;
  height: 62px;
}

.three-balls-bounce .circle {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #ff4a69;
  left: 15%;
  transform-origin: 50%;
  animation: balls-circle 0.5s alternate-reverse infinite ease;
}

.three-balls-bounce .shadow {
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: balls-shadow 0.5s alternate-reverse infinite ease;
}
.three-balls-bounce .shadow:nth-child(4),
.three-balls-bounce .circle:nth-child(2) {
  left: 45%;
  animation-delay: 0.2s;
}
.three-balls-bounce .shadow:nth-child(5),
.three-balls-bounce .circle:nth-child(3) {
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
}

@keyframes balls-circle {
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }
  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0%;
  }
}
@keyframes balls-shadow {
  0% {
    transform: scaleX(1.5);
  }
  40% {
    transform: scaleX(1);
    opacity: 0.7;
  }
  100% {
    transform: scaleX(0.2);
    opacity: 0.4;
  }
}
</style>