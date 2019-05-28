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
                    label="登录名"
            >
                <a-input
                        v-decorator="[
          'login',
          {rules: [{ required: true, message: 'Please input your login!' }]}
        ]"
                />
            </a-form-item>
            <a-form-item
                    label="名字"
            >
                <a-input
                        v-decorator="[
          'firstName',
          {rules: [{ required: true, message: 'Please input your firstName!' }]}
        ]"
                />
            </a-form-item>
            <a-form-item
                    label="姓氏"
            >
                <a-input
                        v-decorator="[
          'lastName',
          {rules: [{ required: true, message: 'Please input your lastName!' }]}
        ]"
                />
            </a-form-item>
            <a-form-item
                    label="邮箱"
            >
                <a-input
                        v-decorator="[
          'email',
          {rules: [{ required: true, message: 'Please input your email!' }]}
        ]"
                />
            </a-form-item>
            <a-form-item
                    label="联系方式"
            >
                <a-input
                        v-decorator="[
          'phoneNumber',
          {rules: [{ required: true, message: 'Please input your phoneNumber!' }]}
        ]"
                />
            </a-form-item>
            <a-form-item
                    label="薪资"
            >
                <a-input
                        v-decorator="[
          'salary',
          {rules: [{ required: true, message: 'Please input your salary!' }]}
        ]"
                />
            </a-form-item>
            <a-form-item
                    label="团队"
            >
                <a-select
                        v-decorator="[
          'departmentName',
          {rules: [{ required: true, message: 'Please select your departmentName!' }]}
        ]"
                        placeholder="Select a option and change input text above"
                >
                    <a-select-option v-for="(x,index) in depart" :key="index" :value="x.id">
                        {{x.departmentName}}
                    </a-select-option>
                </a-select>
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
    export default {
        name: "EmployModal",
        data(){
            return{
                visible: false,
                confirmLoading: false,
                id: undefined,
                depart:[],
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        created() {
            this.departmentData();
        },
        methods:{
            handleOk() {
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                        this.confirmLoading = true;
                        if (!this.id) {
                            this.$api.employ.createEmployee({
                                login: values.login,
                                firstName: values.firstName,
                                lastName: values.lastName,
                                email: values.email,
                                phoneNumber: values.phoneNumber,
                                salary:values.salary,
                                departmentName: values.departmentName}).then(() => {
                                this.ok();
                                this.$message.success('创建成功');
                            }).catch(() => {
                                this.confirmLoading = false;
                            });
                        } else {
                            this.$api.employ.updateEmployee({
                                login: values.login,
                                firstName: values.firstName,
                                lastName: values.lastName,
                                email: values.email,
                                phoneNumber: values.phoneNumber,
                                salary:values.salary,
                                departmentName: values.departmentName,
                                id: this.id}).then(() => {
                                this.ok();
                                this.$message.success('修改成功');
                            }).catch(() => {
                                this.confirmLoading = false;
                            })
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
            add() {
                this.update({id: undefined, login: '', firstName: '', lastName: '', email: '', phoneNumber: '', salary:'',departmentName:''})
            },
            update(data) {
                this.visible = true;
                this.id = data.id;
                this.form.setFieldsValue({
                    login: data.login, firstName: data.firstName,
                    lastName: data.lastName, email: data.email,
                    phoneNumber: data.phoneNumber, salary:data.salary,departmentName:data.departmentName})
            },
            departmentData(){
                this.$api.department.getDepartments().then(res => {
                    this.depart= res.data;
                })
            },


        }
    }
</script>

<style scoped>

</style>