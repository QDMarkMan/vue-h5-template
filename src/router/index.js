import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './modules'
Vue.use(VueRouter)
export default new VueRouter({
  /* mode: 'history',
  base: process.env.BASE_URL, */
  scrollBehavior: () => ({ y: 0 }),
  // the real routers
  routes: RouterConfig
})
