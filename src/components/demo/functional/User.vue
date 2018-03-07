<template>
    <div class="organizational">
        <n3-tabs @change="change" :value="1">
            <n3-tab header="用户管理">
                <div class="query">
                    <n3-form ref='form-query'>
                        <n3-form-item
                                label="用户ID:"
                                :label-col="3">
                            <n3-input
                                    name="nameId"
                                    v-model="model.nameId"
                                    :rules="[{type:'required'}]"
                                    :custom-validate="nameValidate"
                                    placeholder="请输入用户ID"
                            >
                            </n3-input>
                        </n3-form-item>
                        <n3-form-item
                                class="right"
                                label="所在组织:"
                                :label-col="3">
                            <n3-select v-model="model.gruop" placeholder="全部" class="select">
                                <n3-option value="Apple">Apple</n3-option>
                                <n3-option value="Banana">Banana</n3-option>
                                <n3-option value="Cherry">Cherry</n3-option>
                                <n3-option value="Orange">Orange</n3-option>
                                <n3-option value="Grape">Grape</n3-option>
                            </n3-select>
                        </n3-form-item>
                        <n3-form-item
                                label="用户名:"
                                :label-col="3">
                            <n3-input
                                    name="username"
                                    v-model="model.username"
                                    :rules="[{type:'required'}]"
                                    :custom-validate="nameValidate"
                                    placeholder="请输入用户名"
                            >
                            </n3-input>
                        </n3-form-item>
                        <n3-form-item
                                class="right"
                                label="角色筛选:"
                                :label-col="3">
                            <n3-select v-model="model.user" placeholder="全部" class="select">
                                <n3-option value="Apple">Apple</n3-option>
                                <n3-option value="Banana">Banana</n3-option>
                                <n3-option value="Cherry">Cherry</n3-option>
                                <n3-option value="Orange">Orange</n3-option>
                                <n3-option value="Grape">Grape</n3-option>
                            </n3-select>
                        </n3-form-item>
                        <n3-form-item
                                label="注册日期:"
                                :label-col="3"
                                class="date">
                            <n3-datepicker
                                    v-model="model.starttime"
                                    format="yyyy-MM-dd"
                                    width="150px">
                            </n3-datepicker>
                            -
                            <n3-datepicker
                                    v-model="model.endtime"
                                    format="yyyy-MM-dd"
                                    width="150px">
                            </n3-datepicker>
                        </n3-form-item>
                        <n3-form-item
                                class="right"
                                label="启动状态:"
                                :label-col="3">
                            <n3-switch ontext="启用" offtext="禁用" @change="toggle" v-model="model.status">

                            </n3-switch>
                        </n3-form-item>
                        <n3-form-item class="clear">
                        </n3-form-item>
                        <n3-form-item>
                            <n3-button type="primary" @click.native="submit">提交</n3-button>
                            <n3-button class="reset">重置</n3-button>
                        </n3-form-item>
                    </n3-form>

                </div>

                <div class="table">
                    <div class="tableInfo">
                        <n3-container fluid>
                            <n3-row>
                                <n3-column :col="4" class="context">
                                    共搜索出 126 条结果

                                </n3-column>
                                <n3-column :col="8" class="context text-right">
                                    <n3-button type="primary">
                                        <n3-icon type="folder-open-o"></n3-icon>
                                        导出用户
                                    </n3-button>
                                    <n3-button type="primary">
                                        <n3-icon type="plus-circle"></n3-icon>
                                        新增用户
                                    </n3-button>
                                </n3-column>
                            </n3-row>
                        </n3-container>
                    </div>
                    <n3-data-table
                            id="table"
                            height="400px"
                            :selection="selection"
                            :source="source"
                            :columns="columns"
                            :select-col="false"
                            :search="false"
                            :pagination="pagination"
                            responsive
                    >
                    </n3-data-table>
                </div>
            </n3-tab>
            <n3-tab header="用户添加/修改">
                <div class="modify">

                    <n3-form ref='modify'>
                        <n3-form-item
                                label="用户ID:"
                                :label-col="3">
                            <n3-input
                                    name="userId"
                                    :disabled="true"
                                    v-model="modify.userId"
                                    placeholder="请输入用户ID"
                            >
                            </n3-input>
                        </n3-form-item>
                        <n3-form-item
                                need
                                label="用户名:"
                                :label-col="3">
                            <n3-input
                                    name="username"
                                    :rules="[{type:'required'}]"
                                    :custom-validate="nameValidate"
                                    placeholder="请输入用户名"
                            >
                            </n3-input>
                        </n3-form-item>
                        <n3-form-item
                                need
                                label="姓名:"
                                :label-col="3">
                            <n3-input
                                    name="nameId"
                                    v-model="modify.name"
                                    :rules="[{type:'required'}]"
                                    :custom-validate="nameValidate"
                                    placeholder="请输入姓名"
                            >
                            </n3-input>
                        </n3-form-item>
                        <n3-form-item
                                need
                                label="所在组织:"
                                :label-col="3">
                            <n3-select v-model="modify.gruop" placeholder="全部" class="select">
                                <n3-option value="Apple">Apple</n3-option>
                                <n3-option value="Banana">Banana</n3-option>
                                <n3-option value="Cherry">Cherry</n3-option>
                                <n3-option value="Orange">Orange</n3-option>
                                <n3-option value="Grape">Grape</n3-option>
                            </n3-select>
                        </n3-form-item>
                        <n3-form-item
                                need
                                label="选择角色:"
                                :label-col="3">
                            <n3-select v-model="modify.user" placeholder="全部" class="select">
                                <n3-option value="Apple">Apple</n3-option>
                                <n3-option value="Banana">Banana</n3-option>
                                <n3-option value="Cherry">Cherry</n3-option>
                                <n3-option value="Orange">Orange</n3-option>
                                <n3-option value="Grape">Grape</n3-option>
                            </n3-select>
                        </n3-form-item>
                        <n3-form-item
                                need
                                label="启动状态:"
                                :label-col="3">
                            <n3-switch ontext="启用" offtext="禁用" @change="toggle" v-model="modify.status" class="toggle">

                            </n3-switch>
                        </n3-form-item>
                        <n3-form-item>
                            <n3-button type="primary" @click.native="submitModify">提交</n3-button>
                            <n3-button class="cancel">取消</n3-button>
                        </n3-form-item>
                    </n3-form>
                </div>
            </n3-tab>
        </n3-tabs>
    </div>
