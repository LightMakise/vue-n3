import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/doc/Home'
import Echarts from '@/components/doc/Echarts'
import Axios from '@/components/doc/Axios'
import ExportTable from '@/components/doc/ExportTable'
import Editor from '@/components/doc/Editor'
import Ueditor from '@/components/doc/Ueditor'

Vue.use(Router)

export default new Router({
  routes: [
    //路径转发
    {
      path: '/',
      redirect: '/doc/'
    },
    {
      path: '/doc/',
      name: 'Home',
      component: Home
    },{
      path: '/doc/echarts',
      name: 'Echarts',
      component: Echarts
    }, {
      path: '/doc/axios',
      name: 'Axios',
      component: Axios
    },{
      path: '/doc/exportTable',
      name: 'ExportTable',
      component: ExportTable
    },{
      path: '/doc/editor',
      name: 'Editor',
      component: Editor
    },{
      path: '/doc/ueditor',
      name: 'Ueditor',
      component: Ueditor
    },
  ]
})
