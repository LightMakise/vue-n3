<template>
    <div class="sidebar">
        <n3-nav :default-active="activeIndex" mode="vertical" @select="handleSelect">
            <n3-sub-nav index="1" v-for="item in list" :key="item.id">
                <template slot="title">
                    <n3-icon type="tags"></n3-icon>
                    {{item.title}}
                </template>
                <n3-nav-item v-for="sub in item.subList" :key="sub.id">{{sub.title}}</n3-nav-item>
            </n3-sub-nav>

        </n3-nav>
    </div>
</template>

<script>
    import N3Nav from "../../../../node_modules/N3-components/src/Nav/n3Nav";
    export default {
        components: {N3Nav}, name: 'Sidebar',
        data () {
            return {
                activeIndex:"1-1",
                list:[
                    {
                        title:"机构用户管理",
                        icon:"tags",
                        subList:[
                            {
                                title:"机构管理",
                                router:"organizational",
                            },{
                                title:"用户管理",
                                router:"user",
                            },
                        ]
                    }
                ]
            }
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .sidebar {
        box-sizing: border-box;
        width: 180px;
        height: 100%;
        position: absolute;
        left: 2px;
        top: 48px;
        .n3-subnav {
            border: 1px solid #7da8f5;
            background-color: #207ecc;
            border-radius: 3px ;
            margin-top: 5px;
            .n3-subnav__title{
                color: #ffffff !important;
            }
            .n3-nav-item{
                margin-top: 2px;
            }
            .n3-nav-item:hover,.n3-nav-item.is-active:hover{
                background: #a7d2f5;
                color: #ffffff;
            }
            .n3-nav-item.is-active{
                background: #a7d2f5;
                color: #ffffff;
            }
        }
    }
</style>
