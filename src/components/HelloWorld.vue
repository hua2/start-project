<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider
                :trigger="null"
                collapsible
                v-model="collapsed"
        >
            <div class="logo">
                <h1>JM.ENERGY</h1>
            </div>
            <a-layout-sider width="200" style="background: #fff">
                <a-menu
                        mode="inline"
                        :defaultSelectedKeys="['1']"
                        :defaultOpenKeys="['sub1']"
                        :style="{ height: '100%', borderRight: 0 }"
                >
                    <a-sub-menu key="sub1">
                        <span slot="title"><a-icon type="user"/>仪表盘</span>
                        <a-menu-item key="1">option1</a-menu-item>
                        <a-menu-item key="2">option2</a-menu-item>
                        <a-menu-item key="3">option3</a-menu-item>
                        <a-menu-item key="4">option4</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <span slot="title"><a-icon type="laptop"/>表单页</span>
                        <a-menu-item key="5">option5</a-menu-item>
                        <a-menu-item key="6">option6</a-menu-item>
                        <a-menu-item key="7">option7</a-menu-item>
                        <a-menu-item key="8">option8</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub3">
                        <span slot="title"><a-icon type="notification"/>列表页</span>
                        <a-menu-item key="9">option9</a-menu-item>
                        <a-menu-item key="10">option10</a-menu-item>
                        <a-menu-item key="11">option11</a-menu-item>
                        <a-menu-item key="12">option12</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                        class="trigger"
                        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                        @click="()=> collapsed = !collapsed"
                />
            </a-layout-header>
            <a-layout-header>
                <a-breadcrumb>
                    <a-breadcrumb-item href="">
                        <a-icon type="home"/>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item href="">
                        <a-icon type="user"/>
                        <span>Application List</span>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item>
                        Application
                    </a-breadcrumb-item>
                </a-breadcrumb>
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                Content
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
    export default {
        data() {
            return {
                collapsed: false,
            }
        },
    }
</script>
<style>
    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    #components-layout-demo-custom-trigger .logo {
        height: 45px;
        width: 45px;
        background: url("../assets/logo.png");
        background-size: 100% 100%;
        margin: 16px;
    }

    .logo h1 {
        color: #fff;
        margin: 0 0 0 60px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        font-weight: 400;
        vertical-align: middle;
        font-size: 18px;
        line-height: 46px;
    }

    .ant-layout {
        height: 100%;
    }

    .ant-layout-header{
        background: #fff!important;
        padding: 20px 50px !important;
    }
</style>
