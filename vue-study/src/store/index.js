import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    loginOut(state) {
      state.isLogin = false;
    }
  },
  actions: {
    login({ commit }, username) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'admin') {
            commit('login')
            resolve();
          } else {
            reject();
          }
        }, 1000);
      })
    }
  },
  modules: {
  }
})
