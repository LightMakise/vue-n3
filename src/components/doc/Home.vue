<template>
  <div class="hello page">

    <iframe src="https://n3-components.github.io/N3-components/component.html#n3LayoutDocs" frameborder="0" class="iframe"></iframe>
  </div>
</template>

<script>
  import api from "@/http/api"
export default {
  name: 'DocHome',
  data () {
    return {

    }
  },
  methods:{
    //接口调用实例
    test(){
      api.test({params:{ip:"127.0.0.1"}},function (res) {
        console.log(res);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
