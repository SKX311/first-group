<template>
  <div>
    <div class="top-search">
      <van-nav-bar title="特色课" :toggle="show" @click-right="onClickRight">
        <template #right>
          <van-icon name="search" size="0.5rem" color="#595959" />
        </template>
      </van-nav-bar>
    </div>
    <div class="screen">
      <van-dropdown-menu>
        <van-dropdown-item title="分类">
          <div class="classIfication">
            <div class="classIfication-One">
              <p>年级</p>
              <div class="classIfication-One-Active">
                <div>初一</div>
                <div>初二</div>
                <div>初三</div>
                <div>高一</div>
                <div>高二</div>
              </div>
            </div>
            <div class="classIfication-Two">
              <p>学科</p>
              <div class="classIfication-Two-Active">
                <div>语文</div>
                <div>数学</div>
                <div>英语</div>
                <div>物理</div>
                <div>化学</div>
              </div>
            </div>
            <div class="classIfication-Three">
              <button class="Reset">重置</button>
              <button class="determine" @click="determine">确定</button>
            </div>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="排序" ref="item"></van-dropdown-item>
        <van-dropdown-item title="筛选" ref="item"></van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div class="section">
      <div class="section-son" v-for="index in 10" :key="index">
        <p class="section-son-title">渣男干往事往事干渣男</p>
        <p class="section-son-time">03月16日&nbsp;&nbsp;&nbsp;18:30~03月22日&nbsp;&nbsp;15:00|共8课时</p>
        <div class="section-son-one">
          <img
            class="section-son-img"
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
          />
          <span class="section-son-name">李青</span>
        </div>
        <div class="section-son-two">
          <span class="section-son-two-PersonTimes">177人已报名</span>

          <span class="section-son-two-button">免费</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onClickRight() {},
    onConfirm() {
      this.$refs.item.toggle();
    },
    determine() {
      this.show = false;
    },
  },
  created() {},
};
</script>

<style scoped>
.div {
  height: 200px;
  width: 200px;
  text-align: center;
  line-height: 200px;
  border: 1px solid red;
}
.classIfication {
  width: 7.43rem;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
}
.classIfication-One {
  width: 7.43rem;
  border: 1px solid aqua;
}
.classIfication-Two {
  width: 7.43rem;
  border: 1px solid pink;
}
.classIfication-Two-Active {
  display: flex;
  flex-wrap: wrap;
}
.classIfication-Two-Active div {
  height: 0.8rem;
  width: 1.5rem;
  line-height: 0.8rem;
  text-align: center;
  background-color: #f5f5f5;
  margin-left: 0.3rem;
  margin-top: 0.3rem;
}
.classIfication-One-Active {
  display: flex;
  flex-wrap: wrap;
}
.classIfication-One-Active div {
  height: 0.8rem;
  width: 1.5rem;
  line-height: 0.8rem;
  text-align: center;
  background-color: #f5f5f5;
  margin-left: 0.3rem;
  margin-top: 0.3rem;
}
.classIfication-Three {
  height: 1.7rem;
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.Reset {
  height: 0.7rem;
  width: 3rem;
  line-height: 0.7rem;
  text-align: center;
  border: 1px solid #e4e4e4;
  border-radius: 0.2rem;
}
.determine {
  height: 0.7rem;
  width: 3rem;
  line-height: 0.7rem;
  text-align: center;
  background-color: #eb6100;
  color: #fff;
  border-radius: 0.2rem;
  border: none;
}
.section {
  width: 99%;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.section-son {
  height: 4rem;
  width: 93%;
  background-color: #fff;
  margin-top: 0.3rem;
  border-radius: 0.1rem;
}
.section-son-title {
  font-size: 16px;
  margin-left: 0.3rem;
}
.section-son-img {
  height: 0.6rem;
  width: 0.6rem;
  float: left;
  margin-left: 0.3rem;
}
.section-son-name {
  float: left;
  margin-left: 0.3rem;
}
.section-son-time {
  margin-left: 0.3rem;
}
.section-son-one {
  margin-top: 0.5rem;
}
.section-son-two {
  height: 1rem;
  border-top: 1px solid#999;
  width: 99%;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.section-son-two-button {
  color: #95cc84;
  font-size: 18px;
}
.section-son-two-PersonTimes {
  color: #acacac;
}
</style>