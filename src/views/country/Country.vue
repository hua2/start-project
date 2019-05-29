<template>
    <div>
        <div class="home">
            <h1 class="title">Country</h1>
            <p>Country页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
        </div>
        <div class="content">
            <div>
                <a-button type="primary" @click="addClick">
                    <a-icon type="plus"/>
                    新建
                </a-button>
                <CountryModal ref="modal" @ok="handleOk"/>
            </div>
            <a-table
                    :columns="columns"
                    :dataSource="data"
                    rowKey="id"
                    :loading="loading"
                    @change="handleTableChange"
                    :pagination="pagination">
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

    import CountryModal from "./CountryModal";

    const columns = [{
        title: 'ID',
        sorter: true,
        dataIndex: 'id',
    }, {
        title: '国家名字',
        sorter: true,
        dataIndex: 'countryName',
    }, {
        title: '地区',
        key:'regionId',
        sorter: true,
        dataIndex: 'regionName',
    }, {
        title: 'Action',
        scopedSlots: {customRender: 'action'},
    }];

    export default {
        name: "country",
        components: {CountryModal},
        data() {
            return {
                data: [],
                loading: false,
                pagination: {
                    pageSize: 5,
                    current: 1,
                    total: 0,
                    sort: 'id,asc',
                },
                columns,
            }
        },
        created() {
            this.countryData();
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
                this.countryData();
            },
            countryData () {
                this.loading = true;
                this.$api.country.getCountry({
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
            addClick() {
                this.$refs.modal.add();
            },
            updateClick: function (data) {
                this.$refs.modal.update(data);
            },
            deleteClick(key) {
                this.$api.country.deleteCountry(key).then(() => {
                    this.countryData()
                })
            },
            handleOk() {
                this.countryData();
            }

        }
    }
</script>

<style scoped>

</style>