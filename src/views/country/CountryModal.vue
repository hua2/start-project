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
                    label="CountryName"
            >
                <a-input
                        v-decorator="[
          'countryName',
          {rules: [{ required: true, message: 'Please input your countryName!' }]}
        ]"
                />
            </a-form-item>
            <a-form-item
                    label="regionId"
            >
                <a-select
                        v-decorator="[
          'regionId',
          {rules: [{ required: true, message: 'Please select your regionId!' }]}
        ]"
                        placeholder="Select a option and change input text above"
                >
                    <a-select-option v-for="(x,index) in regions" :key="index" :value="x.regionName">
                        {{x.regionName}}
                    </a-select-option>
                </a-select>
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
    export default {
        name: "CountryModal",
        data(){
            return{
                regions: [],
                visible: false,
                confirmLoading: false,
                id: undefined
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        created() {
            this.regionData();

        },
        methods:{
            handleOk() {
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                        this.confirmLoading = true;
                        if (!this.id) {
                            this.$api.country.createCountry({
                                countryName: values.countryName,
                                required:values.required}).then(() => {
                                this.ok();
                                this.countryData();
                                this.$message.success('创建成功');
                            }).catch(() => {
                                this.confirmLoading = false;
                            });
                        } else {
                            this.$api.country.updateCountry({
                                countryName: values.countryName,
                                required: values.required,
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
            addCountries() {
                this.updateCountries({id: undefined, countryName: '',required:''})
            },
            updateCountries(data) {
                this.visible = true;
                this.id = data.id;
                this.form.setFieldsValue({countryName: data.countryName, required:data.required})
            },
            regionData: function () {
                this.$api.region.regionData().then(res => {
                    this.regions = res.data;
                })
            },
        }
    }
</script>

<style scoped>

</style>