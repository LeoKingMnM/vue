//入口

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入样式
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/index.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
