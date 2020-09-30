<template>
  <div>
    <!-- navbar收藏页面 -->
    <van-nav-bar
      title="我的收藏"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- navbar关注收藏页面 -->
    <!-- 空状态 -->
    <van-empty description="暂无收藏" v-show="isShow" />
    <!-- 空状态 -->
    <div class="box">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true, //空状态显示隐藏
      list: [], //
    };
  },
  mounted() {
    this.list = localStorage.data;
  },
};
</script>

<style scoped>

</style>