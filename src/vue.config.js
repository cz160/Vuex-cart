module.exports = {
    devServer:{
        proxy:{
            '/mz':{
                target:'http://mbrand.xiu.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/mz': ''
                }
            }
        }
    }
}