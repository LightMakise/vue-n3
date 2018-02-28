// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//install axios
import axios from 'axios';
Vue.prototype.$axios = axios;

// install N3
import N3Components from 'N3-components'
import 'N3-components/dist/index.min.css'
Vue.use(N3Components)

// install echarts 全局引入 也可以按需引入

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import "./assets/css/global.css";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
