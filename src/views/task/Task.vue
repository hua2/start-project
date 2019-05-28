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

            <a-table :columns="columns" :dataSource="data" rowKey="id">
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

            }
        },
        created() {
            this.taskData();
        },
        methods: {
            taskData() {
                this.$api.task.getTasks().then(res => {
                    this.data = res.data;
                })
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
        dataIndex: 'id',
    }, {
        title: '标题',
        dataIndex: 'title',
    }, {
        title: '介绍',
        dataIndex: 'description',
    }, {
        title: '状态',
        dataIndex: 'status',
    }, {
        title: 'Action',
        scopedSlots: {customRender: 'action'},
    }];
</script>

<style scoped>

</style>