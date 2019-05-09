<template>
    <div>
        <div>
            <a-button type="primary" @click="addClick">Add</a-button>
            <a-modal
                    title="Title"
                    :visible="visible"
                    @ok="handleOk"
                    :confirmLoading="confirmLoading"
                    @cancel="handleCancel"
            >
                <a-form
                        :form="form"
                        @submit="handleSubmit"
                >
                    <a-form-item
                            label="Note"
                            :label-col="{ span: 5 }"
                            :wrapper-col="{ span: 12 }"
                    >
                        <a-input
                                v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
                        />
                    </a-form-item>
                    <a-form-item
                            :wrapper-col="{ span: 12, offset: 5 }"
                    >
                        <a-button
                                type="primary"
                                html-type="submit"
                        >
                            Submit
                        </a-button>
                    </a-form-item>
                </a-form>
            </a-modal>
        </div>

        <a-table :columns="columns" :dataSource="data">
            <div slot="action" slot-scope="text">
                <a-button-group>
                    <a-button @click="deleteClick(text.key)">Delete</a-button>
                    <a-button @click="updateClick(text)">Update</a-button>
                </a-button-group>
            </div>
        </a-table>

    </div>

</template>
<script>
    const columns = [{
        title: 'id',
        dataIndex: 'id',
    }, {
        title: 'name',
        dataIndex: 'regionName',
    }, {
        title: 'Action',
        scopedSlots: {customRender: 'action'},
    }];


    export default {
        name: 'region',
        data() {
            return {
                data: [],
                columns,
                ModalText: 'Content of the modal',
                visible: false,
                confirmLoading: false,
            }
        },
        created() {
            this.loadData();
        },
        methods: {
            deleteClick: function (key) {
                const i = this.data.findIndex(d => d.key === key);
                this.data.splice(i, 1)


            },
            updateClick: function (a) {
                a.age = a.age * 2;

            },
            loadData: function () {
                this.$api.region.regionData().then(res => {
                    this.data = res.data;
                })
            },
            addClick() {
                this.visible = true
            },
            handleOk() {
                this.ModalText = 'The modal will be closed after two seconds';
                this.confirmLoading = true;
                setTimeout(() => {
                    this.visible = false;
                    this.confirmLoading = false;
                }, 1500);
            },
            handleCancel() {
                console.log('Clicked cancel button');
                this.visible = false
            },
        }
    }
</script>

<style scoped>

</style>