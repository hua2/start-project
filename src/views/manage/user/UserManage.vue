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

            <a-table :columns="columns"
                     :dataSource="data"
                     rowKey="id"
                     :pagination="pagination"
                     :loading="loading"
                     @change="handleTableChange"
            >
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
        sorter: true,
        dataIndex: 'id',
    }, {
        title: '登录',
        sorter: true,
        dataIndex: 'login',
    }, {
        title: '邮箱',
        sorter: true,
        dataIndex: 'email',
    },  {
        title: '语言',
        sorter: true,
        dataIndex: 'langKey',
    },  {
        title: '角色',
        sorter: true,
        dataIndex: 'authorities',
    }, {
        title: '创建时间',
        sorter: true,
        dataIndex: 'createdDate',
    },  {
        title: '修改人',
        sorter: true,
        dataIndex: 'lastModifiedBy',
    },   {
        title: '最后修改时间',
        sorter: true,
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
                loading: false,
                pagination: {
                    pageSize: 5,
                    current: 1,
                    total: 0,
                    sort: 'id,asc',
                }
            }
        },
        created() {
            this.userData();
        },
        methods: {
            handleTableChange(pagination, filters, sorter) {
                this.pagination.current = pagination.current;
                this.pagination.pageSize = pagination.pageSize;
                if (sorter.field && sorter.order) {
                    this.pagination.sort = `${sorter.columnKey},${sorter.order}`;
                } else {
                    this.pagination.sort = ''
                }
                this.userData();
            },
            userData () {
                this.loading = true;
                this.$api.userManage.getUsers({
                    size: this.pagination.pageSize,
                    page: this.pagination.current - 1,
                    sort: this.pagination.sort.replace(/end/, '')
                }).then(res => {
                    const total = res.headers['x-total-count'];
                    this.pagination.total = Number(total);
                    this.data = res.data;
                    this.loading = false
                }).catch(() => this.loading = false);
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