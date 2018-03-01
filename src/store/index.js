import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isLogin : parseInt(sessionStorage.getItem("isLogin")||0)
  },
  mutations: {
    login(state){
      state.isLogin = 1
      sessionStorage.setItem("isLogin",1)
      console.log("登录成功")
    },
    logout(state){
      state.isLogin = 0
      sessionStorage.setItem("isLogin",0)
      console.log("退出登录")
    }
  }
})
