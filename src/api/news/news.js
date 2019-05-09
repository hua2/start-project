/**
 * article模块接口列表
 */

import base from '../base'; // 导入接口域名列表
import axios from '../../utils/http'; // 导入http中创建的axios实例

const news = {
    // 新闻列表
    newsList () {
        return axios.get(`${base.sq}/topics`);
    },
    // 新闻详情,演示
    newsDetail (id, params) {
        return axios.post(`${base.sq}/authenticate`, {
            params: params
        });
    }
    // 其他接口…………
}

export default news;