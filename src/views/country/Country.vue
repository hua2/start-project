<template>
    <div>
        <div class="home">
            <h1 class="title">Country</h1>
            <p>Country页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
        </div>
        <div class="content">
            <div>
                <a-button type="primary" @click="addMsg"><a-icon type="plus" />新建</a-button>
                <CountryModal ref="modal" @ok="handleOk"/>
            </div>
            <a-table :columns="columns" :dataSource="data" rowKey="id">
                <div slot="action" slot-scope="text">
                    <a-popconfirm title="Are you sure delete this task?" @confirm="deleteMsg(text.id)"  okText="Yes" cancelText="No">
                        <a href="javascript:">Delete</a>
                    </a-popconfirm>
                    <a-divider type="vertical" />
                    <a @click="updateMsg(text)">Update</a>
                </div>
            </a-table>
        </div>

    </div>
</template>

<script>

    import CountryModal from "./CountryModal";
    const columns = [{
        title: 'ID',
        dataIndex: 'id',
    }, {
        title: '国家名字',
        dataIndex: 'countryName',
    }, {
        title: '地区',
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
                columns,
            }
        },

        created() {
            this.countryData();

        },

        methods: {
            countryData: function () {
                this.$api.country.getCountry().then(res => {
                    this.data = res.data;
                })
            },
            addMsg() {
                this.$refs.modal.add();
            },
            updateMsg: function (data) {
                this.$refs.modal.update(data);
            },
            deleteMsg(key) {
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