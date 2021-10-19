import Vue from 'vue'
import Vuex from 'vuex'

import blogCards from './modules/blogCards'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    blogCards,
    user
  }
})
