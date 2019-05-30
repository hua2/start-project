/**
 * userManage模块接口列表
 * @author lyh
 * @date 2019-05-28
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例

const userManage = {
    // 用户管理 (定义调用接口的方法，根据需求传参，并返回数据)s
    getUsers(params) {
        return axios.get(`${base.api}/users`,{params:params})
    },
    deleteUsers(id) {
        return axios.delete(`${base.api}/users/${id}`)
    },
    createUsers(data) {
        return axios.post(`${base.api}/users`, data)
    },
    updateUsers(data) {
        return axios.put(`${base.api}/users/`, data)
    }
};

export default userManage;