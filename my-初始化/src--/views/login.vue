<template>
  <div class="box">
    <div class="login">
      <h2>电商后台管理系统</h2>
      <br />
      <el-input
        v-model="username"
        placeholder="请输入内容"
        prefix-icon="el-icon-user-solid"
        @blur="user"
      ></el-input> <span v-show="flag">正确</span><span v-show="flag1">错误</span>
      <br />
      <br />
      <br />
      <el-input
        placeholder="请输入密码"
        v-model="pwd"
        show-password
        prefix-icon="el-icon-unlock"
        @blur="mima"
      ></el-input>
      <br />
      <br />
      <el-button type="primary" @click="dl">登录</el-button>
      <el-button type="info">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pwd: "",
     flag:false,
     flag1:false
    };
  },
  methods: {
    dl() {
      if (this.username == "" || this.pwd == "") {
        return alert("内容不能为空");
      } else {
        localStorage.setItem("user", this.username);
        alert("登录成功");
        this.$router.push("/");
      }
    },
    user(){
         var reg =/^[a-zA-Z0-9_-]{4,16}$/
         if(this.username==reg){
           this.flag = true
         }
    },
    pwd(){
        var reg1 =/^[a-zA-Z0-9_-]{4,16}$/
        if(this.pwd==reg1){
            this.falg = true
        }
    }
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 500px;
  height: 300px;
  background: #fff;
  border: 1px solid #ddd;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 40%;
  // margin-top: 300px;
  padding-top: 60px;
}
.box {
  width: 100%;
  height: 1000px;
  background: #2b4b6b;
}
</style>