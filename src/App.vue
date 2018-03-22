<template>
    <div id="app" :class="system.theme">
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
            system: 'system',
            })
    }
</script>

<style>
    .nav-dis {
        margin: 20px;
    }
</style>
