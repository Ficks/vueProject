<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  mounted() {},
  watch: {}
};
</script>

<style lang="less">
@import url("./style.less");
@import url("./style.media.less");
</style>