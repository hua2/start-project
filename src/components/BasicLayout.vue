<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider
                :trigger="null"
                collapsible
                v-model="collapsed"
        >
            <div class="logo">
                <h1>HUA</h1>
            </div>
            <a-menu
                    :defaultSelectedKeys="['1']"
                    :defaultOpenKeys="['sub1']"
                    mode="inline"
                    theme="dark"
                    :inlineCollapsed="collapsed"
            >
                <a-sub-menu key="sub1">
                    <span slot="title"><a-icon type="pie-chart"/><span>数据</span></span>
                    <a-menu-item key="1">
                        <router-link to="/">首页</router-link>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <router-link to="/region">地区</router-link>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <router-link to="/country">国家</router-link>
                    </a-menu-item>
                    <a-menu-item key="4">
                        <router-link to="/department">团队</router-link>
                    </a-menu-item>
                    <a-menu-item key="5">
                        <router-link to="/task">任务</router-link>
                    </a-menu-item>
                    <a-menu-item key="6">
                        <router-link to="/employ">人员</router-link>
                    </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <span slot="title"><a-icon type="form"/><span>管理</span></span>
                    <a-menu-item key="7">
                        <router-link to="/userManage">用户管理</router-link>
                    </a-menu-item>
                    <a-menu-item key="8">
                        <router-link to="/permission">权限管理</router-link>
                    </a-menu-item>
                    <a-menu-item key="9">
                        <router-link to="/about">关于</router-link>
                    </a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <div>
                    <div>
                        <a-icon
                                class="trigger"
                                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                                @click="()=> collapsed = !collapsed"
                        />
                        <div style="float: right;margin: 0 10px">
                            <a href="https://www.baidu.com/"><span class="action"><a-icon
                                    type="question-circle-o"/></span></a>
                            <span class="action"><a-icon type="bell"/></span>
                            <a-dropdown>
                                <a class="action" href="#">
                                    <a-avatar class="avatar" size="small" style="margin-right: 12px"
                                              src="https://axure-file.lanhuapp.com/6b1d2547-b791-4d62-adce-a4881352a46d__862eb7a7eeb6b7490153498e634cb182"/>
                                    天野远子
                                </a>
                                <a-menu slot="overlay">
                                    <a-menu-item key="0" @click="setClick">
                                        <a href="#"><a-icon type="home"/>个人中心 </a>
                                    </a-menu-item>
                                    <a-menu-item key="1"  @click="changePwd">
                                        <a href="#"><a-icon type="setting"/>账号设置 </a>
                                    </a-menu-item>
                                    <a-menu-divider/>
                                    <a-menu-item key="3" @click="exitLayout">
                                        <a-icon type="logout"/>退出登录
                                    </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </div>
                    </div>
                </div>

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

    import router from '@/router';
    
    export default {
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
        },
        methods:{
            exitLayout(){
                localStorage.removeItem('token');
                sessionStorage.removeItem('token');
                router.replace({
                    path: '/session/login',
                    query: {
                        redirect: router.currentRoute.fullPath
                    }
                });
            },
            changePwd(){
                this.$router.push('/info');
            },
            setClick(){
                this.$router.push('/setting');
            }
        }}


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

    .action {
        padding: 0 12px;
    }


</style>
