<template>
  <div class="echarts page">
    <iframe src="http://echarts.baidu.com/" frameborder="0" class="iframe"></iframe>
    <!--<div id="myChart" style="width: 100%;height: 500px;"></div>-->
  </div>
</template>

<script>
  export default {
    name: 'Echarts',
    data () {
      return {}
    },
    mounted(){
//      this.drawLine()
    },
    methods: {
      //接口调用实例
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {text: '在Vue中使用echarts'},
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
