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
    <!-- 空状态 -->
    <van-empty description="暂无开通记录" />
    <!-- 空状态 -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>