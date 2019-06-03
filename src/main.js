import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'

import bootstrap from './utils/bootstrap'

import api from './api' // 导入api接口

Vue.prototype.$api = api; // 将api挂载到vue的原型上

Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
    router,
    store,
    created() {
        bootstrap()
    },
    render: h => h(App)
}).$mount("#app");