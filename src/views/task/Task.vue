<template>
    <div>
        <div class="home">
            <h1 class="title">Task</h1>
            <p>Task页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
        </div>
        <div class="content">
            <div>
                <a-button type="primary" @click="addClick">
                    <a-icon type="plus"/>新建</a-button>
                <TaskModal ref="modal" @ok="handleOk"/>

            </div>

            <a-table :columns="columns"
                     :dataSource="data"
                     rowKey="id"
                     :pagination="pagination"
                     :loading="loading"
                     @change="handleTableChange"
            >
                <div slot="action" slot-scope="text">
                    <a-popconfirm title="Are you sure delete this task?" @confirm="deleteClick(text.id)" okText="Yes"
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
    import TaskModal from "./TaskModal";
    export default {
        name: "task",
        components: {TaskModal},
        data() {
            return {
                columns,
                data: [],
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
            this.taskData();
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
                this.taskData();
            },
            taskData () {
                this.loading = true;
                this.$api.task.getTasks({
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
            deleteClick(key) {
                this.$api.task.deleteTask(key).then(() => {
                    this.taskData();
                })
            },
            updateClick(data) {
                this.$refs.modal.update(data);
            },
            handleOk(){
                this.taskData();
            }

        }
    }
    const columns = [{
        title: 'ID',
        sorter: true,
        dataIndex: 'id',
    }, {
        title: '标题',
        sorter: true,
        dataIndex: 'title',
    }, {
        title: '介绍',
        sorter: true,
        dataIndex: 'description',
    }, {
        title: '状态',
        sorter: true,
        dataIndex: 'status',
    }, {
        title: 'Action',
        scopedSlots: {customRender: 'action'},
    }];
</script>

<style scoped>

</style>