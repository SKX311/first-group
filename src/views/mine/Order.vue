<template>
  <div>
    <!-- navbar课程订单 -->
    <van-nav-bar
      title="约课订单"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- navbar课程订单 -->
    <!-- 标签页 -->
    <van-tabs>
      <van-tab title="全部订单"></van-tab>
      <van-tab title="待支付"></van-tab>
      <van-tab title="已完成"></van-tab>
      <van-tab title="已取消"></van-tab>
    </van-tabs>
    <!-- 标签页 -->
    <!-- 空状态 -->
    <van-empty description="暂无订单" />
    <!-- 空状态 -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>