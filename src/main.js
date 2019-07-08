//入口

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
//引入样式
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/index.css'

//设置通用地址和引入axios
import axiox from 'axiox'
Vue.prototype.axios = axiox



new Vue({
  render: h => h(App),
  //配置路由对象
  router,
}).$mount('#app')
