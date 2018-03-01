<template>
    <div class="home">
        <v-header @changeTab="changTab"></v-header>
        <div class="main">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import vHeader from "@/components/demo/layout/Header.vue"

    export default {
        name: 'Home',
        components: {vHeader},
        data () {
            return {}
        },
        created(){
            this.changTab()
        },
        methods: {
            changTab(v){
                if(v === "system"){
                    this.$router.push({name:"SystemIndex"})
                }else{
                    this.$router.push({name:"FunctionalIndex"})
                }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
