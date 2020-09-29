<template>
  <div>
    <!-- navbar -->
    <van-nav-bar title="日历" left-text="返回" left-arrow @click-left="$router.go(-1)"/>
    <!-- navbar -->
    <!-- 日历页面 -->
    <van-calendar
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '500px' }"
    />
    <!-- 日历页面 -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>