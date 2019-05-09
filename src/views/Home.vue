<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
    </div>
</template>

<script>
    export default {
        name: 'home',
        created() {
            this.onLoad();
        },
        methods: {
            // 获取数据
            onLoad(id) {
                this.$api.article.articleDetail((id), {
                    api: 123
                }).then(res => {
                    // 执行某些操作
                    console.log(res)
                })
            }
        }
    }
</script>