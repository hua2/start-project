<template>
    <div>
        <div class="home">
            <h1 class="title">Task</h1>
            <p>Task页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
        </div>
        <div class="content">
            <div>
                <a-button type="primary"  @click="addClick">
                    <a-icon type="plus"/>
                    新建
                </a-button>
                <a-modal
                        :title="!id?'添加':'修改'"
                        :visible="visible"
                        @ok="handleOk"
                        :confirmLoading="confirmLoading"
                        @cancel="handleCancel"
                >
                    <a-form
                            :form="form"
                    >
                        <a-form-item
                                label="标题"
                        >
                            <a-input
                                    v-decorator="[
          'title',
          {rules: [{ required: true, message: 'Please input your title!' }]}
        ]"
                            />
                        </a-form-item>
                        <a-form-item
                                label="介绍"
                        >
                            <a-input
                                    v-decorator="[
          'jobId',
          {rules: [{ required: true, message: 'Please input your description!' }]}
        ]"
                            />
                        </a-form-item>
                    </a-form>
                </a-modal>
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
    export default {
        name: "task",
        data() {
            return {
                columns,
                data: [],
                visible: false,
                confirmLoading: false,

            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
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
            addClick(data){
                this.$api.task.createTask(data).then(() => {
                    this.visible = true;
                    this.form.setFieldsValue({title: data.title, description: data.description, jobId:data.jobId})
                })
            },
            deleteClick(key) {
                this.$api.task.deleteTask(key).then(() => {
                    this.taskData();
                })
            },

            handleOk() {
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                        this.confirmLoading = true;
                        if (!this.id) {
                            this.$api.task.createTask({
                                title: values.title,
                                description: values.description,
                                jobId:values.jobId}).then(() => {
                                this.ok();
                                this.$message.success('创建成功');
                            }).catch(() => {
                                this.confirmLoading = false;
                            });
                        }
                    }
                });
            },
            ok() {
                this.confirmLoading = false;
                this.visible = false;
                this.$emit('ok')
            },
            handleCancel() {
                console.log('Clicked cancel button');
                this.visible = false
            },

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