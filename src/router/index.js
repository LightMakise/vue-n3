import Vue from "vue";
import store from "@/store/index";
import Router from "vue-router";
import DocHome from "@/components/doc/Home";
import Axios from "@/components/doc/Axios";
import Echarts from "@/components/doc/Echarts";
import Editor from "@/components/doc/Editor";
import ExportTable from "@/components/doc/ExportTable";
import Ueditor from "@/components/doc/Ueditor";
import Index from "@/components/doc/Index";
import Datalocking from "@/components/demo/functional/Datalocking";
Vue.use(Router)
const router = new Router({
    routes: [
        //路径转发
        {
            path: '/',
            redirect: '/demo/functional'
        },{
            path: '/doc',
            redirect: '/doc/home'
        },
        //404页面跳转
        {
            path: '*',
            redirect: '/demo/functional'
        },
        //登录
        {
            path: '/demo/login',
            name: 'Login',
            component:  resolve => require(['@/components/demo/Login'], resolve),
        },
        {
            path: '/demo/home',
            name: 'Home',
            component:  resolve => require(['@/components/demo/Home'], resolve),
            meta: {
                requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                breadcrumbName: "首页"
            },
            children: [
                {
                    path: '/demo/system',
                    name: 'SystemIndex',
                    component:  resolve => require(['@/components/demo/system/Index'], resolve),
                    meta: {
                        requireAuth: true,
                        breadcrumbName: "系统设置"
                    },
                }, {
                    path: '/demo/functional',
                    name: 'FunctionalIndex',
                    component:  resolve => require(['@/components/demo/functional/Index'], resolve),
                    meta: {
                        requireAuth: true,
                        breadcrumbName: "功能菜单"
                    },
                    children: [
                        // {
                        //     path: '/demo/functional/',
                        //     redirect: '/demo/functional/user'
                        // },
                        {
                            path: '/demo/functional/organizational',
                            name: 'Organizational',
                            component:  resolve => require(['@/components/demo/functional/Organizational'], resolve),
                            meta: {
                                requireAuth: true,
                                breadcrumbName: "机构管理",
                                breadcrumbTarget: 1,
                            },
                        }, {
                            path: '/demo/functional/user',
                            name: 'User',
                            component:  resolve => require(['@/components/demo/functional/User'], resolve),
                            meta: {
                                requireAuth: true,
                                breadcrumbName: "用户管理",
                                breadcrumbTarget: 1,
                            },
                        }, {
                            path: '/demo/functional/authority',
                            name: 'Authority',
                            component:  resolve => require(['@/components/demo/functional/Authority'], resolve),
                            meta: {
                                requireAuth: true,
                                breadcrumbName: "权限管理",
                                breadcrumbTarget: 1,
                            },
                        }, {
                            path: '/demo/functional/datalocking',
                            name: 'DataLocking',
                            component:  Datalocking,
                            meta: {
                                requireAuth: true,
                                breadcrumbName: "数据锁定",
                                breadcrumbTarget: 2,
                            },
                        }, {
                            path: '/demo/functional/datasource',
                            name: 'DataSource',
                            component:  resolve => require(['@/components/demo/functional/DataSource'], resolve),
                            meta: {
                                requireAuth: true,
                                breadcrumbName: "数据源",
                                breadcrumbTarget: 2,
                            },
                        }, {
                            path: '/demo/functional/enterprisestandard',
                            name: 'EnterpriseStandard',
                            component:  resolve => require(['@/components/demo/functional/EnterpriseStandard'], resolve),
                            meta: {
                                requireAuth: true,
                                breadcrumbName: "企业标准",
                                breadcrumbTarget: 2,
                            },
                        },
                    ]
                },
            ]
        },
        //  文档
        {
            path: "/doc/",
            name:"DocIndex",
            component:Index,
            children:[
                {
                    path: '/doc/home',
                    name: 'DocHome',
                    component: DocHome
                }, {
                    path: '/doc/echarts',
                    name: 'Echarts',
                    component: Echarts
                }, {
                    path: '/doc/axios',
                    name: 'Axios',
                    component: Axios
                }, {
                    path: '/doc/exportTable',
                    name: 'ExportTable',
                    component: ExportTable
                }, {
                    path: '/doc/editor',
                    name: 'Editor',
                    component: Editor
                }, {
                    path: '/doc/ueditor',
                    name: 'Ueditor',
                    component: Ueditor
                },
            ]

        },



    ]
})
router.beforeEach((to, from, next) => {
    store.commit("updateLoginState")
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
