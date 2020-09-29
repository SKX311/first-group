<template>
  <div>
    <!-- navbar导航条 -->
    <van-nav-bar
      title="我的学习"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    >
      <!-- 右侧跳转日历页面部分 -->
      <template #right>
        <van-icon name="calendar-o" size="25" @click="Calendar" />
      </template>
    </van-nav-bar>
    <!-- navbar导航条 -->
    <!-- 标签页部分 -->
    <van-tabs title-active-color="origin">
      <van-tab title="直播课(0)"></van-tab>
      <van-tab title="点播课(0)"></van-tab>
      <van-tab title="音频课(0)"></van-tab>
      <van-tab title="图文课(0)"></van-tab>
      <van-tab title="面授课(0)"></van-tab>
      <van-tab title="会员课(0)"></van-tab>
    </van-tabs>
    <!-- 标签页部分 -->
    <!-- 空状态部分 -->
    <van-empty description="还没有课程快去选择课程吧">
      <template #default>
        <!-- 选择课程按钮 -->
        <van-button
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          @click="ONCLICK"
        >
          选择课程
        </van-button>
        <!-- 选择课程按钮 -->
      </template>
    </van-empty>
    <!-- 空状态部分 -->
  </div>
</template>

<script>
export default {
  methods: {
    //跳转到日历页面
    Calendar() {
      // console.log('跳转到日历页面');
      this.$router.push("/Calendar");
    },
    //跳转到日历页面
    //选择课程按钮  跳转到特色课
    ONCLICK() {
      this.$router.push("/CourseHome");
    },
    //选择课程按钮  跳转到特色课
  },
};
</script>

<style>
</style>