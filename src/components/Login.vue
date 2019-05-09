<template>
    <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
    >
        <a-form-item>
            <div class="modal-header">
                <h4 class="modal-title">登录</h4>
                <button class="close" type="button"><span aria-hidden="true">x</span></button>
            </div>

        </a-form-item>
            <a-form-item  label="账号">
                <a-input
                        v-decorator="[
'userName',
  { rules: [{ required: true, message: '请输入用户名!' }] }
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

            <a-form-item label="密码" >
                <a-input
                        v-decorator="[
'password',
  {
    rules: [{
      required: true, message: '请输入密码!',
    }, {
      validator: validateToNextPassword,
    }],
  }
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
                    自动登录
                </a-checkbox>
                <a
                        class="login-form-forgot"
                        href=""
                >
                    忘记密码
                </a>
                <a-button
                        type="primary"
                        html-type="submit"
                        class="login-form-button"
                >
                    登录
                </a-button>
                Or <a href="">
                立即注册
            </a>
            </a-form-item>
    </a-form>
</template>

<script>

    export default {
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
        },
    };
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

    .ant-form {
        width: 500px !important;
        margin: 0 auto !important;
        background: #EEE !important;
        border-radius: 10px !important;
        padding: 30px !important;
    }

    .modal-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 2px;
        border-bottom: 1px solid #dee2e6;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        font-size: 20px;
    }

    .modal-title {
        margin-bottom: 0;
        line-height: 1.5;
    }

    .close {
        float: right;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        opacity: .5;
    }

    .modal-header .close {
        padding: 1rem;
        margin: -1rem -1rem -1rem auto;
    }

    button.close {
        padding: 0;
        background-color: transparent;
        border: 0;
        appearance: none;
    }
    .ant-input-affix-wrapper{
        width: 66%!important;
        left: 50%!important;
        transform: translate(-50%)!important;
    }
    .has-error .ant-form-explain{
        transform: translate(18%)!important;
    }
    .ant-form-item-label label{
        margin-left: 75px!important;
        font-size: 18px!important;
    }
    .ant-form-item:nth-child(4){
        width: 50%!important;
        margin: 0 auto!important;
    }

</style>