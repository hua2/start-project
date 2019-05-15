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
            <a-menu
                    :defaultSelectedKeys="['1']"
                    :defaultOpenKeys="['sub1']"
                    mode="inline"
                    theme="dark"
                    :inlineCollapsed="collapsed"
            >
                <a-sub-menu key="sub1">
                    <span slot="title"><a-icon type="pie-chart"/><span>仪表盘</span></span>
                    <a-menu-item key="1">
                        <router-link to="/">分析</router-link>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <router-link to="/about">关于</router-link>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <router-link to="/region">地区</router-link>
                    </a-menu-item>
                    <a-menu-item key="4">
                        <router-link to="/country">国家</router-link>
                    </a-menu-item>
                    <a-menu-item key="5">
                        <router-link to="/department">团队</router-link>
                    </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <span slot="title"><a-icon type="form"/><span>表单页</span></span>
                    <!--<a-menu-item key="4">基础表单</a-menu-item>-->
                    <!--<a-menu-item key="5">分布表单</a-menu-item>-->
                    <a-menu-item key="6">高级表单</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub3">
                    <span slot="title"><a-icon type="table"/><span>列表页</span></span>
                    <a-menu-item key="7">查询列表</a-menu-item>
                    <a-menu-item key="8">标准列表</a-menu-item>
                    <a-menu-item key="9">卡片列表</a-menu-item>
                    <a-menu-item key="10">搜索列表</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub4">
                    <span slot="title"><a-icon type="profile"/><span>详情页</span></span>
                    <a-menu-item key="11">基础详情页</a-menu-item>
                    <a-menu-item key="12"> 高级详情页</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub5">
                    <span slot="title"><a-icon type="down-circle"/><span>结果页</span></span>
                    <a-menu-item key="13">成功</a-menu-item>
                    <a-menu-item key="14">失败</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub6">
                    <span slot="title"><a-icon type="warning"/><span>异常页</span></span>
                    <a-menu-item key="15">403</a-menu-item>
                    <a-menu-item key="16">404</a-menu-item>
                    <a-menu-item key="17">500</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub7">
                    <span slot="title"><a-icon type="user"/><span>个人页</span></span>
                    <a-menu-item key="18">个人中心</a-menu-item>
                    <a-menu-item key="19">个人设置</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub8">
                    <span slot="title"><a-icon type="slack"/><span>其他组件</span></span>
                    <a-menu-item key="20">业务布局</a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                        class="trigger"
                        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                        @click="()=> collapsed = !collapsed"
                />
            </a-layout-header>
            <div class="breadcrumb">
                <a-breadcrumb :routes="routes">
                    <template slot="itemRender" slot-scope="{route, params, routes, paths}">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{route.breadcrumbName}}  {{$route.path}}
      </span>
                        <router-link v-else :to="`${basePath}/${paths.join('/')}`">
                            {{route.breadcrumbName}}
                        </router-link>
                    </template>
                </a-breadcrumb>
            </div>
            <a-layout-content :style="{ margin: '0', minHeight: '280px' }">
                <router-view/>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                huahuah
            </a-layout-footer>


        </a-layout>
    </a-layout>
</template>
<script>

    export default {
        components: {},
        data() {
            const {lang} = this.$route.params;
            return {
                collapsed: false,
                basePath: `/${lang}/components/breadcrumb`,
                routes: [{
                    path: 'index',
                    breadcrumbName: '首页'
                }, {
                    path: 'first',
                    breadcrumbName: '仪表盘'
                }],
            }
        }
    }


</script>
<style>
    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
        z-index: 100;
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
        margin: 0 0 0 64px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        font-weight: 400;
        vertical-align: middle;
        font-size: 18px;
        line-height: 46px;
    }

    .ant-layout.ant-layout-has-sider {
        height: 100%;
    }

    .breadcrumb {
        background: #fff;
        padding: 16px 32px 0;
        border-top: 1px solid #e8e8e8;

    }


</style>
