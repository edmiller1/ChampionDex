import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Champions from "../views/Champions.vue";
import ChampionDetails from '../views/ChampionDetails.vue';

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    redirect: '/champions'
  },
  {
    path: "/champions",
    name: "Champions",
    component: Champions,
  },
  {
    path: "/champions/:id",
    name: "ChampionDetails",
    component: ChampionDetails,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;