<template>
  <div id="app">
    
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
    <router-view />
    
  </div>
</template>

<style lang="scss">
* {
  font-size: 0.24rem;
}

</style>
