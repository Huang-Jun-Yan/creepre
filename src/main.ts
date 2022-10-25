import { createApp } from "vue"; // 引入vue
import "./style.css"; // 全局样式
import router from "./router"; // vue 路由
import { createPinia } from "pinia"; // vuex 插件
import piniaPersist from "pinia-plugin-persist"; // pinia 持久化插件
import App from "./App.vue"; // 实例vue

//  element-plus UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

/* pinia */
const pinia = createPinia(); // 实例pinia
pinia.use(piniaPersist); // 挂载 

/* vue插件挂载 */
const app = createApp(App).use(router).use(pinia).use(ElementPlus).mount("#app");
