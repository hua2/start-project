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
            <a-form-item
                    label="状态"
            >
                <a-select
                        v-decorator="[
          'status',
          {rules: [{ required: true, message: 'Please select your status!' }]}
        ]"
                        placeholder="Select a option and change input text above"
                >
                    <a-select-option v-for="(x,index) in status" :key="index"  :value="x.select">
                        {{x.name}}
                    </a-select-option>
                </a-select>
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
                status: [{name:'已发布',select:'RELEASING'} ,
                    {name:'暂停中',select:'PAUSING'} ,
                    {name:'工作中',select:'WORKING'},
                    {name:'已完成',select:'ENDING'}]
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
                                status: values.status,
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
                                status: values.status,
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
                this.update({title: '', description: '',id:undefined,status: ''})
            },
            update(data){
                this.visible = true;
                this.id = data.id;
                this.form.setFieldsValue({title: data.title, description: data.description,status: data.status,})
            }
        }
    }
</script>

<style scoped>

</style>