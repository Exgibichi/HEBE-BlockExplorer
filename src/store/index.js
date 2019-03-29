import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    epochBeginning: "",
    api: "http://85.143.175.171:7876/nxt?",
    apiText: "ICBC"
  }
});
