<template>
    <div>
        <div>
            <a-button type="primary" @click="addClick()">创建新团队</a-button>
            <DepartModal ref="modal" @ok="handleOk"/>
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
    import DepartModal from "./DepartModal";
    const columns = [{
        title: 'id',
        dataIndex: 'id',
    }, {
        title: 'department',
        dataIndex: 'departmentName',
    }, {
        title: 'country',
        dataIndex: 'countryName',
    }, {
        title: 'Action',
        scopedSlots: {customRender: 'action'},
    }];

    export default {
        name: "Team",
        components: {DepartModal},
        data(){
            return{
                columns,
                data:[],
            }
        },
        created() {
            this.departmentData();
        },
        methods:{
            departmentData(){
                this.$api.department.getDepartments().then(res => {
                    this.data= res.data;
                })
            },

            addClick() {
                this.$refs.modal.add();
            },

            updateClick(data) {
                this.$refs.modal.update(data);
            },

            deleteClick(key) {
                this.$api.department.deleteDepartments(key).then(() => {
                    this.departmentData()
                })
            },

            handleOk() {
                this.departmentData();
            }

        }
    }
</script>

<style scoped>

</style>