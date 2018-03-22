<template>
    <div class="crumbnav" v-show="isDisplay">
        <!--{{path}}-->
        <!--:href="index < pathArr.length - 1?item.path:null"-->
        <n3-breadcrumb>
            <n3-breadcrumb-item v-for="(item,index) in pathArr" :key="item.id"
                                :active="index === pathArr.length - 1?true:false" @click.native="clickTarget(item.path)">{{item.title}}
            </n3-breadcrumb-item>
        </n3-breadcrumb>
    </div>
</template>

<script>
    import navData from "@/config/nav"
    export default {
        name: "Crumbnav",
        data () {
            return {
                pathArr: []
            }
        },
        props:{
            isDisplay:{
                type:Boolean,
                default:true,
            }
        },
        mounted(){
            this.getCrumb()
        },
        methods: {
            getCrumb(){
                this.pathArr = []
                this.$route.matched.forEach((item, index) => {
                    var curItemObj = {
                        path: item.path,
                        title: item.meta.breadcrumbName
                    }
                    if(this.$route.matched.length === index+1){
                        navData.forEach((item1,index)=>{
                            if(item.meta.breadcrumbTarget == item1.target){
                                var itemObj = {
                                    path: '/demo' + item1.rootRouter + item1.defaultPath,
                                    title: item1.title
                                }
                                this.pathArr.push(itemObj)
                            }

                        })

                    }
                    this.pathArr.push(curItemObj)
                })
            },
            clickTarget(path){
                this.$router.push({path:path})
            }
        },
        watch: {
            '$route'(to, from){
                this.getCrumb()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .crumbnav {
        margin-top: 50px;
        padding-left: 213px;
        height: 30px;
        line-height: 30px;
        color: #999999;
        font-size: 12px;
    }
</style>
