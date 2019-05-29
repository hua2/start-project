<template>
    <div>
        <div class="home">
            <h1 class="title">Department</h1>
            <p>Department页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
        </div>
        <div class="content">
            <div>
                <a-button type="primary" @click="addClick()">
                    <a-icon type="plus"/>
                    新建
                </a-button>
                <EmployModal ref="modal" @ok="handleOk"/>
            </div>
            <a-table :columns="columns" :dataSource="data" rowKey="id">
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

    import EmployModal from "./EmployModal";

    const columns = [{
        title: 'id',
        dataIndex: 'id',
    }, {
        title: '登录名',
        dataIndex: 'login',
    }, {
        title: '名字',
        dataIndex: 'firstName',
    }, {
        title: '姓氏',
        dataIndex: 'lastName',
    }, {
        title: '邮箱',
        dataIndex: 'email',
    }, {
        title: '联系方式',
        dataIndex: 'phoneNumber',
    }, {
        title: '薪资',
        dataIndex: 'salary',
    }, {
        title: '团队',
        dataIndex: 'departmentName',
    }, {
        title: 'Action',
        scopedSlots: {customRender: 'action'},
    }];

    export default {
        name: "Employee",
        components: {EmployModal},
        data() {
            return {
                columns,
                data: [],
            }
        },
        created() {
            this.employeeData();
        },
        methods: {
            employeeData() {
                this.$api.employ.getEmployee().then(res => {
                    this.data = res.data;
                    console.error(res.data)
                })
            },
            addClick() {
                this.$refs.modal.add();
            },

            updateClick(data) {
                this.$refs.modal.update(data);
            },
            deleteClick(key) {
                this.$api.employ.deleteEmployee(key).then(() => {
                    this.employeeData()
                })
            },
            handleOk() {
                this.employeeData()
            }

        }
    }
</script>

<style scoped>

</style>