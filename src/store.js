import Vuex from 'vuex';
import Vue from 'vue';

import api from './api' // 导入api接口

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        token: null,
        account: null,

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
        },
        setAccount: (state, data) => {
            state.account = data;
        },
        initToken: (state) => {
            const token = localStorage.getItem('token') || sessionStorage.getItem('token');
            if (token) {
                state.token = token;
            }
        }

    },
    actions: {
        initAccount({commit}) {
            api.user.getAccount().then(res => {
                console.log(res.data);
                commit('setAccount', res.data);
            })
        }
    }
});