<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    body, html {
        width: 100%;
        height: 100%;
    }

    #app {
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .home {
        padding: 16px 32px 0;
        border-bottom: 1px solid #e8e8e8;
        background: #fFF;
    }

    .home .title {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: rgba(0, 0, 0, .85);
        margin-bottom: 16px;
    }

    .content {
        background: #fff;
        margin: 24px 0;
        padding: 24px 24px 0;
        min-height: 680px;

    }
    .ant-table-wrapper{
        margin-top: 1rem;
    }

</style>
<script>

    export default {
        components: {}
    }
</script>
