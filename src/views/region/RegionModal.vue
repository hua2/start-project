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
                    label="地区名字"
                    :label-col="{ span: 8 }"
                    :wrapper-col="{ span: 12 }"
            >
                <a-input
                        v-decorator="[
          'C',
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
                id: undefined,
                form: this.$form.createForm(this)
            }
        },
        methods: {
            handleOk() {
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                        this.confirmLoading = true;
                        if (!this.id) {
                            this.$api.region.createRegion({regionName: values.regionName}).then(() => {
                                this.ok();
                                this.$message.success('创建成功');
                            }).catch(() => {
                                this.confirmLoading = false;
                            });
                        } else {
                            this.$api.region.updateRegion({
                                regionName: values.regionName,
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
                this.update({id: undefined, regionName: ''})
            },

            update(data) {
                this.visible = true;
                this.id = data.id;
                const {form:{setFieldsValue}} = this;
                this.$nextTick(() =>{
                    setFieldsValue({regionName: data.regionName})
                });
            }
        }
    }
</script>

<style scoped>

</style>