import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        token: null
    },
    mutations: {
        // 登录成功将, token保存在localStorage中
        login: (state, data) => {
            if (data.rememberMe) {
                localStorage.token = data.token;
            } else {
                sessionStorage.token = data.token;
            }
            state.token = data.token;
        },
        // 退出登录将, token清空
        logout: (state) => {
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            state.token = null
        }
    }
});