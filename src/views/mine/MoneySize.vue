<template>
  <div>
      <!-- navbar -->
      <van-nav-bar
      title="我的余额"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
      <!-- navbar -->
      <!-- 空状态 -->
      <van-empty description="暂时没有更多了" />
      <!-- 空状态 -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>