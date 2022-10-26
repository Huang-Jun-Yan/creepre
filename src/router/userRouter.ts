const userRouter = {
  path: "/",
  name: "creepre-root",
  component: () => import("../views/creepre-root/index.vue"),
  //   redirect: "/index",
  meta: {
    routerName: "creepre-root",
    requireAuth: true,
  },
  children: [],
};

export { userRouter };
