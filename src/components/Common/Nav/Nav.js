import {
  mapState
} from 'vuex';
export default {
  computed: {
    ...mapState(['isLeftNavHidden'])
  },
  data() {
    return {
      listArr: []
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    onMenuSlide() {
      this.$store.commit("setIsLeftNavHidden", !this.isLeftNavHidden)
    }
  },
  mounted() {
    var arr = this.$router.options.routes[3].children;
    this.listArr = arr;
    console.log(arr);
  },
}
