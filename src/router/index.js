import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Create from "@/views/Create.vue";
import Details from "@/components/Details.vue";
import Tag from "@/views/Tag.vue";
import RealTime from "@/views/RealTime.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create",
    name: "create",
    component: Create,
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: Tag,
  },
  {
    path: "/realtime",
    name: "RealTime",
    component: RealTime,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
