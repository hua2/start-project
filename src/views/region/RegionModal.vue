<template>
    <a-modal
            title="Title"
            :visible="visible"
            @ok="handleOk"
            :confirmLoading="confirmLoading"
            @cancel="handleCancel"
    >
        <a-form
                :form="form"
        >
            <a-form-item
                    label="名称"
            >
                <a-input
                        v-decorator="[
          'regionName',
          {rules: [{ required: true, message: 'Please input your regionName!' }]}
        ]"
                />
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
    export default {
        name: "RegionModal",
        data() {
            return {
                visible: false,
                confirmLoading: false,
                mdl: {}
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
            console.log('form::', this.form)
        },
        created() {

        },
        methods: {
            add() {
                this.visible = true;
                this.update({});
            },
            update(data) {
                this.visible = true;
                this.mdl = Object.assign({}, data);
                this.$nextTick(() => {
                    this.form.setFieldsValue({
                        regionName: this.mdl.regionName
                    })
                })
            },
            close() {
                this.$emit('close');
                this.visible = false
            },
            handleOk() {
                // 触发表单验证
                this.form.validateFields((err, values) => {
                    // 验证表单没错误
                    if (!err) {
                        console.log('form values', values);
                        Object.assign(this.mdl, values);
                        this.confirmLoading = true;
                        if (this.mdl.id) {
                            this.$api.region.updateRegion(this.mdl).then(() => {
                                this.$message.success('更新成功');
                                this.$emit('ok')
                            }).catch(() => {
                                // Do something
                            }).finally(() => {
                                this.confirmLoading = false;
                                this.close()
                            })
                        } else {
                            this.$api.region.addRegion(values).then(() => {
                                this.$message.success('添加成功');
                                this.$emit('ok')
                            }).catch(() => {
                                // Do something
                            }).finally(() => {
                                this.confirmLoading = false;
                                this.close()
                            })
                        }
                    }
                })
            },
            handleCancel() {
                console.log('Clicked cancel button');
                this.close()
            },
        }
    }
</script>

<style scoped>

</style>
