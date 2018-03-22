<template>
    <div class="home">
        <v-header @changeTab="changTab"></v-header>
        <div class="main">
            <v-crumbnav :is-display="isDisPlayCrumbnav"></v-crumbnav>
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
            return {
                isDisPlayCrumbnav:true
            }
        },
        created(){
//            this.changTab()
            if(this.$route.path === "/demo/system"){
                this.isDisPlayCrumbnav = false
            }else{
                this.isDisPlayCrumbnav = true
            }
        },
        methods: {
            changTab(v){
                if(v === "system"){
                    this.$router.push({path:"/demo/system"})
                    this.isDisPlayCrumbnav = false
                }else{
                    this.$router.push({path:"/demo/functional"})
                    this.isDisPlayCrumbnav = true
                }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .home ,.main{
        height: 100%;
    }
</style>
