// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/store.js"; //状态管理
import ElementUI from "element-ui"; //框架
import "element-ui/lib/theme-chalk/index.css"; //依赖样式
Vue.use(ElementUI);

Vue.config.productionTip = false

// 页面进度条 简单配置
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.inc(0.2);
NProgress.configure({
  easing: "ease",
  speed: 500,
  showSpinner: false
});


// 页面加载开始
var isTrue = true;
router.beforeEach((to, from, next) => {
  // // 判断是否登录
  // if (isTrue && location.href.indexOf("memberAccount=") != -1) {
  //   isTrue = false;
  //   getServerLoginData(next);
  // } else {
  //   var d = store.state.userData;
  //   d = d ?
  //     d :
  //     sessionStorage.userData ?
  //     JSON.parse(sessionStorage.userData) :
  //     null;
  //   store.state.userData = d;
  //   to.path == "/login" ? next() : d ? next() : next("/login");
  // }

  next();
});

// 页面加载结束
router.afterEach(() => {
  NProgress.done(); //进度条结束
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
