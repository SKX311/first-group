<template>
  <div class="app">
    <div class="app_box">
      <img
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
        alt=""
      />
      <div class="banner_username">
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
        <div class="banner_span">
          <span @click="$router.push('/Username')"> 找回密码 </span>
          <span @click="$router.push('/SmsLogin')"> 注册/验证码登录 </span>
        </div>
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
    </div>
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
};
</script>

<style scoped>
.app {
  width: 100%;
  height: 8rem;
  /* background-color: aqua; */
}
.app_box {
  width: 80%;
  height: 8rem;
  margin-left: 10%;
  text-align: center;
  /* background-color: red; */
}
.app_box img {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
}
.banner_username {
  width: 80%;
  margin-left: 10%;
}
.banner_span {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  /* background-color: red; */
  display: inline-flex;
  justify-content: space-between;
}
</style>