<template>
  <div id="app">
    <div class="front">
      <!-- AppHeader -->
      <app-header></app-header>

      <div class="container-fluid">
        <div class="row">
          <!-- AppLeft -->
          <app-left></app-left>
          <!-- 路由对应的显示 -->
		  <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//局部组件
import AppHeader from "./components/AppHeader";
import AppLeft from "./components/AppLeft";

export default {
  name: "app",
  //注册子组件
  components: {
    //在这里注册组件，不然无法使用
    AppHeader,
    AppLeft
  }
};
</script>

<style>
</style>
