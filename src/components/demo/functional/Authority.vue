<template>
    <div class="authority">
        <div class="query">
            <n3-form ref='query'>
                <n3-form-item
                        label="所在组织:"
                        :label-col="2">
                    <n3-select v-model="model.gruop" placeholder="全部" class="select">
                        <n3-option value="Apple">Apple</n3-option>
                        <n3-option value="Banana">Banana</n3-option>
                        <n3-option value="Cherry">Cherry</n3-option>
                        <n3-option value="Orange">Orange</n3-option>
                        <n3-option value="Grape">Grape</n3-option>
                    </n3-select>
                </n3-form-item>
                <n3-form-item
                        label="选择角色:"
                        :label-col="2">
                    <n3-select v-model="model.user" placeholder="全部" class="select">
                        <n3-option value="Apple">Apple</n3-option>
                        <n3-option value="Banana">Banana</n3-option>
                        <n3-option value="Cherry">Cherry</n3-option>
                        <n3-option value="Orange">Orange</n3-option>
                        <n3-option value="Grape">Grape</n3-option>
                    </n3-select>
                </n3-form-item>
            </n3-form>
        </div>
        <div class="allocation">
            <n3-card class="card">
                <p>角色: 总管理员</p>
                <p>权限配置</p>
                <n3-tree :data="regions1" :props="props" show-checkbox @check-change="handleCheckChange" leaf-icon="paperclip" default-expand-all></n3-tree>
                <n3-tree :data="regions2" :props="props" show-checkbox @check-change="handleCheckChange" leaf-icon="paperclip" default-expand-all></n3-tree>
                <n3-button type="primary" @click.native="save" class="btn-save" :disabled="saveing">
                    保存
                </n3-button>

            </n3-card>
            <p v-show="saveing"> <n3-loading></n3-loading></p>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'User',
        data () {
            return {
                saveing:false,
                model: {
                    gruop: "",
                    user: "",
                },
                regions1: [{
                    'name': '管理员管理',
                    'zones': [
                        {
                            'name': '用户管理',
                            'zones': [
                                {
                                    'name': '用户添加/修改'
                                }
                            ]
                        },
                        {
                            'name': '角色管理',
                        },
                        {
                            'name': '组织管理',
                        },
                        {
                            'name': '权限管理',
                        },
                    ]
                },],
                regions2:[
                    {
                        'name': '客户管理',
                        'zones': [
                            {
                                'name': '客户管理'
                            }
                        ]
                    }
                ],
                props: {
                    label: 'name',
                    children: 'zones'
                },
                count: 1
            }
        },
        methods: {
            handleCheckChange(data) {

            },
            save(){
                let that = this
                that.saveing = true
                setTimeout(()=>{
                    that.saveing = false
                    this.n3Alert({
                        content: '保存成功',
                        type: 'success',
                        placement: 'top-right',
                        duration: 2000,
                        width:'200px' // 内容不确定，建议设置width
                    })
                },1000)

            },
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{name: '/root'}, {name: '/home'}])
                }
                if (node.level > 3) return resolve([])

                var hasChild
                if (node.data.name === '/root') {
                    hasChild = true
                } else if (node.data.name === '/home') {
                    hasChild = false
                } else {
                    hasChild = Math.random() > 0.5
                }

                setTimeout(() => {
                    var data
                    if (hasChild) {
                        data = [{
                            name: '新建文件夹' + this.count++
                        }, {
                            name: '新建文件夹' + this.count++
                        }]
                    } else {
                        data = []
                    }

                    resolve(data)
                }, 500)
            }
        },
    }
</script>
<style lang="less">
    .authority {
        .n3-form-horizontal .n3-control-label {
            text-align: center;
        }
        .query {
            padding-bottom: 20px;
            border-bottom: 1px solid #ccc;
        }
        .allocation {
            margin-top: 15px;
            .card {
                padding: 20px;
                p {
                    margin-top: 15px;
                }
                .btn-save{
                    margin-top: 15px;
                }
            }
            .n3-tree{
                margin-bottom: 15px;
                border-bottom: 1px solid #999;
            }

        }
    }
</style>
