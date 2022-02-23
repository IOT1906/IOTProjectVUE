<template>
  <div>
    <el-container>
      <el-aside width="400px">
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
              <el-menu-item index="1-1">发起流程</el-menu-item>
              <el-menu-item index="1-2">我的请求</el-menu-item>
              <el-menu-item index="1-3">我处理的流程</el-menu-item>
              <el-menu-item index="1-4">所有流程</el-menu-item>
        
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
              <el-menu-item index="2-1">年假维护</el-menu-item>
              <el-menu-item index="2-2">请假维护</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="4">
              <template #title>
                <span>文档管理</span>
              </template>
              <el-menu-item index="2-1">流程的所有附件</el-menu-item>
              <el-menu-item index="2-2">流程的名称</el-menu-item>
              <el-menu-item index="2-3">流程发起的文件</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="5">
              <template #title>
                <span>报表管理</span>
              </template>
              <el-menu-item index="2-1">请假报表</el-menu-item>
              <el-menu-item index="2-2">财务报表</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>Main</el-main>
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
