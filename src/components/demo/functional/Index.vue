<template>
    <div class="functional-index">
        <v-sidebar></v-sidebar>
        <div class="main">
            <div class="content">
                <v-navbar></v-navbar>
                <div class="page-content">
                    <keep-alive>
                        <router-view/>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vSidebar from "@/components/demo/layout/Sidebar"
    import vNavbar from "@/components/module/Navbar"
    export default {
        name: 'FunctionalIndex',
       data () {
            return {}
        },
        components: {vSidebar,vNavbar},
        methods: {
            tabChange(index,item){

            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .functional-index{
        width: 100%;
        height: 100%;
    }
    .main{
        width: 100%;
        height: 100%;
        clear: both;
        .content{
            word-wrap: break-word;
            box-sizing: border-box;
            margin-left: 200px;
            .page-content{
                margin-top: 20px;
                padding: 0 15px;
            }
        }
    }

</style>
