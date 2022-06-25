import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFound from "../views/PageNotFound.vue";
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
    path: "/faq",
    name: "faq",
    component: () =>
      import(/* webpackChunkName: "faq" */ "../views/TheFAQ.vue"),
  },
  
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/TheLogin.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () =>
      import(/* webpackChunkName: "add" */ "../views/AddChannels.vue"),
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
    path: "/channel/:id",
    component: () => import(/* webpackChunkName: /channel/:id */ "../views/TheChannel.vue"),
  },
  {
    path: "/news-dt/:id",
    component: () => import(/* webpackChunkName: /news/:id */ "../views/PostDt.vue"),
  },
 

  {
    path: "/editor",
    name: "editor",
    component: () =>
      import(/* webpackChunkName: "editor" */ "../views/TheEditor.vue"),
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
    path: "/favorite",
    name: "favorite",
    component: () =>
      import(/* webpackChunkName: "favorite" */ "../views/TheFavorite.vue"),
  },
  
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "TheRegister" */ "../views/TheRegister.vue"),
  },
   { path: '/404', component: PageNotFound },  
    { path: '/:pathMatch(.*)*', redirect: '/404' }, 

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
