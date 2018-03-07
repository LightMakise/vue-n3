import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
const navbar = JSON.parse(sessionStorage.getItem("navbar")||"[]")
export default new Vuex.Store({
    state: {
        isLogin: parseInt(sessionStorage.getItem("isLogin") || 0),
        navbar: navbar
    },
    mutations: {
        //点击路由的时候实时获取状态
        updateLoginState(state){
            state.isLogin = parseInt(sessionStorage.getItem("isLogin") || 0)
        },
        login(state){
            state.isLogin = 1
            sessionStorage.setItem("isLogin", 1)
            console.log("登录成功")
        },
        logout(state){
            state.isLogin = 0
            sessionStorage.setItem("isLogin", 0)
            console.log("退出登录")
        },
        addNavbar(state,staion){
            state.navbar.push(staion)
            sessionStorage.setItem("navbar",JSON.stringify(state.navbar))
        },
        removeNavbar(state,index){
            console.log(index);
            state.navbar.splice(index,1);
            state.navbar.forEach((item,index)=>{
                item.id = index
            })
            sessionStorage.setItem("navbar",JSON.stringify(state.navbar))
        },
        clearNavbar(state){
            sessionStorage.removeItem("navbar")
            state.navbar = []
        }
    },
    actions: {
        logout(context){
            context.commit("clearNavbar");
            context.commit("logout");
        }
    }
})
