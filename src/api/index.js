/**
 * api接口的统一出口
 */

// 用户模块接口
import user from '@/api/user';
import region from '@/api/region';
// 其他模块的接口……

// 导出接口
export default {
    user,
    region,
    // ……
}
