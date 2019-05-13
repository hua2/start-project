<template>
    <div>
        <div>
            <a-button type="primary" @click="addMsg">添加国家</a-button>
            <CountryModal ref="modal" @ok="handleOk"/>
        </div>
        <a-table :columns="columns" :dataSource="data" rowKey="id">
            <div slot="action" slot-scope="text">
                <a-button-group>
                    <a-button @click="deleteMsg(text.id)">Delete</a-button>
                    <a-button @click="updateMsg(text)">Update</a-button>
                </a-button-group>
            </div>
        </a-table>
    </div>
</template>

<script>

    import CountryModal from "./CountryModal";
    const columns = [{
        title: 'id',
        dataIndex: 'id',
    }, {
        title: 'country',
        dataIndex: 'countryName',
    }, {
        title: 'name',
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
                visible: false,
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
                this.$refs.modal.addCountries();
            },
            updateMsg: function (data) {
                this.$refs.modal.updateCountries(data);
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