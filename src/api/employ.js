/**
 * country模块接口列表
 * @author lyh
 * @date 2019-05-13
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例

const employ = {
    //     // 地区  (定义调用接口的方法，根据需求传参，并返回数据)
    getEmployee (params) {
        return axios.get(`${base.api}/employees/`,{params:params})
    },
    deleteEmployee (id) {
        return axios.delete(`${base.api}/employees/${id}`)
    },
    createEmployee (data) {
        return axios.post(`${base.api}/employees`,data)
    },
    updateEmployee (data) {
        return axios.put(`${base.api}/employees/`,data)
    }

};

export default employ;