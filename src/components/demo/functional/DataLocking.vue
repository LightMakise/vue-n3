<template>
    <div class="datalocking">
        <script id="ueditor" type="text/plain"></script>
        <div class="button-gruop text-center">
            <n3-button type="primary" @click.native="submit">提交</n3-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'DataLocking',
        data () {
            return {
                editor:"",
                config:{
                    initialFrameHeight:500
                },
            }
        },
        mounted(){
            const _this = this;
            this.editor = UE.getEditor('ueditor', this.config); // 初始化UE
            this.editor.addListener("ready", function () {
                _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
            });
        },
        methods: {
            handleSelect(){

            },
            getUEContent() { // 获取内容方法
                return this.editor.getContent()
            },
            destroyed() {
                this.editor.destroy();
            },
            submit(){
                this.n3Alert({
                    content: '提交成功',
                    type: 'success',
                    placement: 'top-right',
                    duration: 2000,
                    width:'200px' // 内容不确定，建议设置width
                })
            }
        },
        destroyed () {
            this.destroyed()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .datalocking{
        padding-top: 15px;
        .button-gruop{
            margin-top: 15px;
            button{
                margin-right: 15px;
            }
        }
    }

</style>
