import Vue from 'vue'
import App from './App.vue'
import router from './router'

//全局引入element-ui工具
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
//引入jsonp请求工具，并 将其挂在到vue的原型上
import jsonp from '@/util/jsonp'
Vue.prototype.$jsonp = jsonp
//引入store并将其注入到根实例
import store from '@/store'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
