import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/TheLogin.vue"),
  },
  {
    path: "/catogory",
    name: "catogory",
    component: () =>
      import(/* webpackChunkName: "catogory" */ "../views/TheCatogory.vue"),
  },
  {
    path: "/catogores",
    name: "catogores",
    component: () =>
      import(/* webpackChunkName: "catogores" */ "../views/TheCatogores.vue"),
  },
  {
    path: "/catogory/:id",
    component: () => import(/* webpackChunkName: /catogory/:id */ "../views/TheCatogory.vue"),
  },
  {
    path: "/favorits",
    name: "favorits",
    component: () =>
      import(/* webpackChunkName: "favorits" */ "../views/TheFavorits.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/TheSearch.vue"),
  },
  
  {
    path: "/readlater",
    name: "readlater",
    component: () =>
      import(/* webpackChunkName: "TheReadlater" */ "../views/TheReadlater.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "TheRegister" */ "../views/TheRegister.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
