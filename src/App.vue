<template>
  <div id="app">
    <div class="nav-top">
      <n3-alert dismissable :show="true" icon="smile-o">
        <strong>N3+VUE</strong>
        <div class="nav-dis">
          框架包含内容：
          <n3-label type="primary">UI框架: N3</n3-label>
          <n3-label type="danger">图表:echarts</n3-label>
          <n3-label type="success">接口调用:axios</n3-label>
          <n3-label type="info">表格导出:file-saver + xlsx</n3-label>
          <n3-label type="warning">文本编辑器:Vue-Quill-Editor 和 ueditor</n3-label>
        </div>
        <n3-nav mode="horizontal" :default-active="activeIndex" router>
          <n3-nav-item index="/doc/">N3文档</n3-nav-item>
          <n3-nav-item index="/doc/echarts">Echarts文档</n3-nav-item>
          <n3-nav-item index="/doc/axios">axios文档</n3-nav-item>
          <n3-nav-item index="/doc/exportTable">表格导出</n3-nav-item>
          <n3-nav-item index="/doc/editor">文本编辑器: Vue-Quill-Editor</n3-nav-item>
          <n3-nav-item index="/doc/ueditor">文本编辑器: ueditor</n3-nav-item>
        </n3-nav>
      </n3-alert>

    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
        activeIndex : this.$route.path
      }
  }
}
</script>

<style>
  .nav-dis{
    margin:20px;
  }
</style>
