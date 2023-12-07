import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import About from "../views/about-component.vue";
import SellOnline from "../views/sell-online-component.vue";
import MyPage from "../views/my-page-component.vue";
import Adding from "../views/v-cart-component.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: MyPage,
  },
  {
    path: "/adding",
    name: "Adding",
    component: Adding,
  },
  {
    path: "/sell",
    component: SellOnline,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contacts",
    component: "",
  },
  {
    path: "/promotions",
    component: "",
  },
  {
    path: "/delivery",
    component: "",
  },
  {
    path: "/return",
    component: "",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authToken = localStorage.getItem("authToken");

  if (to.matched.some((record) => record.meta.requiresAuth) && authToken) {
    next("/mypage");
  } else {
    next();
  }
});

export default router;
