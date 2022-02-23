<template>
  <div class="im">
    <img :src="imgurl" :width="1900" :height="850" alt="" />
  </div>
  <div class="front">
    <el-card class="card">
      <el-form ref="elForm" :model="formData" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="formData.UserName"
            placeholder="请输入用户名"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="formData.UserPass"
            placeholder="请输入密码"
            clearable
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          
          <el-button class="but" type="primary" @click="login()"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>

</template>
<script>
export default {
  data() {
      return{
        imgurl: require("../assets/cctv.jpg"),
          formData:{
            UserName:"",
            UserPass:""
          }
      }
  },
  mounted()
  {

  },
  methods:{

  }
};
</script>
<style scoped>
.im{
   z-index: -1;
  position: absolute;
  margin-top: 0px;
}
.front {
  z-index: 1;
  position: absolute;
}
.card {
  width: 350px;
  height: 200px;
  margin-left: 1300px;
  margin-top: 300px;
  background-color: darkturquoise;
  border: 0px solid darkturquoise;
}
</style>
