import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLeftNavHidden: false
  },
  getters: {},
  mutations: {
    setIsLeftNavHidden(state, val) {
      state.isLeftNavHidden = val;
    }
  }
});
