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
    <div class="details" v-show="isList">
      <div class="details-top">
        <div style="font-size: 16px">{{ this.list.title }}</div>
        <div>
          <van-rate
            v-model="value"
            :size="25"
            :count="1"
            color="#ffd21e"
            void-icon="star"
            void-color="#999"
          />
        </div>
      </div>
      <div class="state">{{this.list.status }}</div>
      <div class="classhour">共8课时|{{ this.list.signup }}</div>
      <div class="time">开课时间：{{ this.list.time }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true, //空状态显示隐藏
      isList:false,
      list: [], //
      value:1,
    };
  },
  mounted() {
    // console.log(JSON.parse(localStorage.getItem('data')));
    this.list = JSON.parse(localStorage.getItem('data'))
    if(this.list!== ''){
      this.isShow = false
      this.isList = true
    }else{
      this.isShow = true
      this.isList = false
    }
  },
  methods: {
  },
};
</script>

<style scoped>
.details {
  width: 100%;
  height: 3.5rem;
  background-color: #fff;
}
.details-top {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  background-color: #fff;
}
.state {
  color: orangered;
  font-size: 20px;
  margin-left: 0.5rem;
  margin-top: 0.3rem;
}
.classhour {
  color: #acacac;
  font-size: 14px;
  margin-left: 20px;
  margin-top: 0.3rem;
}
.time {
  color: #acacac;
  font-size: 14px;
  margin-left: 20px;
  margin-top: 0.3rem;
}
</style>