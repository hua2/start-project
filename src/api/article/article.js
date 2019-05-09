/**
 * article模块接口列表
 */

import base from '../base'; // 导入接口域名列表
import axios from '../../utils/http'; // 导入http中创建的axios实例

const article = {
    // 新闻列表
    articleList () {
        return axios.get(`${base.sq}/topics`);
    },
    // 新闻详情,演示  (定义调用接口的方法，根据需求传参，并返回数据)
    articleDetail (id, params) {
        const a = axios.post(`${base.sq}/authenticate`, {
            params: params
        });
        return a
    },
    // post提交
    login () {
        return axios.post(`${base.sq}/accesstoken`,);
    }
    // 其他接口…………
}

export default article;