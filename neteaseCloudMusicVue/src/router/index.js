import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: "login",
      component: resolve => require(['@/pages/login/Login.vue'], resolve),
      hidden: true
    },
    {
      path: '*',
      name: "notFound",
      hidden: true,
      component: resolve => require(['@/pages/not-found/NotFound.vue'], resolve),
    },
    {
      path: '/',
      name: "home",
      hidden: true,
      component: resolve => require(['@/pages/home/Home.vue'], resolve),
    },
  ]
})
