import { createApp, reactive } from "vue";

import myLoading from "../loading/loading.vue";

const msg = reactive({
  show: false,
  title: "努力加载中... ",
});

const $loading = createApp(myLoading, { msg }).mount(
  document.createElement("div")
);

const load = {
  show(title?: string | undefined) {
    // 显示loading
    msg.show = true;
    msg.title = typeof title == "undefined" ? msg.title : title;
    document.body.appendChild($loading.$el);
  },

  hide() {
    // loading隐藏
    msg.show = false;
  },
};

export { load };
