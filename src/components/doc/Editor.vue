<template>
    <div class="editor page">
        <quill-editor ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
        <iframe src="https://quilljs.com/docs/quickstart/" frameborder="0" class="iframe"></iframe>
    </div>
</template>

<script>
    import {quillEditor} from 'vue-quill-editor';
    // require styles
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    export default {
        name: 'Editor',
        data(){
            return {
                editorOption: {
                    // something config
                },
                content:'',
            }
        },
        components: {
            quillEditor
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .iframe{
        margin-top: 20px;
        height: 60%;
    }
</style>
