import { createApp } from "vue"; // 引入vue
import "./style.css"; // 全局样式
import router from "./router"; // vue 路由
import { createPinia } from "pinia"; // vuex 插件
import piniaPersist from "pinia-plugin-persist"; // pinia 持久化插件
import axios from "axios";
import directiveLoading from "./directive/directive-loading"; // 自定义loading函数
import App from "./App.vue"; // 实例vue

import { debounce, throttle } from "underscore"; /* 防抖 debounce 节流 throttle*/

const app = createApp(App);

// console.log(_);

//  element-plus UI
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

/* pinia */
const pinia = createPinia(); // 实例pinia
pinia.use(piniaPersist); // 挂载

/* vue自定义指令 */
app.directive("load", directiveLoading);

/* 全局挂载 */
app.config.globalProperties.$axios = axios;
app.config.globalProperties._debounce = debounce; // 防抖
app.config.globalProperties._throttle = throttle; // 节流

/* vue插件挂载 */
app.use(router).use(pinia).use(ElementPlus).mount("#app");
