<template>
    <div class="container_box">
      您访问的页面不存在
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$store.commit("hideLoading");
  }
};
</script>

<style lang="less" scoped>
</style>

