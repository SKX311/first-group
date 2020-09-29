<template>
  <div id="app">
<<<<<<< HEAD
=======
    <router-view />
>>>>>>> 3e7634bbe2c16ec40cc956f666cc6e57a5fb4e8a
    <div v-show="$route.meta.showTabbar">
      <van-tabbar route>
        <van-tabbar-item to="/"><img src="http://localhost:8080/img/tubiao1.png" alt="" style="width:0.4rem"/><p>首页</p></van-tabbar-item>
        <van-tabbar-item to="/CourseHome"><img src="http://localhost:8080/img/tubiao02.png" alt="" style="width:0.4rem"/><p>课程</p></van-tabbar-item>
        <van-tabbar-item to="/RecordHome"><img src="http://localhost:8080/img/tubiao03.png" alt="" style="width:0.3rem"/><p>约课记录</p></van-tabbar-item>
        <van-tabbar-item to="/ExerciseHome"><img src="http://localhost:8080/img/tubiao04.png" alt="" style="width:0.4rem"/><p>练习</p></van-tabbar-item>
        <van-tabbar-item to="/MineHome"><img src="http://localhost:8080/img/tubiao05.png" alt="" style="width:0.4rem"/><p>我的</p></van-tabbar-item>
      </van-tabbar>
    </div>
<<<<<<< HEAD
    <router-view />
=======
    <div
      class="box"
      id="Mailbox"
      @touchmove.prevent="Mailbox"
      @click="$router.push('/Service')"
    >
      <van-icon name="hot-o" color="snow" size="1.5rem" />
    </div>
>>>>>>> 3e7634bbe2c16ec40cc956f666cc6e57a5fb4e8a
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
<<<<<<< HEAD
// .grid{
//   height: 0.96rem;
// }
.van-tabbar-item{
  text-align: center;
  // img{
  //   // margin-top: 5px;
  // }
}
.van-tabbar-item--active{
  color: #FF6B00 !important;
=======
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
>>>>>>> 3e7634bbe2c16ec40cc956f666cc6e57a5fb4e8a
}
</style>
