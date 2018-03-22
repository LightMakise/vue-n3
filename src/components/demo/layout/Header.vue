<template>
    <div class="header">
        <div class="name pull-left font-26 color-white">
            {{system.title}}
        </div>
        <div class="buttons pull-left">
            <n3-button-group>
                <n3-button size="lg" type="primary" :active="curPage === 'menu'" @click.native="select('menu')">功能菜单
                </n3-button>
                <n3-button size="lg" type="primary" :active="curPage === 'system'" @click.native="select('system')">
                    系统设置
                </n3-button>
            </n3-button-group>
        </div>
        <div class="info pull-left color-white ">
            <n3-icon type="user-md"></n3-icon>
            您好，系统管理员
            <n3-dropdown>
            <div slot="trigger">
                <n3-button>
                    <n3-icon type="gear"></n3-icon>
                </n3-button>
            </div>
            <li><a href="#" @click="doc">查看文档</a></li>
            <li><a href="#" @click="changeTheme">切换主题</a></li>
            <li><a href="#" @click="logout">退出登录</a></li>
        </n3-dropdown>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'Header',
        data () {
            return {
                curPage:"menu",
            }
        },
        computed: mapState({
            system: 'system',
        }),
        created(){
            if(this.$route.path === "/demo/system"){
                this.curPage = 'system'
            }
        },
        methods: {
            select(v){
                this.curPage = v
                this.$emit("changeTab",v)
            },
            logout(){
                this.$store.dispatch("logout")
                this.$router.push({path:"/demo/login"})
            },
            doc(){
                this.$router.push({path:"/doc"})
            },
            changeTheme(){
                this.$store.commit("changeTheme")
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .header {
        position: absolute;
        top:0;
        left:0;
        z-index: 1000;
        padding: 0 5px;
        min-width: 1000px;
        width: 100%;
        height: 48px;
        line-height: 48px;
        .name{

            min-height: 1px;
            width: 30%;
        }
        .buttons{

            min-height: 1px;
            width: 50%;
        }
        .info{

            min-height: 1px;
            width: 20%;
        }
        .n3-dropdown-con{
            top:-2px;
        }
        .n3-btn-default{
            background: none;
            border: 0;
            line-height: 20px;
            color: white;
        }
        .n3-dropdown-menu > li > a{
            min-width: 0;
        }
    }
</style>
