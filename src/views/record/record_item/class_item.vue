<template>
  <div>
    <!-- 预约课程 -->
    <div class="back_color">
      <div class="back_font">
        <div @click="go">
          <img
            data-v-0da794c7=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC"
          />
        </div>
        <div style="color: white">预约课程</div>
        <div></div>
      </div>

      <div class="img_box">
        <img
          class="class-imgs"
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
        />

        <div>
          <p style="font-size: 14px">杨德胜</p>
          <p style="font-size: 12px">
            <span style="font-size: 14px; color: grey">男</span>
            <span style="font-size: 12px; color: grey">30年教龄</span>
          </p>
        </div>

        <div>
          <button
          class="buttons"
            style="
              border: 1px solid orange;
              font-size: 14px;
              color: orange;
              border-radius: 25px;
            "
            @click="xiangq"
          >
            查看详情
          </button>
        </div>
      </div>
    </div>
    <div class="back_colors">
      <p class="back_p">
        <b style="color: orange">|</b>
        <span style="font-size: 16px"
          >选择时间<span style="font-size: 12px; padding-left: 0.2rem"
            >(北京时间)</span
          ></span
        >
      </p>
      <!-- 选择时间 -->
      <div class="back_time">
        <!-- 标签栏滚动 -->
        <van-tabs title-active-color="orange" color="blue">
          <van-tab v-for="(item, index) in num" :key="index" :title="item">
      
          </van-tab>
        </van-tabs>
      </div>

     <div class="back_imgz">
       <img class="iii" src="https://wap.365msmk.com/img/empty.0d284c2e.png">
       </div> 

  
    </div>
    <van-button color="orange"  block>立即预约</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: ["周一", "周二", "周三","周四","周五","周六","周日","周一","周二","周三"],
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    xiangq(){
      this.$router.push({
        path:'/TeacherDetails'
      })
    }
  },
};
</script>
<style scoped>
* {
  font-size: 20px;
}
.back_color {
  width: 100%;
  height: 1.8rem;
  background: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(rgb(122, 179, 231)),
    to(rgb(28, 116, 216))
  );
}
.back_font {
  padding-top: 0.2rem;
  display: flex;
  justify-content: space-around;
}
.img_box {
  border-radius: 3%;
  width: 95%;
  height: 1.6rem;
  background-color: rgb(243, 242, 242);
  margin: 0 auto;
  display: flex;
  /* justify-content: space-around; */
}

.class-imgs {
  margin: 0.2rem;
  width: 15%;
  height: 1.2rem;
  border-radius: 50%;
  /* align-items: center; */
  line-height: 1.2rem;
}
.buttons {
  margin: 30px;
}
.back_colors {
  width: 100%;
  height: 10rem;
  background-color: rgb(240, 242, 245);
}
.back_p {
  padding-top: 0.2rem;
  margin-left: 0.2rem;
}
.back_time {
  width: 95%;
  height: 1rem;
  background-color: white;
  margin-left: 0.2rem;
}

.back_imgz{
 width: 2rem;
 /* height: 4rem; */
  margin: 4px 1.5rem;


}
.iii{
  width: 5rem;
}
</style>