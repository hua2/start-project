/**
 * api接口的统一出口
 */

// 用户模块接口
import user from '@/api/user';
import region from '@/api/region';
import country from '@/api/country';
import department from '@/api/department';
import task from '@/api/task';
import employ from '@/api/employ';
import userManage from '@/api/userManage';
// 其他模块的接口……

// 导出接口
export default {
    user,
    region,
    country,
    department,
    task,
    employ,
    userManage
    // ……
}
