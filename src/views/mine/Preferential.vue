<template>
  <div>
    <!-- navbar课程订单 -->
    <van-nav-bar
      title="我的优惠券"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- navbar课程订单 -->
    <!-- 标签页 -->
    <van-tabs>
      <van-tab title="未使用"></van-tab>
      <van-tab title="已使用"></van-tab>
      <van-tab title="已过期"></van-tab>
    </van-tabs>
    <!-- 标签页 -->
    <!-- 空状态 -->
    <van-empty description="暂无优惠券" />
    <!-- 空状态 -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>