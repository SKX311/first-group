<template>
  <div>
    <!-- navbar关注老师页面 -->
    <van-nav-bar
      title="消息通知"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- navbar关注老师页面 -->
    <!-- 空状态 -->
    <van-empty description="暂无消息" />
    <!-- 空状态 -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>