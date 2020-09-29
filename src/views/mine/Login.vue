<template>
  <div>
    <!-- 登录页banner图 -->
    <div class="box_banner">
      <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" alt="" />
    </div>
    <!-- 登录页banner图 -->
    <!-- 帐号框密码框 -->
    <div class="box_username">
      <van-cell-group>
        <van-field v-model="username" placeholder="请输入账号" />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
        />
      </van-cell-group>
    </div>
    <!-- 帐号框 -->
    <!-- 找回密码部分 -->
    <div class="box_password">
      <span> 找回密码 </span>
      <span> 注册/验证码登录 </span>
    </div>
    <!-- 找回密码部分 -->
    <!-- 登录按钮 -->
    <div class="box_btn">
      <van-button
        @click="OnClick"
        size="large"
        hairline
        round
        color="linear-gradient(to right, #ff6034, #ee0a24)"
      >
        登录
      </van-button>
    </div>
    <!-- 登录按钮 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "", //帐号框内容
      password: "", //密码框内容
    };
  },
  methods: {
    OnClick() {
      this.$axios
        .post("http://ceshi5.dishait.cn/admin/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          var token = res.data.data.token;
          this.token = localStorage.setItem("token", token);
          this.$router.push("/MineHome");
        });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.box_banner {
  width: 88%;
  height: 2.5rem;
  margin-left: 15%;
}
.box_banner img{
    width: 70%;
    height: 1rem;
    margin-top: 0.48rem;
}
.box_btn {
  width: 88%;
  margin-left: 5%;
  height: 2rem;
}
.box_username {
  width: 80%;
  margin-left: 5%;
  height: 2rem;
  /* border: 1px solid #000; */
}
.box_password {
  width: 75%;
  margin-left: 10%;
  height: 1.5rem;
  /* border: 1px solid #000; */
  display: inline-flex;
  justify-content: space-between;
}
</style>