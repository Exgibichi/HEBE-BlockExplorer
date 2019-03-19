import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        epochBeginning:"",
        api:'http://194.87.94.134:7876/nxt?',
        apiText:'ICBC'
    }
})
