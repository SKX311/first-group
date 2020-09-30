<template>
  <div id="app">
    <router-view />
    <div v-show="$route.meta.showTabbar">
      <van-tabbar route>
        <van-tabbar-item to="/"><img src="http://localhost:8080/img/tubiao1.png" alt="" style="width:0.4rem"/><p>首页</p></van-tabbar-item>
        <van-tabbar-item to="/CourseHome"><img src="http://localhost:8080/img/tubiao02.png" alt="" style="width:0.4rem"/><p>课程</p></van-tabbar-item>
        <van-tabbar-item to="/RecordHome"><img src="http://localhost:8080/img/tubiao03.png" alt="" style="width:0.3rem"/><p>约课记录</p></van-tabbar-item>
        <van-tabbar-item to="/ExerciseHome"><img src="http://localhost:8080/img/tubiao04.png" alt="" style="width:0.4rem"/><p>练习</p></van-tabbar-item>
        <van-tabbar-item to="/MineHome"><img src="http://localhost:8080/img/tubiao05.png" alt="" style="width:0.4rem"/><p>我的</p></van-tabbar-item>
      </van-tabbar>
    </div>
    
    <!-- <div
      class="boxone"
      id="Mailbox"
      @touchmove.prevent="Mailbox"
      @click="$router.push('/Service')"
    >
      <van-icon name="hot-o" color="snow" size="1.5rem" />
    </div> -->
      <EmailBox></EmailBox>
  </div>
</template>

<script>
import EmailBox from "./components/emailbox/EmailBox"
export default {
  components:{
    EmailBox
  }
};
</script>

<style lang="scss">
* {
  font-size: 0.24rem;
}
// .grid{
//   height: 0.96rem;
// }

.van-tabbar-item{
  text-align: center;
}
.van-tabbar-item--active{
  color: #FF6B00 !important;
.boxone {
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
}


</style>
