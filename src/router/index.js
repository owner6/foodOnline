import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import About from "../views/about-component.vue";
import SellOnline from "../views/sell-online-component.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/home",
    component: HomeView,
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

export default router;
