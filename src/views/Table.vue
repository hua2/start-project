<template>
    <div>
        <a-table :columns="columns" :dataSource="data">
            <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
            <span slot="age" slot-scope="text" href="javascript:;">{{text}}sui</span>
            <div slot="action" slot-scope="text" href="javascript:;">
                <a-button-group>
                    <a-button @click="deleteClick(text.key)">M</a-button>
                    <a-button @click="updateClick(text)">M</a-button>
                </a-button-group>
            </div>
            <span slot="customTitle"><a-icon type="smile-o"/> Name</span>
        </a-table>
        <div>
            <a-button type="primary" @click="addClick">Add</a-button>
        </div>


    </div>
</template>

<script>
    const columns = [{
        dataIndex: 'name',
        slots: {title: 'customTitle'},
        scopedSlots: {customRender: 'name'},
        key: '1',
    }, {
        title: 'Age',
        dataIndex: 'age',
        scopedSlots: {customRender: 'age'},
        key: '2',
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Tags',
        key: '3',
        dataIndex: 'tags',
    }, {
        title: 'Action',
        key: '4',
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

    export default {
        data() {
            return {
                data,
                columns,
            }
        },
        methods: {
            deleteClick: function (key) {
                // console.log(key)
                const i = this.data.findIndex(d => d.key === key);
                this.data.splice(i, 1)


            },
            addClick: function () {
                // console.log(key)
                this.data.push({
                    key: this.data.length + 1,
                    name: 'Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                })
            },
            updateClick: function (a) {
                // console.log(key)
                a.age = a.age * 2;

            }
        }
    }
</script>

<style scoped>

</style>