<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Hero List</h2>
    <!-- <a class="btn btn-success" href="add.html">Add</a> -->
    <router-link to="./HeroAdd.vue" class="btn btn-success">Add</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item , index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.garden }}</td>
            <td>
              <a href="edit.html">编辑</a>
              &nbsp;&nbsp;
              <a href="javascript:;" @click="del">删除</a>
            </td>
            <!-- <tr>
              <td>1</td>
              <td>liu</td>
              <td>nv</td>
            </tr> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//导入axios
import axios from 'axios';
export default {
  data() {
    return {
      list:[]
    }
  },
  mounted(){
    //发送请i去获取数据
    this.loadData()
  },
  methods:{
    //发送请求
    loadData(){
      axios
        .get('')
        .then( 
          (response) => {
            const {data,status} = response
            if (status==200) {
              this.list = data
            }else {
              alert('获取数据失败')
            }
          }
        )
        .catch((err)=>{
          console.log('服务器异常' + err)
        })
    },
    del(id) {
      //删除提示
      if (!confirm('确认删除吗')){
        return false
      }
      //删除
      axios
        .delete(``)
        .then((response)=>{
          const {status}=response
          if (status == 200){
            this.loadData()
          }else{
            alert('取消')
          }
        })
    }
  }
};
</script>

<style>
</style>
