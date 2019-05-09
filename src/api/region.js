/**
 * region模块接口列表
 * @author lyh
 * @date 2019-05-09
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例

const region = {
    // 地区  (定义调用接口的方法，根据需求传参，并返回数据)
    regionData () {
        return axios.get(`${base.api}/regions`)
    }
};

export default region;