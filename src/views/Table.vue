<template>
    <div>
        <a-table :columns="columns" :dataSource="data">
            <!--<a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>-->
            <span slot="customTitle"><a-icon type="smile-o"/> Name</span>
            <div slot="action" slot-scope="text">
                <a-button-group>
                    <a-button @click="deleteClick(text.key)">Delete</a-button>
                    <a-button @click="updateClick(text)">Update</a-button>
                </a-button-group>
            </div>
            <span slot="tags" slot-scope="tags">
      <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
    </span>
        </a-table>
        <div>
            <a-button type="primary" @click="addClick">Add</a-button>
        </div>

    </div>

</template>
<script>
    export default {
        name: "Table",
        data() {
            return {
                data,
                columns,
            }
        },
        methods: {
            deleteClick: function (key) {
                const i = this.data.findIndex(d => d.key === key)
                this.data.splice(i, 1)
            },
            updateClick: function (a) {
                a.age = a.age * 2;
            },
            addClick: function () {
                this.data.push({
                    key: this.data.length + 1,
                    name: 'Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                })
            },
        }
    }

    const columns = [{
        dataIndex: 'name',
        key: 'name',
        slots: {title: 'customTitle'},
        scopedSlots: {customRender: 'name'},
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        scopedSlots: {customRender: 'tags'},
    }, {
        title: 'Action',
        key: 'action',
        scopedSlots: {customRender: 'action'},
    }];

    const data = [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    }];


</script>

<style scoped>

</style>