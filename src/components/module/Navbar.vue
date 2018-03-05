<template>
    <div class="navbar">
        <ul>
            <li v-for="(item,index) in items" @click="changeTarget(item,index)" v-bind:class="{'active':item.active}">
                <span unselectable="on" class="noselect">{{item.title}}</span>
                <n3-icon type="times-circle" class="icon" @click.native="removeTarget($event,item.id)"></n3-icon>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'Navbar',
        data () {
            return {
                items: this.$store.state.navbar,
                curRouter:"",
            }
        },
        methods: {
            changeTarget(item, index){
                let that = this
                this.$nextTick(function () {
                    that.items.forEach(function (item) {
                        Vue.set(item, 'active', false);
                    });
                    Vue.set(item, 'active', true);
                    that.curRouter = item.path
                });
                that.$router.push({path: item.path})
            },
            initTarget(){
                let that = this
                that.items.forEach(function (item) {
                    if (item.path === that.$route.path) {
                        Vue.set(item, 'active', true);
                        that.curRouter = item.path
                    } else {
                        Vue.set(item, 'active', false);
                    }
                });
            },
            removeTarget(event,id){
                event.cancelBubble = true;
                if(this.$store.state.navbar.length > 1){
                    if(this.curRouter !== this.$route.path){
                        if(parseInt(id) === 0){
                            this.$router.push({path:this.$store.state.navbar[parseInt(id)+1].path})
                        }else{
                            this.$router.push({path:this.$store.state.navbar[parseInt(id)-1].path})
                        }
                    }else{
                        if(parseInt(id) === 0){
                            this.$router.push({path:this.$store.state.navbar[parseInt(id)+1].path})
                        }else{
                            this.$router.push({path:this.$store.state.navbar[parseInt(id)-1].path})
                        }
                    }
                    this.$store.commit('removeNavbar',id)
                }

            }

        },
        created(){
        },
        mounted () {
            this.initTarget()
        },
        watch: {
            '$route'(to, from){
                this.initTarget()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .navbar {
        ul {
            clear: both;
            height: 31px;
            line-height: 30px;
            box-sizing: border-box;
            border-bottom: 1px solid #cccccc;
            li {
                float: left;
                padding: 0px 20px;
                border-top-left-radius: 7px;
                border-top-right-radius: 7px;
                margin-left: 10px;
                border: 1px solid #cccccc;
                border-bottom: 0;
                .icon {
                    margin-left: 5px;
                }
                .icon:hover {
                    color: #207ecc;
                }
            }
            li:hover {
                cursor: pointer
            }
            .active {
                background-color: #00a0e9;
                color: #ffffff;
            }
        }
    }
</style>
