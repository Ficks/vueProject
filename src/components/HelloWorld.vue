<template>
  <div class="hello">
    <el-input v-model="yzm" placeholder></el-input>
  </div>
</template>

<script>
import loginAxios from "../axios/login.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      Google: "",
      yzm: ""
    };
  },
  mounted() {
    loginAxios.login({
      url: "/wordFrontInfo/queryList",
      data: {
        page: 1,
        rows: 10
      },
      success: data => {
        console.log(data);
      },
      error: err => {
        console.log(err);
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
