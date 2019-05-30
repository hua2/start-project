<template>
    <div>
        <div class="home">
            <h1 class="title">Department</h1>
            <p>Department页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
        </div>
        <div class="content">
            <div>
                <a-button type="primary" @click="addClick()"><a-icon type="plus" />新建</a-button>
                <DepartModal ref="modal" @ok="handleOk"/>
            </div>
            <a-table :columns="columns"
                     :dataSource="data"
                     rowKey="id"
                     :pagination="pagination"
                     :loading="loading"
                     @change="handleTableChange"
            >
                <div slot="action" slot-scope="text">
                    <a-popconfirm title="Are you sure delete this task?" @confirm="deleteClick(text.id)"  okText="Yes" cancelText="No">
                        <a href="javascript:">Delete</a>
                    </a-popconfirm>
                    <a-divider type="vertical" />
                    <a @click="updateClick(text)">Update</a>
                </div>
            </a-table>
        </div>

    </div>
</template>

<script>
    import DepartModal from "./DepartModal";
    const columns = [{
        title: 'id',
        sorter: true,
        dataIndex: 'id',
    }, {
        title: '团队名字',
        sorter: true,
        dataIndex: 'departmentName',
    }, {
        title: '所属国家',
        sorter: true,
        key:'countryId',
        dataIndex: 'countryName',
    }, {
        title: 'Action',
        scopedSlots: {customRender: 'action'},
    }];

    export default {
        name: "Team",
        components: {DepartModal},
        data(){
            return{
                columns,
                data:[],
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
            this.departmentData();
        },
        methods:{
            handleTableChange(pagination, filters, sorter) {
                this.pagination.current = pagination.current;
                this.pagination.pageSize = pagination.pageSize;
                if (sorter.field && sorter.order) {
                    this.pagination.sort = `${sorter.columnKey},${sorter.order}`;
                } else {
                    this.pagination.sort = ''
                }
                this.departmentData();
            },
            departmentData () {
                this.loading = true;
                this.$api.department.getDepartments({
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
            addClick() {
                this.$refs.modal.add();
            },

            updateClick(data) {
                this.$refs.modal.update(data);
            },

            deleteClick(key) {
                this.$api.department.deleteDepartments(key).then(() => {
                    this.departmentData()
                })
            },

            handleOk() {
                this.departmentData();
            }

        }
    }
</script>

<style scoped>

</style>