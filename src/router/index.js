import Vue from "vue";
import store from "@/store/index";
import Router from "vue-router";
import Login from "@/components/demo/Login";
import Home from "@/components/demo/Home";
import SystemIndex from "@/components/demo/system/Index";
import FunctionalIndex from "@/components/demo/functional/Index";

Vue.use(Router)
const router = new Router({
    routes: [
        //路径转发
        {
            path: '/',
            redirect: '/demo/home'
        },
        //登录
        {
            path: '/demo/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/demo/home',
            name: 'Home',
            component: Home,
            meta: {
                requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
            },
            children: [
                {
                    path: '/demo/system/',
                    name: 'SystemIndex',
                    component: SystemIndex,
                    meta: {
                        requireAuth: true,
                    },
                },{
                    path: '/demo/functional/',
                    name: 'FunctionalIndex',
                    component: FunctionalIndex,
                    meta: {
                        requireAuth: true,
                    },
                },
            ]
        },


        //  文档
        // {
        //   path: '/doc/',
        //   name: 'Home',
        //   component: Home
        // },{
        //   path: '/doc/echarts',
        //   name: 'Echarts',
        //   component: Echarts
        // }, {
        //   path: '/doc/axios',
        //   name: 'Axios',
        //   component: Axios
        // },{
        //   path: '/doc/exportTable',
        //   name: 'ExportTable',
        //   component: ExportTable
        // },{
        //   path: '/doc/editor',
        //   name: 'Editor',
        //   component: Editor
        // },{
        //   path: '/doc/ueditor',
        //   name: 'Ueditor',
        //   component: Ueditor
        // },

    ]
})
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.isLogin === 1) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/demo/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})
export default router
