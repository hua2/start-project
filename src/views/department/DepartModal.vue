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
                    label="团队名字"
            >
                <a-input
                        v-decorator="[
          'departmentName',
          {rules: [{ required: true, message: 'Please input your departmentName!' }]}
        ]"
                />
            </a-form-item>
            <a-form-item
                    label="所属国家"
            >
                <a-select
                        v-decorator="[
          'countryId',
          {rules: [{ required: true, message: 'Please select your countryName!' }]}
        ]"
                        placeholder="Select a option and change input text above"
                >
                    <a-select-option v-for="(x,index) in countries" :key="index" :value="x.id">
                        {{x.countryName}}
                    </a-select-option>
                </a-select>
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
    export default {
        name: "departModal",
        data(){
            return{
                countries:[],
                visible: false,
                confirmLoading: false,
                id: undefined
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        created() {
            this.countryData();
        },
        methods:{
            handleOk() {
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                        this.confirmLoading = true;
                        if (!this.id) {
                            this.$api.department.createDepartments({
                                departmentName: values.departmentName,
                                countryId:values.countryId}).then(() => {
                                this.ok();
                                this.$message.success('创建成功');
                            }).catch(() => {
                                this.confirmLoading = false;
                            });
                        } else {
                            this.$api.department.updateDepartments({
                                departmentName: values.departmentName,
                                countryId: values.countryId,
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
                console.log('Clicked cancel button');
                this.visible = false
            },
            add() {
                this.update({id: undefined, departmentName: '',countryId:''})
            },

            update(data) {
                this.visible = true;
                this.id = data.id;
                this.form.setFieldsValue({departmentName: data.departmentName,countryId:data.countryId});
            },
            countryData(){
                this.$api.country.getCountry().then(res => {
                    this.countries = res.data;
                })
            },
        }
    }
</script>

<style scoped>

</style>