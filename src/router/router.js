import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Champions from "../views/Champions.vue";
import ChampionDetails from '../views/ChampionDetails.vue';
import ChampionPassive from '../components/ChampionPassive.vue';
import ChampionQ from '../components/ChampionQ.vue';
import ChampionW from '../components/ChampionW.vue';
import ChampionE from '../components/ChampionE.vue';
import ChampionR from '../components/ChampionR.vue';
import SkinSplash from '../components/SkinSplash.vue';

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
    children: [{
        path: '/Passive',
        name: "Passive",
        component: ChampionPassive,
        props: true
      },
      {
        path: '/:id/Q',
        name: 'Q',
        component: ChampionQ,
        props: true
      },
      {
        path: '/:id/W',
        name: 'W',
        component: ChampionW,
        props: true
      },
      {
        path: '/:id/E',
        name: 'E',
        component: ChampionE,
        props: true
      },
      {
        path: '/:id/R',
        name: 'R',
        component: ChampionR,
        props: true
      },
      {
        path: '/:id/:num',
        name: 'SkinSplash',
        component: SkinSplash,
        props: true
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