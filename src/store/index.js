import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        epochBeginning:"",
        api:'http://127.0.0.1:7876/nxt?',
        apiText:'HEBE'
    }
})
