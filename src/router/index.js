import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: to => {
      return '/Index';
    },
    hidden: true
  }, {
    path: '/login',
    name: "登录",
    component: resolve => require(['@/components/Login/Login.vue'], resolve),
    hidden: true
  }, {
    path: '/404',
    name: "您的页面找不到了",
    component: resolve => require(['@/components/RouteView/Home.vue'], resolve),
    hidden: true,
    children: [{
      path: '',
      name: "您的页面找不到了",
      component: resolve => require(['@/components/RouteView/NotFound.vue'], resolve)
    }]
  }].concat(require('./admin.js'))
})
