// pinia as store 入口文件
import { defineStore } from "pinia";

export const useUserInfo = defineStore("user", {
  persist: {
    enabled: true, //开启存储
    // storage:sessionStorage/localStorage,还可以自定义存入对应的如下
    //不写以下也可以 默认是sessionStorage
    strategies: [
      // { storage: cookiesStorage, paths: ['info'] }
      { storage: localStorage, paths: ["info"] },
      //{ storage: sessionStorage, paths: ['info'] }
    ],
  },
  state: () => {
    return {
      info: {
        token: "",
        userName: "",
        userId: "",
      },
    };
  },
  // 定义getters，类似于computed，具有缓存功能
  getters: {},
  // 定义actions，类似于methods，用来修改state，做一些业务逻辑
  actions: {},
});
