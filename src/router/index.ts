import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/student",
      name: "student",
      redirect: {
        name: "学生列表",
      },
      children: [
        {
          path: "list",
          name: "学生列表",
          component: () => import("@/views/Student/List.vue"),
        },
        {
          path: ":id(\\d+)",
          name: "学生详情",
          props: route => ({
            id: Number.parseInt(route.params.id as string),
          }),
          component: () => import("@/views/Student/Detail.vue"),
        },
      ],
    },
    {
      path: "/tailwind",
      name: "tailwind",
      component: () => import("@/views/TailWind.vue"),
    },
    {
      path: "/testvue",
      name: "testvue",
      component: () => import("@/views/TestVue/IndexView.vue"),
    },
    {
      path: "/testplugin",
      name: "testplugin",
      component: () => import("../views/TestPlugin.vue"),
    },
    {
      path: "/ant-design",
      name: "ant-design",
      component: () => import("../views/TestAntd.vue"),
    },
    {
      path: "/testref",
      name: "testref",
      component: () => import("../views/TestRef.vue"),
    },
    {
      path: "/test-vue3-json-diff",
      name: "test-vue3-json-diff",
      component: () => import("../views/TestVue3JsonDiff.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/typescript",
      name: "typescript",
      component: () => import("../views/TestTypescript.vue")
    },
    {
      path: "/testweb3",
      name: "testweb3",
      component: () => import("../views/TestWeb3.vue"),
    },
    {
      path: "/testramwin",
      name: "ramwints",
      component: () => import("../views/TestRamwinTs.vue")
    },
  ]
})

export default router
