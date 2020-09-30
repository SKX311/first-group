<template>
  <div>
    <!-- nav -->
    <van-nav-bar
      title="设置密码"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- nav -->

    <div class="banner_username">
      <!-- 找回密码部分 -->
      <van-field v-model="username" center clearable placeholder="请输入手机号">
        <template #button>
          <van-button
            size="small"
            type="danger"
            @click="$toast('验证码已发送到您的手机')"
            >获取验证码</van-button
          >
        </template>
      </van-field>
      <van-field
        clearable
        v-model="password"
        type="password"
        placeholder="请输入验证码"
      />
    </div>
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

<style>
</style>