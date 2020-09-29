<template>
  <div>
    <van-nav-bar title="课程详情" @click-left="onClickLeft" left-arrow>
      <template #right>
        <van-cell @click="showPopup">
          <van-icon name="share-o" color="#000" size="16px" />
        </van-cell>
        <van-popup v-model="show">
          <div class="QRcode">
            <p style="font-size:14px">分享</p>
            <img
              src="data:image/png;base64,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"
              alt
            />
          </div>
        </van-popup>
      </template>
    </van-nav-bar>
    <div style="background-color:#F0F2F5;width:100%">
      <div class="details">
        <div class="details-top">
          <div style="font-size:16px">李老师16号到22号地理大课堂开课了</div>
          <div>
            <van-rate
              v-model="value"
              :size="25"
              :count="1"
              color="#ffd21e"
              void-icon="star"
              void-color="#999"
              @change="Collection"
            />
          </div>
        </div>
        <div class="state">免费</div>
        <div class="classhour">共8课时|119人已报名</div>
        <div class="time">开课时间：2020.03.16&nbsp;&nbsp;&nbsp;18:30-2020.03.22&nbsp;&nbsp;15:00</div>
      </div>
      <div class="team">
        <div class="team-title">教学团队</div>
        <div>
          <img
            class="team-title-img"
            @click="headportrait"
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt
          />
          <p style="margin-left:0.4rem;font-size:14px">李青</p>
        </div>
      </div>
      <div class="Courseintroduction">
        <p style="font-size:16px;margin-left:0.3rem;margin-top:0.3rem">课程介绍</p>
      </div>
      <div class="Syllabus">
        <div style="font-size:16px;margin-left:0.3rem">课程大纲</div>
        <div class="Syllabus-action" v-for="index in 8" :key="index">
          <div class="Syllabus-action-top">
            <div class="Syllabus-action-top_dian"></div>
            <button class="button">回放</button>
            <div class="Syllabus-Action-Top-Classhour">第一讲第一课时</div>
          </div>
          <div class="Syllabus-action-bottom">
            <div class="Syllabus-action-bottom-name">李青</div>
            <div class="Syllabus-action-bottom-time">03月20日&nbsp;&nbsp;&nbsp;18:30-19:30</div>
          </div>
        </div>
      </div>
      <div class="comment">
        <p style="margin-left:0.3rem">课程评论</p>
        <div class="comment-top" v-for="index in 10" :key="index">
          <div class="comment-top-action">
            <img
              class="img"
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20206kRSVtmcMX1589444592.jpg"
              alt
            />
            <div class="comment-top-action-number">15910732068</div>
            <div class="stars">
              <van-rate v-model="stars" readonly color="red" />
            </div>
            <div class="comment-top-action-time">2020-04-23&nbsp;&nbsp;&nbsp;14:56</div>
          </div>
          <div class="omment-bottom">ok</div>
        </div>
      </div>
    </div>
    <van-button
      class="bottom-button"
      type="primary"
      block
      color="#EB6100"
      @click="signup"
      v-show="showSignup"
    >立即报名</van-button>
    <van-button
      class="bottom-button"
      type="primary"
      block
      color="#EB6100"
      @click="signup"
      v-show="!showSignup"
    >立即学习</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      active: "",
      value: 0,
      stars: 3,
      token: "",
      showSignup: true,
    };
  },
  created() {
    this.token = localStorage.getItem("token");
  },
  methods: {
    headportrait() {
      if (this.token == "") {
        this.$router.push({
          path: "/Login",
        });
      } else {
        this.$router.push({
          path: "/TeacherDetails",
        });
      }
    },
    showPopup() {
      this.show = true;
    },
    onClickLeft() {
      this.$router.push({
        path: "/CourseHome",
      });
    },
    Collection() {
      if (this.token == "") {
        this.$router.push({
          path: "/Login",
        });
      } else {
        this.$toast("提示内容");
      }
    },
    signup() {
      if (this.token == "") {
        this.$router.push({
          path: "/Login",
        });
      } else {
        this.$toast("报名成功");
        this.showSignup = false;
      }
    },
  },
};
</script>

<style scoped>
.QRcode {
  height: 5rem;
  width: 5rem;
  background-color: #fff;
  border-radius: 1rem;
}
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
.team {
  width: 100%;
  height: 3rem;
  background-color: #fff;
  margin-top: 0.5rem;
}
.Courseintroduction {
  height: 1.5rem;
  width: 100%;
  background-color: #fff;
  margin-top: 0.3rem;
  font-size: 16px;
}
.team-title {
  font-size: 16px;
  margin-left: 0.3rem;
}
.team-title-img {
  width: 1rem;
  height: 1rem;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}
.Syllabus {
  width: 99%;

  margin-top: 0.3rem;
  background-color: #fff;
}
.Syllabus-action {
  height: 1.5rem;
  width: 99%;
}
.Syllabus-action-top_dian {
  height: 0.1rem;
  width: 0.1rem;
  background-color: orange;
  border-radius: 50%;
  float: left;
  margin-right: 0.2rem;
  margin-top: 0.2rem;
}
.Syllabus-action-top {
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}
.button {
  height: 0.5rem;
  width: 1rem;
  background-color: #ea7a2f;
  color: #fff;
  border: none;
  line-height: 0.5rem;
  text-align: center;
  border-radius: 0.1rem;
  float: left;
  margin-right: 0.2rem;
}
.Syllabus-Action-Top-Classhour {
  font-size: 13px;
  color: #595959;
}
.Syllabus-action-bottom {
  margin-top: 0.3rem;
  margin-left: 1rem;
}
.Syllabus-action-bottom-name {
  float: left;
  margin-right: 0.3rem;
  font-size: 13px;
  color: #8c8c8c;
}
.Syllabus-action-bottom-time {
  font-size: 13px;
  color: #8c8c8c;
}
.comment {
  width: 99%;

  margin-top: 0.3rem;
  background-color: #fff;
}
.comment-top {
  height: 1.5rem;
  width: 99%;
}
.comment-top-action {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.img {
  height: 0.6rem;
  width: 0.6rem;
  border-radius: 50%;
  margin-left: 0.3rem;
  margin-top: 0.3rem;
}
.comment-top-action-number {
}
.stars {
}
.omment-bottom {
  margin-left: 1.5rem;
  color: #acacac;
}
.bottom-button {
  position: fixed;
  bottom: 0;
}
</style>