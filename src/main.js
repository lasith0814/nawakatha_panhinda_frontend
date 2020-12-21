import './index.scss'

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import routes from './routes'
import Vuelidate from 'vuelidate'
import Vuesax from 'vuesax'
// import 'boxicons'

import 'vuesax/dist/vuesax.css'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(Vuesax)

const router = new VueRouter({
  routes,
  mode : 'history',
});

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
