<template>
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
          'description',
          {rules: [{ required: true, message: 'Please input your description!' }]}
        ]"
                />
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
    export default {
        name: "TaskModal",
        data(){
            return{
                visible: false,
                confirmLoading: false,
                id: undefined,
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        methods:{
            handleOk() {
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                        this.confirmLoading = true;
                        if (!this.id) {
                            this.$api.task.createTask({
                                title: values.title,
                                description: values.description,
                            }).then(() => {
                                this.ok();
                                this.$message.success('创建成功');
                            }).catch(() => {
                                this.confirmLoading = false;
                            });
                        } else {
                            this.$api.task.updateTask({
                                title: values.title,
                                description: values.description,
                                id:this.id,
                            }).then(() => {
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
                this.visible = false
            },
            add(){
                this.update({title: '', description: '',id:undefined})
            },
            update(data){
                this.visible = true;
                this.id = data.id;
                this.form.setFieldsValue({title: data.title, description: data.description})
            }
        }
    }
</script>

<style scoped>

</style>