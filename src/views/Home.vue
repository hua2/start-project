<template>
    <div>
        <div class="home">
            <h1 class="title">Home</h1>
            <p>Home页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
        </div>
        <div class="content">
            ccccccccccccccccssssss
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        created() {
            this.account();
        },
        methods: {
            account: function () {
                this.$api.user.getAccount().then(res => {
                        console.log(res);
                    this.$notification.open({
                        message: '欢迎' + res.data.firstName,

                    });
                    }
                )
            }
        }
    }
</script>
<style scoped>
</style>