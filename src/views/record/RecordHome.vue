<template>
  <div class="big_div">
    <p><span>约课记录</span></p>

    <van-tabs v-model="active" title-active-color="orangered">
      <van-tab title="待上课">
        <div class="class_boxs">
          <div class="class_box">
            <div class="class_img">
              <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png" />
            </div>
            <span style="text-align: center">还没有待上课记录</span>
          <p>   <span  class="button"  @click="classyue">立即约课</span></p> 
          </div>
        </div>
      </van-tab>

      <van-tab title="已上课">
        <div class="class_boxs">
          <div class="class_box">
            <div class="class_img">
              <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png" />
            </div>
            <span style="text-align: center"> 还没有上课记录哦</span>
              <p><span class="button" @click="classyue">立即约课</span></p>   
          </div>
        </div>
      </van-tab>

      <van-tab title="已取消">
        <div class="class_boxs">
          <div class="class_box">
            <div class="class_img">
              <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png" />
            </div>
            <span style="text-align: center">还没有上课记录哦</span>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 0,
      active: 0,
    };
  },
  methods:{
    classyue(){
      this.$router.push({
        path:'/Coach'
      })
    }
  }
};
</script>

<style scoped>
* {
  font-size: 18px;
}
.van-tab__pane {
  width: 100%;
}
.big_div p {
  text-align: center;
}
.class_boxs {
  width: 100%;
  height: 11rem;
  background-color: rgb(240, 242, 245);
}
.class_box {
  background-color: rgb(240, 242, 245);
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* margin: 0 auto; */
}
.class_img {
  width: 30%;
  height: 2rem;
  margin: auto;
}
.class_img img {
  width: 100%;
  height: 2rem;
}
.button{
    display: block;
    width: 30%;
    height: 0.6rem;
    text-align: center;
   line-height: 0.6rem;
   color: white;
    background-color: rgb(235, 97,0);
    margin:auto ;
}
</style>