<template>
    <div>
        <div class="home">
            <h1 class="title">info</h1>
            <p>Info页面，用于修改用户登录密码。</p>
        </div>
        <div class="content">
            <a-form
                    :form="form"
                    @submit="handleSubmit"
            >
                <a-form-item
                        label="当前密码"
                >
                    <a-input
                            v-decorator="[
          'currentPassword',
          {rules: [{ required: true, message: 'Please input your currentPassword!' }]}
        ]"
                            type="password"
                    />
                </a-form-item>
                <a-form-item
                        label="新密码"
                >
                    <a-input
                            v-decorator="[
          'newPassword',
          {rules: [{ required: true, message: 'Please input your newPassword!' }]}
        ]"
                            type="password"
                    />
                </a-form-item>
                <a-form-item
                        label="新密码确认"
                >
                    <a-input
                            v-decorator="[
          'conPassword',
          {rules: [{ required: true, message: 'Please confirm your password!' }]}
        ]"
                            type="password"
                    />
                </a-form-item>
                <a-form-item>
                    <a-button
                            type="primary"
                            html-type="submit"
                    >
                        保存
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Info",
        data() {
            return {
                form: this.$form.createForm(this),
            }
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err && values.newPassword===values.conPassword) {
                        this.$api.user.changePwd({
                            currentPassword: values.currentPassword,
                            newPassword: values.newPassword
                        }).then(() => {
                            // 执行某些操作
                            this.$message.success('修改成功');
                        })
                    }else {
                        this.$message.error('您输入的密码和确认密码不匹配!');
                    }
                });
            }
        }
    }

</script>

<style scoped>

</style>