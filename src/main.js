//入口

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入样式
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/index.css'

//导入 vue-router
import VueRouter from 'vue-router';
//配置vue插件vue-souter
Vue.use(VueRouter);

//创建路由对象
const router = new VueRouter ({
  //配置路由规则
  routes:[

  ]
})

new Vue({
  render: h => h(App),
  //皮质路由对象
  router,
}).$mount('#app')
