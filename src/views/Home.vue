<template>
    <div>
        <div class="home">
            <a-row type="flex" justify="space-around">
                <a-col :span="4">
                    <a-avatar :size="64" icon="user"/>
                </a-col>
                <a-col :span="12" :pull="4">
                    <p>下午好，Ant Design，祝你开心每一天！</p>
                    <p>交互设计师 | 蚂蚁金服－平台数据技术事业群－基础平台部－用户体验技术部－UED</p>
                </a-col>
                <a-col>
                    <p>当前任务</p>
                    <p style="text-align: center">56</p>
                </a-col>
                <a-col>
                    <p>总任务</p>
                    <p style="text-align: center">200</p>
                </a-col>
                <a-col>
                    <p>总工作</p>
                    <p style="text-align: center">23</p>
                </a-col>
            </a-row>

        </div>
        <div class="content">
            <a-row :gutter="24">
                <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
                    <a-card title="进行中的任务">
                        <a slot="extra">全部任务</a>
                        <a-card-grid style="width:25%;;height:160px;textAlign:'center'">
                            <a-card-meta
                                    title="某任务"
                                    description="那是一种内在的东西， 他们到达不了，也无法触及的，那是你的。">
                                <a-avatar slot="avatar"
                                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </a-card-meta>
                            <div class="project-item">
                                <a href="/#/">科学搬砖组</a>
                                <span class="datetime">9小时前</span>
                            </div>
                        </a-card-grid>
                        <a-card-grid style="width:25%;;height:160px;textAlign:'center'">
                            <a-card-meta
                                    title="某任务"
                                    description="那是一种内在的东西， 他们到达不了，也无法触及的，那是你的。">
                                <a-avatar slot="avatar"
                                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </a-card-meta>
                            <div class="project-item">
                                <a href="/#/">科学搬砖组</a>
                                <span class="datetime">9小时前</span>
                            </div>
                        </a-card-grid>
                        <a-card-grid style="width:25%;;height:160px;textAlign:'center'">
                            <a-card-meta
                                    title="某任务"
                                    description="那是一种内在的东西， 他们到达不了，也无法触及的，那是你的。">
                                <a-avatar slot="avatar"
                                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </a-card-meta>
                            <div class="project-item">
                                <a href="/#/">科学搬砖组</a>
                                <span class="datetime">9小时前</span>
                            </div>
                        </a-card-grid>
                        <a-card-grid style="width:25%;;height:160px;textAlign:'center'">
                            <a-card-meta
                                    title="某任务"
                                    description="那是一种内在的东西， 他们到达不了，也无法触及的，那是你的。">
                                <a-avatar slot="avatar"
                                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </a-card-meta>
                            <div class="project-item">
                                <a href="/#/">科学搬砖组</a>
                                <span class="datetime">9小时前</span>
                            </div>
                        </a-card-grid>
                        <a-card-grid style="width:25%;;height:160px;textAlign:'center'">
                            <a-card-meta
                                    title="某任务"
                                    description="那是一种内在的东西， 他们到达不了，也无法触及的，那是你的。">
                                <a-avatar slot="avatar"
                                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </a-card-meta>
                            <div class="project-item">
                                <a href="/#/">科学搬砖组</a>
                                <span class="datetime">9小时前</span>
                            </div>
                        </a-card-grid>
                        <a-card-grid style="width:25%;;height:160px;textAlign:'center'">
                            <a-card-meta
                                    title="某任务"
                                    description="那是一种内在的东西， 他们到达不了，也无法触及的，那是你的。">
                                <a-avatar slot="avatar"
                                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </a-card-meta>
                            <div class="project-item">
                                <a href="/#/">科学搬砖组</a>
                                <span class="datetime">9小时前</span>
                            </div>
                        </a-card-grid>
                        <a-card-grid style="width:25%;;height:160px;textAlign:'center'">
                            <a-card-meta
                                    title="某任务"
                                    description="那是一种内在的东西， 他们到达不了，也无法触及的，那是你的。">
                                <a-avatar slot="avatar"
                                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </a-card-meta>
                            <div class="project-item">
                                <a href="/#/">科学搬砖组</a>
                                <span class="datetime">9小时前</span>
                            </div>
                        </a-card-grid>
                        <a-card-grid style="width:25%;;height:160px;textAlign:'center'">
                            <a-card-meta
                                    title="某任务"
                                    description="那是一种内在的东西， 他们到达不了，也无法触及的，那是你的。">
                                <a-avatar slot="avatar"
                                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </a-card-meta>
                            <div class="project-item">
                                <a href="/#/">科学搬砖组</a>
                                <span class="datetime">9小时前</span>
                            </div>
                        </a-card-grid>
                    </a-card>
                    <a-card title="动态">
                        <a-list>
                            <a-list-item>
                                <a-list-item-meta>
                                    <a-avatar slot="avatar" icon="user"/>
                                    <div slot="title">
                                        林东东 在 <a href="#" style="color: #1890ff;">Ant Design ProAnt Design ProAnt Design
                                        ProAnt Design ProAnt Design ProAnt Design Pro</a>工作中完成了
                                        <a href="#" style="color: #1890ff;">留言任务</a>
                                    </div>
                                    <div slot="description">3天前</div>
                                </a-list-item-meta>
                            </a-list-item>
                            <a-list-item>
                                <a-list-item-meta>
                                    <a-avatar slot="avatar" icon="user"/>
                                    <div slot="title">
                                        林东东 在 <a href="#" style="color: #1890ff;"> Ant De</a>工作中完成了
                                        <a href="#" style="color: #1890ff;">留言任务留言任务留言任务留言任务留言任务</a>
                                    </div>
                                    <div slot="description">3天前</div>
                                </a-list-item-meta>
                            </a-list-item>
                            <a-list-item>
                                <a-list-item-meta>
                                    <a-avatar slot="avatar" icon="user"/>
                                    <div slot="title">
                                        林东东 在 <a href="#" style="color: #1890ff;">Ant Design Pro</a>工作中完成了
                                        <a href="#" style="color: #1890ff;">留言</a>
                                    </div>
                                    <div slot="description">3天前</div>
                                </a-list-item-meta>
                            </a-list-item>

                        </a-list>
                    </a-card>
                </a-col>
                <a-col
                        style="padding: 0 12px"
                        :xl="8"
                        :lg="24"
                        :md="24"
                        :sm="24"
                        :xs="24">
                    <a-card title="工作列表" style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 0}">
                        <a slot="extra">全部工作</a>
                        <div class="item-group">
                            <p>
                                <a-avatar slot="avatar" size="small"
                                          src="https://axure-file.lanhuapp.com/6b1d2547-b791-4d62-adce-a4881352a46d__862eb7a7eeb6b7490153498e634cb182"/>
                                高逼格设计天团高逼格设计天团高逼
                            </p>
                            <p>
                                <a-avatar slot="avatar" size="small"
                                          src="https://axure-file.lanhuapp.com/6b1d2547-b791-4d62-adce-a4881352a46d__862eb7a7eeb6b7490153498e634cb182"/>
                                中二少女团中二少女团中二少女团中二少高逼格设计天团高逼格设计天团高逼
                            </p>
                            <p>
                                <a-avatar slot="avatar" size="small"
                                          src="https://axure-file.lanhuapp.com/6b1d2547-b791-4d62-adce-a4881352a46d__862eb7a7eeb6b7490153498e634cb182"/>
                                程序员日常程序员日常程序员日常程序员高逼格设计天团高逼格设计天团高逼
                            </p>
                            <p>
                                <a-avatar slot="avatar" size="small"
                                          src="https://axure-file.lanhuapp.com/6b1d2547-b791-4d62-adce-a4881352a46d__862eb7a7eeb6b7490153498e634cb182"/>
                                科学搬砖组科学搬砖组科学搬砖组科学学高逼格设计天团高逼格设计天团高逼
                            </p>
                        </div>
                    </a-card>
                    <a-card title="团队">
                        <div class="members">
                            <a-row>
                                <a-col :span="12">
                                    <a>
                                        <a-avatar size="small" icon="user"/>
                                        <span class="member">科学搬砖组</span>
                                    </a>
                                </a-col>
                                <a-col :span="12">
                                    <a>
                                        <a-avatar size="small" icon="user"/>
                                        <span class="member">科学搬砖组</span>
                                    </a>
                                </a-col>
                                <a-col :span="12">
                                    <a>
                                        <a-avatar size="small" icon="user"/>
                                        <span class="member">科学搬砖组</span>
                                    </a>
                                </a-col>
                            </a-row>
                        </div>
                    </a-card>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        created() {
            this.$notification.open({
                message: '欢迎' + this.$store.state.account.firstName,
            });
        },
        methods: {}
    }
</script>
<style scoped>
    .content {
        margin: 0;
    }

    .project-item {
        display: flex;
        margin-top: 15px;
        overflow: hidden;
        font-size: 12px;
        height: 20px;
        padding-left: 45px;
        line-height: 20px;
    }

    .project-item a {
        color: rgba(0, 0, 0, 0.45);
        display: inline-block;
        flex: 1 1 0;
    }

    .project-item:hover {
        color: #1890ff;
    }

    .project-item .datetime {
        color: rgba(0, 0, 0, 0.25);
        flex: 0 0 auto;
        float: right;
    }

    .content {
        background: unset;
    }

    .item-group {
        padding: 30px 30px;
    }

    .item-group p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 5px;
    }

    .members a {
        display: block;
        margin: 12px 0;
    }

    .members a .member {
        font-size: 14px;
        color: rgba(0, 0, 0, .65);
        max-width: 100px;
        margin-left: 12px;
    }

    .members a:hover span {
        color: #1890ff;
    }

</style>