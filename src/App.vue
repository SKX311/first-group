<template>
  <div id="app">
    <router-view />
    <div v-show="$route.meta.showTabbar">
      <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/CourseHome">课程</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/RecordHome"
          >约课记录</van-tabbar-item
        >
        <van-tabbar-item icon="setting-o" to="/ExerciseHome"
          >练习</van-tabbar-item
        >
        <van-tabbar-item icon="setting-o" to="/MineHome">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <div
      class="box"
      id="Mailbox"
      @touchmove.prevent="Mailbox"
      @click="$router.push('/Service')"
    >
      <van-icon name="hot-o" color="snow" size="1.5rem" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Mailbox(event) {
      var ss = document.querySelector("#Mailbox");
      var x = event.targetTouches[0].clientX;
      var y = event.targetTouches[0].clientY;
      var clientW = document.documentElement.clientWidth;
      var clientH = document.documentElement.clientHeight;
      ss.style.left = x - 25 + "px";
      ss.style.top = y - 25 + "px"; // 检测碰撞
      if (x < 25) {
        x = 25;
      } else if (x > clientW - 25) {
        x = clientW - 25;
      }

      if (y < 25) {
        y = 25;
      } else if (y > clientH - 25) {
        y = clientH - 25;
      }
      ss.style.left = x - 25 + "px";
      ss.style.top = y - 25 + "px";
    },
  },
};
</script>


<style lang="scss">
* {
  font-size: 0.24rem;
}
.box {
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  bottom: 3rem;
  background-color: blue;
  z-index: 9999;
  border-radius: 50%;
  text-align: center;
  line-height: 2rem;
  margin: 0 auto;
}
</style>
