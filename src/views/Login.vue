
<template>
    <div style="width: 500px;margin: auto">
        <a-tabs defaultActiveKey="1" @change="callback">
            <a-tab-pane tab="账号密码登录" key="1">
                <a-form
                            id="components-form-demo-normal-login"
                            :form="form"
                            class="login-form"
                            @submit="handleSubmit"
                    >
                        <a-form-item>
                            <a-input
                                    v-decorator="[
          'userName',
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
          'remember',
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
                            Or <a href="">
                            register now!
                        </a>
                        </a-form-item>
                    </a-form>
            </a-tab-pane>
            <a-tab-pane tab="手机号登录" key="2" forceRender>
                <a-form
                        id="components-form-demo-normal-login"
                        :form="form"
                        class="login-form"
                        @submit="handleSubmit"
                >
                    <a-form-item>
                        <a-input
                                v-decorator="[
          'userName',
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
          'remember',
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
                        Or <a href="">
                        register now!
                    </a>
                    </a-form-item>
                </a-form>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>
<script>
    export default {
        data () {
            return {
            }
        },
        beforeCreate () {
            this.form = this.$form.createForm(this);
        },
        methods: {
            callback (key) {
                console.log(key)
            },
            handleSubmit (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
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
