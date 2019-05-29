<template>
    <div>
        <div class="home">
            <h1 class="title">UserManage</h1>
            <p>UserManage页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
        </div>
        <div class="content">
            <div>
                <a-button type="primary" @click="addClick">
                    <a-icon type="plus"/>新建</a-button>
                <UserModal ref="modal" @ok="handleOk"/>
            </div>

            <a-table :columns="columns" :dataSource="data" rowKey="id">
                <div slot="action" slot-scope="text">
                    <a-popconfirm title="Are you sure delete this task?" @confirm="deleteClick(text.login)" okText="Yes"
                                  cancelText="No">
                        <a href="javascript:">Delete</a>
                    </a-popconfirm>
                    <a-divider type="vertical"/>
                    <a @click="updateClick(text)">Update</a>
                </div>
            </a-table>
        </div>

    </div>

</template>
<script>
    import UserModal from "./UserModal";

    const columns = [{
        title: 'ID',
        dataIndex: 'id',
    }, {
        title: '登录',
        dataIndex: 'login',
    }, {
        title: '邮箱',
        dataIndex: 'email',
    },  {
        title: '语言',
        dataIndex: 'langKey',
    },  {
        title: '角色',
        dataIndex: 'authorities',
    }, {
        title: '创建时间',
        dataIndex: 'createdDate',
    },  {
        title: '修改人',
        dataIndex: 'lastModifiedBy',
    },   {
        title: '最后修改时间',
        dataIndex: 'lastModifiedDate',
    },  {
        title: 'Action',
        scopedSlots: {customRender: 'action'},
    }];



    export default {
        name: 'userManage',
        components: {UserModal},
        data() {
            return {
                data: [],
                columns,
                visible: false,
            }
        },
        created() {
            this.userData();
        },
        methods: {
            userData() {
                this.$api.userManage.getUsers().then(res => {
                    this.data = res.data;
                })
            },
            deleteClick(key) {
                this.$api.userManage.deleteUsers(key).then(() => {
                    this.userData();
                })
            },
            updateClick(data) {
                this.$refs.modal.update(data);
            },
            addClick() {
                this.$refs.modal.add();
            },
            handleOk() {
                this.userData();
            }
        }
    }
</script>

<style scoped>
</style>