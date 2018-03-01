<template>
    <div class="ueditor page">
        <script id="ueditor" type="text/plain"></script>
        <!--<n3-accordion :one-at-time="checked" @change="change">-->
            <!--<n3-panel :is-open="true" index="1" @change="change">-->
                <!--<div slot="header">文档</div>-->
            <!--</n3-panel>-->

        <!--</n3-accordion>-->
        <iframe src="http://ueditor.baidu.com/doc/" frameborder="0" class="iframe"></iframe>
    </div>
</template>

<script>

    export default {
        name: 'Ueditor',
        data(){
            return {
                checked: true,
                editor: null,
                defaultMsg:"",
            }
        },
        mounted() {
            const _this = this;
            this.editor = UE.getEditor('ueditor', this.config); // 初始化UE
            this.editor.addListener("ready", function () {
                _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
            });
        },
        methods: {
            change (show) {
                console.log(show)
            },
            getUEContent() { // 获取内容方法
                return this.editor.getContent()
            },
            destroyed() {
                this.editor.destroy();
            }
        },
        destroyed () {
            this.destroyed()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .iframe{
        margin-top: 20px;
        height: 55%;
    }
</style>
