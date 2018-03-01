<template>
    <div class="header">
        <div class="name pull-left font-26 color-white">
            Catarc 后台管理系统
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
        <div class="info pull-left color-white text-center">
            <n3-icon type="user-md"></n3-icon>
            您好，系统管理员
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Header',
        data () {
            return {
                curPage:"menu"
            }
        },
        methods: {
            select(v){
                this.curPage = v
                this.$emit("changeTab",v)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .header {
        padding: 0 5px;
        min-width: 1000px;
        width: 100%;
        background: #54b4eb;
        height: 48px;
        line-height: 48px;
        .name{
            width: 30%;
        }
        .buttons{
            width: 50%;
        }
        .info{
            width: 20%;
        }
    }
</style>