</template>

<script>
    export default {
        name: 'User',
        data () {
            return {
                modify: {
                    userId: "43652",
                    gruop: "",
                    username: "",
                    name:"",
                    user: "",
                    starttime: "",
                    endtime: "",
                    status: true,
                },
                model: {
                    userId: "",
                    gruop: "",
                    username: "",
                    user: "",
                    starttime: "",
                    endtime: "",
                    status: true,
                },
                pagination: {
                    current: 1,
                    total: 4,
                    pagesize: 10
                },
                selection: {
                    checkRows: [],
                    onSelect (record, checked, checkRows) {
                        console.log(record);
                    },
                    onSelectAll (checked, checkRows, changeRows) {
                    },
                    getCheckboxProps (record) {
                        return {
                            checked: false,
                            disabled: false
                        }
                    }
                },
                columns: [
                    {
                        title: '序号',
                        dataIndex: 'num',
                        width: '50px',
                        render: (text, record, index) => {
                            return `<div>{{'${index + 1}'}}</div>`
                        }
                    },
                    {
                        title: '用户ID',
                        dataIndex: 'UserId',
                        width: '100px',
                    }, {
                        title: '用户名',
                        dataIndex: 'Username',
                        width: '160px',
                        render: (text, record, index) => {
                            return `<div>{{'${text}'}}</div>`
                        }
                    }, {
                        title: '姓名',
                        dataIndex: 'Name',
                        width: '100px',
                        render: (text, record, index) => {
                            return `${text}`
                        }
                    }, {
                        title: '角色',
                        dataIndex: 'Role',
                        width: '100px',
                        render: text => {
                            return text
                        }
                    },
                    {
                        title: '组织',
                        dataIndex: 'Organization',
                        width: '200px'
                    },
                    {
                        title: '状态',
                        dataIndex: 'Status',
                        width: '50px',
                        render: (text) => {
                            if (text == 1) {
                                return `<span>启用</span>`
                            }
                            return `<span style="color: red;">停用</span>`
                        }
                    }, {
                        title: '操作',
                        dataIndex: 'queryRecordId',
                        width: '120px',
                        render: (text, record, index) => {
                            let type = 'primary'
                            if (!record.queryResult) {
                                type = 'warning'
                            }
                            return `<n3-label type="${type}">详情</n3-label>`
                        }
                    }
                ],
                source: [
                    {
                        UserId: "00010",
                        Username: "fang11",
                        Name: "总管理员",
                        Role: "总管理员",
                        Organization: "中国汽车研究中心",
                        Status: 1,
                    },
                    {
                        UserId: "00010",
                        Username: "fang11",
                        Name: "总管理员",
                        Role: "总管理员",
                        Organization: "中国汽车研究中心",
                        Status: 1,
                    },
                    {
                        UserId: "00010",
                        Username: "fang11",
                        Name: "总管理员",
                        Role: "总管理员",
                        Organization: "中国汽车研究中心",
                        Status: 1,
                    },
                    {
                        UserId: "00010",
                        Username: "fang11",
                        Name: "总管理员",
                        Role: "总管理员",
                        Organization: "中国汽车研究中心",
                        Status: 1,
                    },
                ]
            }
        },
        methods: {
            change(){

            },
            submitModify(){
              this.$refs.modify.validateFields(result=>{
                  console.log(result);
              })
            },
            nameValidate (val) {
                if (/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(val)) {
                    return {
                        validStatus: 'success'
                    }
                } else {
                    return {
                        validStatus: 'error',
                        tips: '请输入中文名'
                    }
                }
            },
            toggle(){

            }
        },
    }
</script>
<style lang="less">
    .organizational {
        .n3-btn-group > .n3-btn, .n3-dropdown-menu > li > a {
            min-width: 220px
        }
        .n3-btn {
            width: 150px;
        }
        .query {
            margin-top: 15px;
            border-bottom: 1px solid #cccccc;
            .n3-form-group {
                width: 50%;
            }
            .clear {
                min-height: 22px;
            }

            .reset {
                background: #999999;
                margin-left: 15px;
                color: #ffffff;
            }
        }
        .table {
            margin-top: 10px;
            height: 30px;
            line-height: 30px;
        }
        .modify {
            margin-top: 15px;
            .n3-input-con,.select,.toggle{
                padding-left: 50px;
            }
            .n3-dropdown-menu{
                margin-left: 50px;
            }
            .cancel{
                margin-left: 50px;
            }
        }
    }
</style>
