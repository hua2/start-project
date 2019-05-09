/**
 * api接口的统一出口
 */
// 文章模块接口
import article from '@/api/article/article';
import news from '@/api/news/news';
// 其他模块的接口……

// 导出接口
export default {
    article,
    news,
    // ……
}
