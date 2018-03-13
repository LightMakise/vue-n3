<template>
    <div id="app" :class="theme">
        <router-view/>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'App',
        data(){
            return {
                activeIndex: this.$route.path,
            }
        },
        computed: mapState({
                theme: 'theme',
            })
    }
</script>

<style>
    .nav-dis {
        margin: 20px;
    }
</style>
