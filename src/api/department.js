/**
 * department模块接口列表
 * @author lyh
 * @date 2019-05-14
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例

const department = {
    // 团队  (定义调用接口的方法，根据需求传参，并返回数据)
    getDepartments () {
        return axios.get(`${base.api}/departments/`)
    },
    createDepartments (data) {
        return axios.post(`${base.api}/departments`,data)
    },
    updateDepartments(data){
        return axios.put(`${base.api}/departments/`,data)
    },
    deleteDepartments (id) {
        return axios.delete(`${base.api}/departments/${id}`)
    },

};

export default department;