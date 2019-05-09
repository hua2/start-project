//解决跨域问题，访问其他链接
module.exports = {
    devServer: {
    proxy: {
        '/api': {
            target: 'http://www.liuyonghua.cn:8080',
                ws: true,
                changeOrigin: true
        }
    }
}
}