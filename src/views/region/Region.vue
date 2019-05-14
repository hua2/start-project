<template>
    <div>
        <div>
            <a-button type="primary" @click="addClick">Add</a-button>
            <RegionModal ref="modal" @ok="handleOk"/>
        </div>

        <a-table :columns="columns" :dataSource="data" rowKey="id">
            <div slot="action" slot-scope="text">
                <a-popconfirm title="Are you sure delete this task?" @confirm="deleteClick(text.id)"  okText="Yes" cancelText="No">
                    <a href="javascript:">Delete</a>
                </a-popconfirm>
                <a-divider type="vertical" />
                <a @click="updateClick(text)">Update</a>
            </div>
        </a-table>
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
                visible: false,
            }
        },
        created() {
            this.loadData();
        },
        methods: {
            deleteClick: function (key) {
                this.$api.region.deleteRegion(key).then(() => {
                    this.loadData()
                })
            },
            updateClick: function (data) {
                this.$refs.modal.update(data);
            },
            loadData: function () {
                this.$api.region.regionData().then(res => {
                    this.data = res.data;
                })
            },
            addClick() {
                this.$refs.modal.add();
            },
            handleOk() {
                this.loadData();
            }
        }
    }
</script>

<style scoped>

</style>