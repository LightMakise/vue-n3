// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
//install UE
import "../static/UE/ueditor.config.js";
import "../static/UE/ueditor.all.min.js";
import "../static/UE/lang/zh-cn/zh-cn.js";
import "../static/UE/ueditor.parse.min.js";
//install axios
import axios from "axios";
// install N3
import N3Components from "N3-components";
import "N3-components/dist/index.min.css";
import echarts from "echarts";
import "./assets/css/global.css";
//VUEX
import store from "./store/index";
Vue.prototype.$axios = axios;

Vue.use(N3Components)

// install echarts 全局引入 也可以按需引入
Vue.prototype.$echarts = echarts

import "@/assets/css/theme/original.css"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: {App},
    template: '<App/>'
})
