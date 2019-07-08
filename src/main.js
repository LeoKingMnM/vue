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

//导入英雄列组件
import HeroList from './views/heroes/HeroList.vue';
import WeaponList from './views//wapons/WeaponList.vue';
import EquipList from './views//equips/EquipList.vue';


//创建路由对象
const router = new VueRouter ({
  //配置路由规则
  routes:[
    {name:'home',path:'/',redirect:'heroes'},
    {name:'heroes',path:'/heroes',component:HeroList},
    {name:'wapons',path:'/wapons',component:WeaponList},
    {name:'equips',path:'/equips',component:EquipList},
  ]
})

new Vue({
  render: h => h(App),
  //配置路由对象
  router,
  HeroList,
  WeaponList,
  EquipList,
}).$mount('#app')
