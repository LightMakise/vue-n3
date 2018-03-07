<template>
    <div class="sidebar">
        <n3-nav :default-active="activeIndex" mode="vertical" @select="handleSelect" router>
            <n3-sub-nav :index="index+1" v-for="(item,index) in list" :key="item.id">
                <template slot="title">
                    <n3-icon :type="item.icon"></n3-icon>
                    {{item.title}}
                </template>
                <n3-nav-item v-for="sub in item.subList" :key="sub.id" :index="'/demo' + item.rootRouter + sub.router"
                             @click="changeNav(item,sub)">{{sub.title}}
                </n3-nav-item>
            </n3-sub-nav>

        </n3-nav>
    </div>
</template>

<script>
    import N3Nav from "../../../../node_modules/N3-components/src/Nav/n3Nav";
    import navData from "@/nav/index";
    export default {
        components: {N3Nav}, name: 'Sidebar',
        data () {
            return {
                activeIndex: this.$route.path,
                ab:[],
                list: navData,
            }
        },
        mounted(){

        },
        created(){
            console.log(this.$store.state.navbar.length);
            if(this.$store.state.navbar.length === 0){
                let obj = {
                    id:0,
                    title:"用户管理",
                    path:'/demo/functional/user' ,
                }
                this.$store.commit('addNavbar', obj)
                this.$router.push({path:"/demo/functional/user"})
            }
        },
        methods: {
            handleSelect(){
            },
            changeNav(item,sub){
                let obj = {
                    id:this.$store.state.navbar.length,
                    title:sub.title,
                    path:'/demo' + item.rootRouter + sub.router,
                }
                if(!this.check(obj)){
                    this.$store.commit('addNavbar', obj)
                }

            },
            check(obj){
                let result = false
                this.$store.state.navbar.forEach((item,index) =>{
                    if(item.title === obj.title){
                        result = true
                    }
                })
                return result
            }

        },
        watch:{
            '$route'(to, from){
                this.activeIndex = this.$route.path
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .sidebar {
        box-sizing: border-box;
        width: 180px;
        height: 90%;
        position: absolute;
        left: 2px;
        top: 75px;
        .n3-subnav {
            border: 1px solid #7da8f5;
            background-color: #207ecc;
            border-radius: 3px;
            margin-top: 5px;
            .n3-subnav__title {
                color: #ffffff !important;
            }
            .n3-nav-item {
                margin-top: 2px;
            }
            .n3-nav-item:hover, .n3-nav-item.is-active:hover {
                background: #a7d2f5;
                color: #ffffff;
            }
            .n3-nav-item.is-active {
                background: #a7d2f5;
                color: #ffffff;
            }
        }
    }
</style>
