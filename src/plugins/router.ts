import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/AppCatalog.vue"),
  },
  {
    path: "/cart",
    component: () => import("@/components/AppCart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
