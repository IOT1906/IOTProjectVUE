<template>
  <div>
    <el-container>
      <el-aside width="300px">
        <el-col>
          <h5>组织架构管理</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            style="width:230px"
            @open="handleOpen"
            @close="handleClose"
          >
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
  data() {},
  mounted() {},
  methods: {},
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