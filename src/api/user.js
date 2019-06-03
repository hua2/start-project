/**
 * user模块接口列表
 * @author lyh
 * @date 2019-05-09
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例

const user = {
    // 用户登录  (定义调用接口的方法，根据需求传参，并返回数据)
    login (data) {
        return axios.post(`${base.api}/authenticate`, data)
    },
    getAccount () {
        return axios.get(`${base.api}/account`)
    },
    updateUser (data) {
        return axios.post(`${base.api}/account`,data)
    },
    changePwd (data) {
        return axios.post(`${base.api}/account/change-password`,data)
    }
};

export default user;