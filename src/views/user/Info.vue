<template>
    <div >
        <a-form
                :form="form"
                @submit="handleSubmit"
                v-if="show"
        >
            <a-form-item
                    label="当前密码"
            >
                <a-input
                        v-decorator="[
          'title',
          {rules: [{ required: true, message: '您的当前密码' }]}
        ]"
                />
            </a-form-item>
            <a-form-item
                    label="新密码"
            >
                <a-input
                        v-decorator="[
          'description',
          {rules: [{ required: true, message: '您的新密码' }]}
        ]"
                />
            </a-form-item>
            <a-form-item
                    label="新密码确认"
            >
                <a-input
                        v-decorator="[
          'description',
          {rules: [{ required: true, message: '确认您的新密码' }]}
        ]"
                />
            </a-form-item>
            <a-form-item v-bind="tailFormItemLayout">
                <a-button
                        type="primary"
                        html-type="submit"
                >
                    保存
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    export default {
        name: "Info",
        data(){
            return{
                show:false
            }
        },
        methods: {
            updatePwd() {
                this.show=true;
            },
            handleSubmit(){

            }
        }
    }

</script>

<style scoped>

</style>