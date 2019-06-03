<template>
    <div>
        <div class="home">
            <h1 class="title">set</h1>
            <p>Setting页面，用于修改用户信息。</p>
        </div>
        <div class="content">
            <a-form
                    :form="form"
                    @submit="handleSubmit"
            >
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
                        label="电子邮箱"
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
        name: "Setting",
        created() {
            this.account();
        },
        data() {
            return {
                form: this.$form.createForm(this),
                language: [{name: '中文（简体）', select: 'zh-cn'}, {name: 'English', select: 'en'}],
                accountData:{}

            }
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.$api.user.updateUser({
                            firstName: values.firstName,
                            lastName: values.lastName,
                            email: values.email,
                            langKey: values.langKey,
                            login: this.accountData.login,
                            authorities: this.accountData.authorities,
                            imageUrl: this.accountData.imageUrl,
                        }).then(() => {
                            // 执行某些操作
                            this.$message.success('设置保存成功!');
                        })
                    }
                });
            },
            account() {
                this.$api.user.getAccount().then((res) => {
                    const data =res.data;
                    this.accountData = data; //存放所有数据
                    const {form:{setFieldsValue}} = this;
                    this.$nextTick(() =>{ //set到form表
                        setFieldsValue({firstName: data.firstName,lastName: data.lastName,email: data.email,langKey: data.langKey})
                    });
                    }
                )
            }
        }
    }

</script>

<style scoped>

</style>