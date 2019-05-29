/**
 * country模块接口列表
 * @author lyh
 * @date 2019-05-13
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例

const country = {
    // 地区  (定义调用接口的方法，根据需求传参，并返回数据)
    getCountry(params) {
        return axios.get(`${base.api}/countries/`, {params: params})
    },
    createCountry(data) {
        return axios.post(`${base.api}/countries`, data)
    },
    updateCountry(data) {
        return axios.put(`${base.api}/countries/`, data)
    },
    deleteCountry(id) {
        return axios.delete(`${base.api}/countries/${id}`)
    },

};

export default country;