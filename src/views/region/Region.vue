<template>
    <div>
        <div>
            <a-button type="primary" @click="addClick">Add</a-button>

        </div>

        <a-table :columns="columns" :dataSource="data">
            <div slot="action" slot-scope="text">
                <a-button-group>
                    <a-popconfirm title="Are you sure delete this?" @confirm="deleteClick(text.id)">
                        <a-button>Delete</a-button>
                    </a-popconfirm>
                    <a-button @click="updateClick(text)">Update</a-button>
                </a-button-group>
            </div>
        </a-table>
        <RegionModal ref="modal" @ok="handleSaveOk" @close="handleSaveClose"></RegionModal>

    </div>

</template>
<script>
    import RegionModal from "@/views/region/RegionModal";

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
        components: {RegionModal},
        data() {
            return {
                data: [],
                columns,
            }
        },
        created() {
            this.loadData();
        },
        methods: {
            deleteClick: function (id) {
                this.$api.region.deleteRegion(id).then(() => {
                    this.$message.success('删除成功！');
                    this.loadData();
                })
            },
            updateClick: function (data) {
                this.$refs.modal.update(data);
            },
            addClick: function () {
                this.$refs.modal.add();
            },
            loadData: function () {
                this.$api.region.regionData().then(res => {
                    this.data = res.data;
                })
            },
            handleSaveOk() {
                this.loadData();
            },
            handleSaveClose() {
            },
        }
    }
</script>

<style scoped>

</style>
