<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider
                :trigger="null"
                collapsible
                v-model="collapsed"
        >
            <!--<div class="logo"/>-->
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
                    <a-menu-item key="1">分析</a-menu-item>
                    <a-menu-item key="2">监控页（外部）</a-menu-item>
                    <a-menu-item key="3">工作台</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <span slot="title"><a-icon type="form"/><span>表单页</span></span>
                    <a-menu-item key="4">基础表单</a-menu-item>
                    <a-menu-item key="5">分布表单</a-menu-item>
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
                <div class="content-box">
                    <a href="http://javayuan.cn/" target="_blank">
                        <a-icon type="question-circle-o"></a-icon>
                    </a>
                    <a-icon type="bell"></a-icon>
                    <img src="../assets/avatar2.jpg" alt="">
                    <span>天野远子</span>
                </div>
                <div class="avatar">
                    <a-breadcrumb style="padding: 16px 10px">
                        <a-breadcrumb-item>首页</a-breadcrumb-item>
                        <a-breadcrumb-item>仪表盘</a-breadcrumb-item>
                        <a-breadcrumb-item>工作台</a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <div class="row">
                    <div class="avatar-left">
                        <span><img src="../assets/avatar2.jpg" alt=""/></span>
                    </div>
                    <div class="headerContent">
                        <div class="title">
                            下午好，天野远子 <span>,准备吃什么呢?</span>
                        </div>
                        <div>角马商城 | 角马能源 - 角马后台管理系统 - JM平台</div>
                    </div>
                    <div class="extra">
                        <div class="ant-col-8">
                            <div class="header-info">
                                <span class="top">项目数</span>
                                <p class="bottom">56</p>
                            </div>
                        </div>
                        <div class="ant-col-8">
                            <div class="header-info">
                                <span>团队排名</span>
                                <p>12/26</p>
                            </div>
                        </div>
                        <div class="ant-col-8">
                            <div class="header-info">
                                <span>项目访问</span>
                                <p>2,223</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a-layout-header>
            <a-layout-content
                    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px',marginTop: '180px' }">
                <a-card title="进行中的项目">
                    <a-card-grid style="width:33.3%;textAlign:'center'">Content</a-card-grid>
                    <a-card-grid style="width:33.3%;textAlign:'center'">Content</a-card-grid>
                    <a-card-grid style="width:33.3%;textAlign:'center'">Content</a-card-grid>
                    <a-card-grid style="width:33.3%;textAlign:'center'">Content</a-card-grid>
                    <a-card-grid style="width:33.3%;textAlign:'center'">Content</a-card-grid>
                    <a-card-grid style="width:33.3%;textAlign:'center'">Content</a-card-grid>
                </a-card>
            </a-layout-content>
            <a-layout-content>
                <a-card :loading="loading" title="动态" >
                    <a-list
                            itemLayout="horizontal"
                            :dataSource="data">
                        <a-list-item slot="renderItem" slot-scope="item, index">
                            <a-list-item-meta
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team">
                                <a slot="title" href="https://vue.ant.design/">{{item.title}}</a>
                                <a-avatar slot="avatar"
                                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </a-list-item-meta>
                        </a-list-item>
                    </a-list>
                </a-card>
            </a-layout-content>

            <a-layout-footer style="text-align: center">
                JM Design ©2019 Created by Hua Hua
            </a-layout-footer>

        </a-layout>
    </a-layout>
</template>
<script>
    import ALayoutSider from "ant-design-vue/es/layout/Sider";

    export default {
        components: {ALayoutSider},
        data() {
            return {
                collapsed: false,
                data,
            }
        },
    }
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        }
    ]


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

    .content-box {
        position: absolute;
        top: 0;
        right: 70px;
    }

    .content-box i {
        margin: 0 15px;
    }

    .content-box img {
        position: absolute;
        top: 16px;
        right: 65px;
        height: 30px;
        width: 30px;
        border-radius: 20px;
    }

    .content-box span {
        margin-left: 50px;
    }

    .avatar {
        margin-top: 2px;
        padding: 0 24px;
        background: #fff;

    }

    .row {
        display: flex;
        width: 100%;
        height: 100px;
        background: #fff;
    }


    .row .avatar-left img {
        border-radius: 72px;
        display: block;
        width: 72px;
        height: 72px;
        margin: 10px 20px 10px 30px;
    }

    .headerContent {
        -webkit-box-flex: 1;
        margin-top: 15px;
        flex: auto;
        color: rgba(0, 0, 0, .45);
        line-height: 22px;
    }

    .headerContent .title {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: rgba(0, 0, 0, .85);
        margin-bottom: 16px;
        -webkit-box-flex: 1;
        flex: auto;
    }

    .extra {
        -webkit-box-flex: 0;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        margin-left: 88px;
        min-width: 242px;
        text-align: right;
    }

    .header-info {
        position: relative;
        text-align: left;
        padding: 0 32px 0 0;
        min-width: 125px;
    }

    .header-info span {
        color: rgba(0, 0, 0, .45);
        display: inline-block;
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 4px;
    }

    .header-info p {
        color: rgba(0, 0, 0, .85);
        font-size: 24px;
        line-height: 10px;
        margin: 0;
    }

    .ant-layout-content {
        margin-left: 20px;
        background: #fff;
    }

    .ant-spin-container {
        padding-left: 30px;
    }


</style>
