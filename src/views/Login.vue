<template>
  <div class="login">
    <div class="content">
      <p>账号：<input type="text" v-model="user" /></p>
      <p>密码：<input type="password" v-model="pwd" /></p>
      <p>
        <el-button type="primary" @click="login()">登录</el-button>
        <el-button type="primary">注册</el-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      pwd: "",
      ss: [],
      account: '',
      password: "",
      fullName: "",
      displayName:"",
    };
  },
  methods: {
    login() {
      this.$axios({
        url:
          "http://localhost:60618/api/Login?Account=" +
          this.user +
          "&Password=" +
          this.pwd,
        method: "get",
      }).then((Response) => {
        console.log(Response);
        if (Response.data == "登录失败") {
          alert("登录失败");
        } else {
          this.ss = Response.data.ss;
          this.account = this.ss.account;
          this.password = this.ss.password;
          this.fullName = this.ss.account;
          this.displayName = this.ss.displayName;
          window.localStorage["account"] = this.account;
          window.localStorage["password"] = this.pwd;
          window.localStorage["fullName"] = this.fullName;
          window.localStorage["displayName"] = this.displayName;
          this.$router.push("/Menu?Account=" + this.user);
          this.$message("欢迎"+this.displayName+"登录成功");
        }
      });
    },
  },
};
</script>
<style>
.login {
  width: 100%;
  height: 850px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yanlutong.com%2Fuploadimg%2Fimage%2F20210324%2F20210324143044_88216.gif&refer=http%3A%2F%2Fimg.yanlutong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648378334&t=079f88fa79610deff970529d5b5eb5ef");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.content {
  width: 500px;
  height: 300px;
  background: rgba(152, 162, 209, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}
input {
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  opacity: 0.4;
}
</style>
