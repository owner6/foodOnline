import { createRouter, createWebHistory } from "vue-router";
import AuthComponent from "../components/auth-component.vue";

const routes = [
  {
    patch: "/",
    name: "home",
    component: "",
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthComponent,
  },
  {
    patch: "/aboutUs",
    name: "aboutUs",
    component: "",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
