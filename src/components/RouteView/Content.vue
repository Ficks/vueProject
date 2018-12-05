<template>
  <div class="vue-main">
    <!-- 使用动态的 transition name -->
    <transition :name="transitionName">
      <router-view class="Router" :style="{'padding-left':isLeftNavHidden?'64x':'220px'}"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      transitionName: ""
    };
  },
  computed: {
    ...mapState(["isLeftNavHidden"])
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
.Router {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: all 0.3s;
}
</style>

