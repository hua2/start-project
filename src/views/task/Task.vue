<template>
    <div>
        <div class="home">
            <h1 class="title">Task</h1>
            <p>Task页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
        </div>
        <div class="content">
            <div>
                <a-button type="primary"><a-icon type="plus"/>新建</a-button>
            </div>

            <a-table :columns="columns" :dataSource="data" rowKey="id">

            </a-table>
        </div>

    </div>
</template>

<script>
    export default {
        name: "task",
        data(){
            return{
                columns,
                data:[],
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        created(){
            this.taskData();
        },
        methods:{
            taskData(){
                this.$api.task.getTasks().then(res => {
                    this.data= res.data;
                })
            },

        }
    }
    const columns = [{
        title: 'id',
        dataIndex: 'id',
    }, {
        title: 'title',
        dataIndex: 'taskName',
    },{
        title: 'introduction',
        dataIndex: 'introduction',
    },{
        title: 'startDate',
        dataIndex: 'startDate',
    },{
        title: 'endDate',
        dataIndex: 'endDate',
    },{
        title: 'status',
        dataIndex: 'status',
    },  {
        title: 'Action',
        scopedSlots: {customRender: 'action'},
    }];
</script>

<style scoped>

</style>