/**
 * region模块接口列表
 * @author lyh
 * @date 2019-05-09
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例

const region = {
    // 国家  (定义调用接口的方法，根据需求传参，并返回数据)
    getRegion (params) {
        return axios.get(`${base.api}/regions`,{params:params})
    },
    createRegion (data) {
        return axios.post(`${base.api}/regions`,data)
    },
    deleteRegion (id) {
        return axios.delete(`${base.api}/regions/${id}`)
    },
    updateRegion (data) {
        return axios.put(`${base.api}/regions/`,data)
    }
};

export default region;