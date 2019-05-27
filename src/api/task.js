/**
 * task模块接口列表
 * @author lyh
 * @date 2019-05-15
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例

const task = {
    // 任务  (定义调用接口的方法，根据需求传参，并返回数据)s
    getTasks() {
        return axios.get(`${base.api}/tasks/`)
    },
    createTask(data) {
        return axios.post(`${base.api}/tasks/`, data)
    },
    updateTask(data) {
        return axios.put(`${base.api}/tasks/`, data)
    },
    deleteTask(id) {
        return axios.delete(`${base.api}/tasks/${id}`)
    },
};

export default task;