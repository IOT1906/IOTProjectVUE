<template>
  <div>
         <div style="background-color: rgb(170, 207, 181);height: 50px;">
          <span style="text-align: center;font-size: 30px;color: rgb(245, 198, 10);">杭&nbsp;州&nbsp;申&nbsp;昊&nbsp;科&nbsp;技&nbsp;有&nbsp;限&nbsp;公&nbsp;司</span>
          
     <img :src="aa" width="50" height="50" style="float: left;"/>
     <span style="float: left;font-size: 30px;color: rgba(36, 221, 228, 0.801);">{{this.Account}}</span>
          </div>
    <el-container>
      <el-aside width="300px">
        
     
        <el-col>
        
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            style="width:230px;height: 849px;"
            background-color="rgb(170, 207, 181)"
            @open="handleOpen"
            @close="handleClose"
          > 
          
            <el-sub-menu index="1">
              <template #title>
                <span>流程模块</span>
              </template>
              <el-sub-menu index="1-1" @click="this.$router.push('/Choose')">
                <template #title>发起流程</template>
            
              </el-sub-menu>
             <el-sub-menu index="1-2">
                <template #title>我的请求</template>
                <el-menu-item index="1-2-1" @click="this.$router.push('/Leave')">请假申请</el-menu-item>
                <el-menu-item index="1-2-2" @click="this.$router.push('/HandOver')">离职交接申请</el-menu-item>
                <el-menu-item index="1-2-3" @click="this.$router.push('/Interview')">员工离职面谈申请</el-menu-item>
                <el-menu-item index="1-2-4" @click="this.$router.push('/Carapply')">用车申请</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="1-3">
                  <template #title>我处理的流程</template>
                 <el-menu-item index="1-3-1" @click="this.$router.push('/flow')">总流程处理</el-menu-item>
             </el-sub-menu>
                 <el-sub-menu index="1-4" @click="this.$router.push('/Choose')">
                <template #title>所有流程</template>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <span>系统管理</span>
              </template>
              <el-menu-item index="2-1">菜单管理</el-menu-item>
              <el-menu-item index="2-2">菜单权限管理</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <span>基础数据管理</span>
              </template>
              <el-menu-item index="3-1">年假维护</el-menu-item>
              <el-menu-item index="3-2">请假维护</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <span>文档管理</span>
              </template>
              <el-menu-item index="4-1">流程的所有附件</el-menu-item>
              <el-menu-item index="4-2">流程的名称</el-menu-item>
              <el-menu-item index="4-3">流程发起的文件</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="5">
              <template #title>
                <span>报表管理</span>
              </template>
              <el-menu-item index="5-1">请假报表</el-menu-item>
              <el-menu-item index="5-2">财务报表</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    

  </div>
</template>
<script>
export default {
  data() {
    return{
      Account: window.localStorage["displayName"],
        aa:"",
    }
  },
  mounted() {},
  methods: {
    
  },
  created(){
    
     if(this.Account=="侯晓晨")
       {
         this.aa = require("../assets/122.png")
       }
       else if(this.Account=="田杰")
       {
         this.aa = require("../assets/123.png")
       }
       else if(this.Account=="李浩勇")
       {
         this.aa = require("../assets/1.jpg")
       }
       else if(this.Account=="秦祥通")
       {
         this.aa = require("../assets/qin.png")
       }
       else if(this.Account=="吕龙江")
       {
         this.aa = require("../assets/lv.png")
       }
       
  }
};
</script>
<style>
.el-aside {
  color: var(--el-text-color-primary);
  text-align: center;
}

.el-main {
  color: var(--el-text-color-primary);
  text-align: center;
}

.common-layout > .el-container {
  margin-bottom: 40px;
}

</style>