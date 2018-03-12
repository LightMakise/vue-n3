<template>
  <div id="app">
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
