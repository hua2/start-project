<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
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