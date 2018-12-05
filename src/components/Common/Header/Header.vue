<template>
  <div class="headder clearfix">
    <div class="logo pull-left">
      <router-link to="/" class="img0">
        <img
          src="https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super"
          alt
        >
      </router-link>
    </div>
    <div class="right-menu pull-right clearfix">
      <ul class="clearfix pull-left topUl">
        <li>
          <router-link to="/">组件</router-link>
        </li>
        <li>
          <router-link to="/">指南</router-link>
        </li>
        <li>
          <router-link to="/">资源</router-link>
        </li>
      </ul>
      <div
        :class="{active:!isCollapse}"
        class="personalCenter pull-right"
        @click="isCollapse=!isCollapse"
      >
        <div class="img0 pull-left">
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1996157600,3924018329&fm=27&gp=0.jpg"
            alt
          >
        </div>
        <h3 class="pull-right">
          Ficks
          <i class="el-icon-caret-bottom"></i>
        </h3>

        <ul :style="{height:isCollapse?0:56*3+'px'}">
          <li>
            <router-link to="/">个人中心</router-link>
          </li>
          <li>
            <router-link to="/">我的留言</router-link>
          </li>
          <li>
            <router-link to="/">退出登录</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./Header.js";
export default Header;
</script>
<style lang="less" scoped>
@import url("./Header.less");
</style>
