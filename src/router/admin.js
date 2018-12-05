module.exports = [{
  path: '/',
  component: resolve => require(['@/components/RouteView/Home.vue'], resolve),
  redirect: '/Index',
  children: [{
    path: '/Index',
    name: '首页',
    icon: 'el-icon-mobile-phone',
    component: resolve => require(['@/components/Modules/Index/Index.vue'], resolve),
  }, {
    path: '/C1',
    name: '铃声',
    icon: 'el-icon-bell',
    component: resolve => require(['@/components/Modules/C1.vue'], resolve),
  }, {
    path: "/Group",
    name: "导航组",
    icon: 'el-icon-service',
    component: resolve => require(['@/components/RouteView/Content.vue'], resolve),
    children: [{
      path: '/Group/g1',
      name: '子导航一',
      icon: 'el-icon-view',
      component: resolve => require(['@/components/Modules/g1.vue'], resolve),
    }, {
      path: '/Group/g2',
      name: '子导航二',
      icon: 'el-icon-search',
      component: resolve => require(['@/components/Modules/g2.vue'], resolve),
    }, {
      path: '/Group/g3',
      name: '子导航三',
      icon: 'el-icon-phone-outline',
      component: resolve => require(['@/components/Modules/g3.vue'], resolve),
    }]
  }, {
    path: '/C2',
    name: '导航二',
    icon: 'el-icon-rank',
    component: resolve => require(['@/components/Modules/C2.vue'], resolve),
  }, {
    path: '/C3',
    name: '导航三',
    icon: 'el-icon-bell',
    component: resolve => require(['@/components/Modules/C3.vue'], resolve),
  }]
}]
