const path = require('path')
function resolve(dir) {
  // return path.join(__dirname, '..', dir)
  return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // 目录地址
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': '' // rewrite path
        }
      }
    }
  }
  ,
  // 第三方库实现适配
  chainWebpack: config => {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 75 // 此处需要根据设计稿的宽度来设置  设计稿的宽度/10
      })
  }
}
