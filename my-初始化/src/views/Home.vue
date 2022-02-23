<template>
  <div>
    <div class="box">
      <h2>登录</h2>
      <p>
        用户名：<input type="text" v-model="username" @blur="user" />
        <span v-show="flag==1">🥰</span> <span v-show="flag==2">😭</span>
      </p>
      <p>
        密 码：<input type="text" v-model="pwd" @blur="pass" />
       <span v-show="flag1==1">🥰</span> <span v-show="flag1==2">😭</span>
      </p>
      <button @click="dl">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pwd: "",
      flag: 0,
      flag1: 0,
    };
  },
  methods: {
    dl() {
      if (this.username == "" || this.pwd == "") {
        return alert("内容不能为空");
      } else {
        localStorage.setItem("username",JSON.stringify(this.username))
        alert("登陆成功")
        this.$router.push("/about?username="+this.username);
        this.username=""
        this.pwd=""
      }
    },
    user() {
      var reg = /^[a-zA-Z0-9_-]{4,16}$/;
      if (reg.test(this.username)) {
        this.flag=1
      }else{
         this.flag=2
      }
    },
    pass() {
      var reg1 =/^[a-zA-Z0-9_-]{4,16}$/;
      if (reg1.test(this.pwd)) {
        this.flag1=1
      }else{
         this.flag1=2
      }
    },
  },
};
</script>

<style lang="scss">
.box {
  width: 300px;
  height: 250px;
  border: 1px solid #ccc;
  margin: auto;
  text-align: center;
}
</style>