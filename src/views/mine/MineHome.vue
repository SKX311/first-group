<template>
  <div>
    <!-- 我的页面背景板 -->
    <div class="box_banner_back_box">
      <div class="box_banner_back"></div>
      <!-- 头像显示部分 -->
      <div class="box_zindex">
        <!-- 头像显示部分盒子 -->
        <div class="box_head">
          <!-- 头像 -->
          <div class="box_head_radius">
            <img
              src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
              alt=""
            />
          </div>
          <!-- 右侧手机号部分 -->
          <div class="box_head_mobile">157****9665</div>
          <!-- 右侧手机号部分 -->
          <!-- 去约课tag -->
          <div class="box_tag" @click="OnClick">去约课</div>
          <!-- 去约课tag -->
          <!-- 头像 -->
        </div>
        <!-- 头像显示部分盒子 -->
        <!-- 头像下方特色课部分 -->
        <div class="box_footer">
          <div class="box_footer_container">
            <p class="count">0</p>
            <p class="tese">我的特色课</p>
            <p class="test">已购课程的学习</p>
          </div>
          <div class="box_footer_container">
            <p class="count">0</p>
            <p class="tese">一对一辅导</p>
            <p class="test">我的一对一老师</p>
          </div>
          <div class="box_footer_container">
            <p class="count">0.00</p>
            <p class="tese">查看剩余</p>
            <p class="test">剩余学习币</p>
          </div>
        </div>
        <!-- 头像下方特色课部分 -->
      </div>
      <!-- 头像显示部分 -->
    </div>
    <!-- 邀请好友注册部分 -->
    <div class="box_fellow" @click="ONCLICK">
      <div class="box_fellow_left">
        <van-icon size="0.8rem" name="send-gift-o" />
      </div>
      <div class="box_fellow_center">
        邀请好友注册APP,享多重好礼<br />
        限时特惠,多邀多得
      </div>
      <div class="box_fellow_right">
        <van-icon size="0.5rem" name="arrow" />
      </div>
    </div>
    <!-- 邀请好友注册部分 -->
    <!-- 课程相关 -->
    <div>
      <p class="font">课程相关</p>
        <van-grid>
          <van-grid-item icon="photo-o" text="关注的老师" />
          <van-grid-item icon="photo-o" text="我的收藏" />
        </van-grid>
    </div>
    <!-- 课程相关 -->
    <!-- 订单相关 -->
    <div>
      <p class="font">订单相关</p>
        <van-grid>
          <van-grid-item icon="photo-o" text="课程订单" />
          <van-grid-item icon="photo-o" text="会员订单" />
          <van-grid-item icon="photo-o" text="约课订单" />
        </van-grid>
    </div>
    <!-- 订单相关 -->
    <!-- 我的账户 -->
    <div>
      <p class="font">我的账户</p>
        <van-grid>
          <van-grid-item icon="photo-o" text="优惠劵" />
          <van-grid-item icon="photo-o" text="学习卡" />
          <van-grid-item icon="photo-o" text="会员" />
        </van-grid>
    </div>
    <!-- 我的账户 -->
    <!-- 自助服务 -->
    <div>
      <p class="font">自助服务</p>
        <van-grid>
          <van-grid-item icon="photo-o" text="我的消息" />
          <van-grid-item icon="photo-o" text="意见反馈" />
          <van-grid-item icon="photo-o" text="在线客服" />
          <van-grid-item icon="photo-o" text="设置" />
        </van-grid>
    </div>
    <!-- 自助服务 -->
    <!-- 我的页面背景板 -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //   约课
    OnClick() {
      console.log("约课");
    },
    //   约课
    //邀请好友注册
    ONCLICK() {
      console.log("邀请好友注册");
    },
    //邀请好友注册
  },
};
</script>

<style scoped>
.box_banner_back_box {
  width: 100%;
  height: 4.5rem;
  /* border: 1px solid #000; */
}
.box_banner_back {
  width: 100%;
  height: 2.3rem;
  background: rgb(252, 85, 0);
  border-radius: 0rem 0rem 2rem 2rem;
}
.box_zindex {
  width: 85%;
  height: 3.5rem;
  background-color: snow;
  margin-top: -1.5rem;
  margin-left: 7.5%;
  border-radius: 0.2rem;
}
.box_head {
  width: 99%;
  height: 50%;
  display: inline-flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 20px;
}
.box_head_radius {
  width: 1rem;
  height: 1rem;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  border-radius: 50%;
  background-color: red;
}
.box_head_radius img {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: -0.5rem;
  margin-top: -0.5rem;
  border-radius: 50%;
}
.box_head_mobile {
  position: absolute;
  top: 1.6rem;
  left: 2.7rem;
  font-size: 0.36rem;
}
.box_tag {
  width: 1rem;
  height: 0.48rem;
  text-align: center;
  line-height: 0.48rem;
  background-color: rgb(252, 85, 0);
  color: snow;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  position: absolute;
  top: 1.55rem;
  right: 0.65rem;
}
.box_footer {
  width: 100%;
  height: 50%;
  display: inline-flex;
  justify-content: space-around;
  /* background-color: red; */
}
.box_footer_container {
  width: 33%;
  height: 100%;
  /* background-color: black; */
}
.count {
  color: orange;
  font-size: 0.48rem;
  padding: 0rem;
  margin: 0rem;
  text-align: center;
}
.tese {
  color: black;
  text-align: center;
  padding: 0rem;
  margin: 0.1rem;
}
.test {
  color: gray;
  text-align: center;
  padding: 0rem;
  margin: 0.1rem;
}
.box_fellow {
  display: inline-flex;
  width: 90%;
  height: 1.1rem;
  background-color: rgb(252, 85, 0);
  border-radius: 2rem;
  margin-left: 5%;
}
.box_fellow_left {
  width: 15%;
  height: 100%;
  padding-left: 0.3rem;
  padding-top: 0.15rem;
}
.box_fellow_center {
  padding-top: 0.2rem;
  color: snow;
}
.box_fellow_right {
  padding-top: 0.29rem;
  padding-left: 1.5rem;
}
.font {
  font-size: 0.42rem;
  margin-left: 0.5rem;
  padding: 0%;
}
</style>