<template>
    <div style="width: 400px;height:100%;margin: 0 auto;display: flex; flex-direction:column;justify-content:center">
        <h1 style="text-align: center">HUA起飞项目</h1>
        <a-form
                id="components-form-demo-normal-login"
                :form="form"
                class="login-form"
                @submit="handleSubmit"
        >
            <a-form-item>
                <a-input
                        v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
                        placeholder="Username"
                >
                    <a-icon
                            slot="prefix"
                            type="user"
                            style="color: rgba(0,0,0,.25)"
                    />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
                        type="password"
                        placeholder="Password"
                >
                    <a-icon
                            slot="prefix"
                            type="lock"
                            style="color: rgba(0,0,0,.25)"
                    />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-checkbox
                        v-decorator="[
          'rememberMe',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
                >
                    Remember me
                </a-checkbox>
                <a
                        class="login-form-forgot"
                        href=""
                >
                    Forgot password
                </a>
                <a-button
                        type="primary"
                        html-type="submit"
                        class="login-form-button"
                >
                    Log in
                </a-button>
                Or
                <router-link to="/session/register"> register now!</router-link>
            </a-form-item>
        </a-form>
    </div>
</template>
<script>

    export default {
        data() {
            return {}
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                        this.$api.user.login(values
                        ).then(res => {
                            // 执行某些操作
                            if (values.rememberMe) {
                                localStorage.setItem('token', res.data.id_token);
                            } else {
                                sessionStorage.setItem('token', res.data.id_token)
                            }
                            this.$router.push('/home');
                            console.log(res)
                        }).catch(() => {
                            this.$message.error('用户名或密码错误！');
                        })
                    }
                });
            },

        },
    }
</script>
<style>
    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }

    #components-form-demo-normal-login .login-form-forgot {
        float: right;
    }

    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }
</style>
