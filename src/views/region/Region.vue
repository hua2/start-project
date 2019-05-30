<template>
    <div>
        <div class="home">
            <h1 class="title">Region</h1>
            <p>Region页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
        </div>
        <div class="content">
            <div>
                <a-button type="primary" @click="addClick"><a-icon type="plus" />新建</a-button>
                <RegionModal ref="modal" @ok="handleOk"/>
            </div>

            <a-table :columns="columns"
                     :dataSource="data"
                     rowKey="id"
                     :pagination="pagination"
                     :loading="loading"
                     @change="handleTableChange"
            >
                <div slot="action" slot-scope="text">
                    <a-popconfirm title="Are you sure delete this task?" @confirm="deleteClick(text.id)" okText="Yes"
                                  cancelText="No">
                        <a href="javascript:">Delete</a>
                    </a-popconfirm>
                    <a-divider type="vertical"/>
                    <a @click="updateClick(text)">Update</a>
                </div>
            </a-table>
        </div>

    </div>

</template>
<script>
    import RegionModal from "@/views/region/RegionModal";

    const columns = [{
        title: 'ID',
        sorter: true,
        dataIndex: 'id',
    }, {
        title: '地区名字',
        sorter: true,
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
                loading: false,
                pagination: {
                    pageSize: 5,
                    current: 1,
                    total: 0,
                    sort: 'id,asc',
                }
            }
        },
        created() {
            this.regionData();
        },
        methods: {
            handleTableChange(pagination, filters, sorter) {
                this.pagination.current = pagination.current;
                this.pagination.pageSize = pagination.pageSize;
                if (sorter.field && sorter.order) {
                    this.pagination.sort = `${sorter.columnKey},${sorter.order}`;
                } else {
                    this.pagination.sort = ''
                }
                this.regionData();
            },
            regionData () {
                this.loading = true;
                this.$api.region.getRegion({
                    size: this.pagination.pageSize,
                    page: this.pagination.current - 1,
                    sort: this.pagination.sort.replace(/end/, '')
                }).then(res => {
                    const total = res.headers['x-total-count'];
                    this.pagination.total = Number(total);
                    this.data = res.data;
                    this.loading = false
                }).catch(() => this.loading = false);
            },
            deleteClick(key) {
                this.$api.region.deleteRegion(key).then(() => {
                    this.regionData()
                })
            },
            updateClick(data) {
                this.$refs.modal.update(data);
            },
            addClick() {
                this.$refs.modal.add();
            },
            handleOk() {
                this.regionData();
            },
        }
    }
</script>

<style scoped>
</style>