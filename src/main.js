import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Routes from './Routes.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'animate.css';

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')
