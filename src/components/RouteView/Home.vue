<template>
  <div class="vue-wrap">
    <Header></Header>
    <Nav></Nav>
    <transition :name="transitionName">
      <router-view class="Router vue-main" :style="{'padding-left':isLeftNavHidden?'64px':'220px'}"></router-view>
    </transition>
  </div>
</template>
<script>
import Header from "../Common/Header/Header.vue";
import Nav from "../Common/Nav/Nav.vue";
import { mapState } from "vuex";
export default {
  components: {
    Header,
    Nav
  },
  computed: {
    ...mapState(["isLeftNavHidden"])
  },
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  methods: {},
  mounted() {},
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>
<style lang="less" scoped>
.vue-main {
  padding-top: 80px;
  box-sizing: border-box;
  position: relative;
}
.Router {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: all 0.3s;
}
</style>