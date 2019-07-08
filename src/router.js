import Vue from 'vue'
//导入 vue-router
import VueRouter from 'vue-router';
//配置vue插件vue-souter
Vue.use(VueRouter);

//导入英雄列组件
import HeroList from './views/heroes/HeroList.vue';
import WeaponList from './views//wapons/WeaponList.vue';
import EquipList from './views//equips/EquipList.vue';
//导入添加组件
import HeroAdd from './views/heroes/HeroAdd.vue'


//创建路由对象
export default new VueRouter ({
  linkActiveClass:'active',
  
  //配置路由规则
  routes:[
    {name:'home',path:'/',redirect:'heroes'},
    {name:'heroes',path:'/heroes',component:HeroList},
    {name:'wapons',path:'/wapons',component:WeaponList},
    {name:'equips',path:'/equips',component:EquipList},
    {name:'heroesadd',path:'/heroes/add',component:HeroAdd},
  ]
})

//导出路由
