<template>
  <div>
    <!-- navbar关注老师页面 -->
    <van-nav-bar
      title="开通会员"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- navbar关注老师页面 -->
    <van-cell-group>
  <van-cell title="设置内容" @click="$router.push('/Password')"/>
  </van-cell-group>
    <van-button type="danger" block @click="ONCLICK">退出登录</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    ONCLICK() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>