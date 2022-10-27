import { createRouter, createWebHistory } from "vue-router";
import { userRouter } from "./userRouter";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes: Array<any> = [userRouter];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 进度条配置项这样写
NProgress.configure({
  showSpinner: false,
});

/* 路由导航前钩子 */
router.beforeEach(() => {
  NProgress.start();
});

/* 路由导航结束后钩子 */
router.afterEach(() => {
  NProgress.done();
});

export default router;
