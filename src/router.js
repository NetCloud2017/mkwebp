import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home.vue";
import Login from "./Login.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    { path: "/login", component: Login },
  ],
});
