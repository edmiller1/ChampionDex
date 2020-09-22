import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/store.js";
import "./registerServiceWorker";
import '@/assets/css/tailwind.css';
import axios from 'axios';
import Carousel3d from 'vue-carousel-3d';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(Carousel3d);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");