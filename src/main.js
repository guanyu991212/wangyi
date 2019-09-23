import Vue from 'vue'
import App from './App.vue'

// 引入路由器,并注册
import router from './router'
import 'lib-flexible/flexible.js'
import store from './store'
import './mock/mock'
// 引入validate.js文件
import './validate.js'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, // 注册路由器
  store // 注册仓库
})
