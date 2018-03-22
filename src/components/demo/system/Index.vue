<template>
    <div class="system-index">
        <n3-form ref='setting'>
            <n3-form-item
                    label="主题颜色 :"
                    :label-col="3">
                <n3-radio-group v-model="system.theme" type="primary" @change="modifyTheme">
                    <n3-radio label="blue">蓝色</n3-radio>
                    <n3-radio label="black">黑红</n3-radio>
                </n3-radio-group>
            </n3-form-item>
            <n3-form-item
                    label="管理系统名称 :"
                    :label-col="3">
                <n3-input
                        name="title"
                        v-model="system.title"
                        placeholder="请输入管理系统名称"
                        @change="modifyTitle"
                >
                </n3-input>
            </n3-form-item>
        </n3-form>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'SystemIndex',
        data () {
            return {
            }
        },
        computed: mapState({
            system: 'system',
        }),
        methods: {
            modifyTheme(v){
                let obj = {
                    key:"theme",
                    value:v
                }
                this.$store.dispatch("updateSystem",obj)
            },
            modifyTitle(v){
                console.log(v);
                let obj = {
                    key:"title",
                    value:v
                }
                this.$store.dispatch("updateSystem",obj)
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .system-index{
        width: 100%;
        height: 100%;
        padding: 10%;
        margin-top: 50px;
    }
</style>
