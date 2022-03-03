<template>
  <div>
    <el-container>
      <el-aside width="300px">
        <el-col>
          <h5 >组织架构管理</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            style="width:230px;"
            @open="handleOpen"
            background-color="lawngreen"
            @close="handleClose"
          >
          <img :src="aa" width="210" height="150" /><br/>
          <span>{{this.Account}}</span>
            <el-sub-menu index="1">
              <template #title>
                <span>流程模块</span>
              </template>
              <el-sub-menu index="1-1">
                <template #title>发起流程</template>
                <el-menu-item index="1-1-1" @click="this.$router.push('/Leave')">请假申请</el-menu-item>
                <el-menu-item index="1-1-2" @click="this.$router.push('/Dimi')">离职审批</el-menu-item>
                <el-menu-item index="1-1-3" @click="this.$router.push('/Year')">年度计划</el-menu-item>
                <el-menu-item index="1-1-4" @click="this.$router.push('/Man')">人力资源需求申请</el-menu-item>
                <el-menu-item index="1-1-5" @click="this.$router.push('/Entering')">员工录入申请</el-menu-item>
                <el-menu-item index="1-1-6" @click="this.$router.push('/HandOver')">离职交接申请</el-menu-item>
                <el-menu-item index="1-1-7" @click="this.$router.push('/Interview')">员工离职面谈申请</el-menu-item>
                <el-menu-item index="1-1-8" @click="this.$router.push('/Carapply')">用车申请</el-menu-item>
                <el-menu-item index="1-1-9" @click="this.$router.push('/Rece')">接待申请表</el-menu-item>
                <el-menu-item index="1-1-10" @click="this.$router.push('/Engrave_chapter')">刻章申请表</el-menu-item>
                <el-menu-item index="1-1-11" @click="this.$router.push('/File_management')">文件管理</el-menu-item>
                <el-menu-item index="1-1-12" @click="this.$router.push('/Announcement_information')">公告基本信息</el-menu-item>
                <el-menu-item index="1-1-13" @click="this.$router.push('/Acquisitionrequest')">固定资产购置申请表</el-menu-item>
                <el-menu-item index="1-1-14" @click="this.$router.push('/Radd')">人力资源需求申请表</el-menu-item>
                <el-menu-item index="1-1-15" @click="this.$router.push('/Use_seal')">用章申请表</el-menu-item>
                <el-menu-item index="1-1-16" @click="this.$router.push('/Car_insurance')">车辆保险记录表</el-menu-item>
                <el-menu-item index="1-1-17" @click="this.$router.push('/Car_upkeep')">车辆保养记录表</el-menu-item>
                <el-menu-item index="1-1-18" @click="this.$router.push('/Car_service')">车辆维修记录表</el-menu-item>
                <el-menu-item index="1-1-19" @click="this.$router.push('/Car_unlawful')">车辆违章记录表</el-menu-item>
                <el-menu-item index="1-1-20" @click="this.$router.push('/Meeting')">会议新增表</el-menu-item>
                <el-menu-item index="1-1-21" @click="this.$router.push('/Procur')">日常用品采购</el-menu-item>
                <el-menu-item index="1-1-22" @click="this.$router.push('/borrow')">固定资产资料借用流程</el-menu-item>
                <el-menu-item index="1-1-23" @click="this.$router.push('/connect')">固定资产交接申请流程</el-menu-item>
              </el-sub-menu>
             <el-sub-menu index="1-2">
                <template #title>我的请求</template>
                <el-menu-item index="1-2-1" @click="this.$router.push('/Leave')">请假申请</el-menu-item>
                <el-menu-item index="1-2-2" @click="this.$router.push('/HandOver')">离职交接申请</el-menu-item>
                <el-menu-item index="1-2-3" @click="this.$router.push('/Interview')">员工离职面谈申请</el-menu-item>
                <el-menu-item index="1-2-4" @click="this.$router.push('/Carapply')">用车申请</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="1-3">我处理的流程</el-menu-item>
               <el-sub-menu index="1-4">
                <template #title>所有流程</template>
                <el-menu-item index="1-4-1" @click="this.$router.push('/Leave')">请假申请</el-menu-item>
                <el-menu-item index="1-4-2" @click="this.$router.push('/Dimi')">离职审批</el-menu-item>
                <el-menu-item index="1-4-3" @click="this.$router.push('/Year')">年度计划</el-menu-item>
                <el-menu-item index="1-4-4" @click="this.$router.push('/Man')">人力资源需求申请</el-menu-item>
                <el-menu-item index="1-4-5" @click="this.$router.push('/Entering')">员工录入申请</el-menu-item>
                <el-menu-item index="1-4-6" @click="this.$router.push('/HandOver')">离职交接申请</el-menu-item>
                <el-menu-item index="1-4-7" @click="this.$router.push('/Interview')">员工离职面谈申请</el-menu-item>
                <el-menu-item index="1-4-8" @click="this.$router.push('/Carapply')">用车申请</el-menu-item>
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
  methods: {},
  created(){
    this.$message("欢迎"+this.Account+"登录成功");
     if(this.Account=="侯晓晨")
       {
         this.aa = require("../assets/1.gif")
       }
       else if(this.Account=="田杰")
       {
         this.aa = require("../assets/123.png")
       }
       else if(this.Account=="李浩勇")
       {
         this.aa = require("../assets/li.jpg")
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