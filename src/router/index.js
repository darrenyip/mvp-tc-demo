import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/Dashboard/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Dashboard,
    },
    {
      path: "/tld-test",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/TldTest/TldTest.vue"),
    },
    {
      path: "/equipments",
      name: "equipments",
      component: () => import("../components/Equipments/Equipments.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../components/Projects/Projects.vue"),
    },
    {
      path: "/departments",
      name: "departments",
      component: () => import("../components/Departments/Departments.vue"),
    },
  ],
});

export default router;
