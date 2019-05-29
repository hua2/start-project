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
                    label="登录"
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
                    label="语言"
            >
                <a-select
                        v-decorator="[
          'langKey',
          {rules: [{ required: true, message: 'Please select your langKey!' }]}
        ]"
                        placeholder="Select a option and change input text above"
                >
                    <a-select-option v-for="(x,index) in language" :key="index" :value="x.select">
                        {{x.name}}
                    </a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item
            >
                <a-select
                    label="角色"
                        v-decorator="[
          'authorities',
          {rules: [{ required: true, message: 'Please select your departmentName!' }]}
        ]"
                        placeholder="Select a option and change input text above"
                >
                    <a-select-option v-for="(x,index) in roles" :key="index">
                        {{x}}
                    </a-select-option>
                </a-select>
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
    export default {
        name: "UserModal",
        data() {
            return {
                visible: false,
                confirmLoading: false,
                id: undefined,
                language:[{name:'中文（简体）',select:'zh-cn'},{name: 'English',select:'en'}],
                roles:['ROLE_ADMIN', 'ROLE_USER']
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleOk() {
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                        this.confirmLoading = true;
                        if (!this.id) {
                            this.$api.userManage.createUsers({
                                login: values.login,
                                firstName: values.firstName,
                                lastName: values.lastName,
                                email: values.email,
                                langKey: values.langKey,
                                authorities: values.authorities,
                            }).then(() => {
                                this.ok();
                                this.$message.success('创建成功');
                            }).catch(() => {
                                this.confirmLoading = false;
                            });
                        } else {
                            this.$api.userManage.updateUsers({
                                login: values.login,
                                firstName: values.firstName,
                                lastName: values.lastName,
                                email: values.email,
                                langKey: values.langKey,
                                authorities: values.authorities,
                                id: this.id
                            }).then(() => {
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
                console.log('Clicked cancel button');
                this.visible = false
            },
            add() {
                this.update({
                    id: undefined,
                    login: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    langKey: '',
                    authorities: '',
                })
            },

            update(data) {
                this.visible = true;
                this.id = data.id;
                this.form.setFieldsValue({
                    login: data.login,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    langKey: data.langKey,
                    authorities: data.authorities
                })
            }
        }
    }
</script>

<style scoped>

</style>