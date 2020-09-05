import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Champions from "../views/Champions.vue";
import ChampionDetails from '../views/ChampionDetails.vue';
import ChampionOverview from '../views/ChampionOverview.vue';
import ChampionAbilities from '../views/ChampionAbilities.vue';
import ChampionSkins from '../views/ChampionSkins.vue';
import ChampionBuilds from '../views/ChampionBuilds.vue';

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
    path: "/champions/:name",
    name: "ChampionDetails",
    component: ChampionDetails,
    children: [{
        path: "",
        name: "ChampionOverview",
        component: ChampionOverview
      },
      {
        path: "/abilities",
        name: "ChampionAbilities",
        component: ChampionAbilities
      },
      {
        path: "/builds",
        name: "ChampionBuilds",
        component: ChampionBuilds
      },
      {
        path: "/skins",
        name: "ChampionSkins",
        component: ChampionSkins
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;