<template>
    <div class="home">
        <v-header @changeTab="changTab"></v-header>
        <div class="main">
            <v-crumbnav></v-crumbnav>
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import vHeader from "@/components/demo/layout/Header.vue"
    import vCrumbnav from "@/components/demo/layout/Crumbnav.vue"

    export default {
        name: 'Home',
        components: {vHeader,vCrumbnav},
        data () {
            return {}
        },
        created(){
//            this.changTab()
        },
        methods: {
            changTab(v){
                if(v === "system"){
                    this.$router.push({path:"/demo/system"})
                }else{
                    this.$router.push({path:"/demo/functional"})
                }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
