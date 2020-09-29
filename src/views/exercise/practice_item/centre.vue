<template>
  <div>
    <van-nav-bar title="英语" left-arrow @click-left="onClickLeft" />
    <div class="test_choose">
      <div class="test_choose_wrapper">
        <div class="choose_item" @click="gotoPoint">
          <van-icon name="printer" size="0.4rem" /> 题库选择
        </div>
        <span><van-icon name="setting-o" size="0.4rem" @click="set" /></span>
      </div>
    </div>
    <van-popup
      v-model="setting"
      position="bottom"
      closeable
      :style="{ height: '30%' }"
    >
      <div>
        <van-nav-bar title="考点专练设置" />
        <div class="touch_num">
          <p>设置考点专练出题数量</p>
        </div>
        <div class="choose_random">
          <el-radio v-model="radio" label="1">随机15道</el-radio>
          <el-radio v-model="radio" label="2">按顺序做题</el-radio>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setting: false,
      radio: "1",
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    gotoPoint() {
      this.$router.push({
        path: "/point",
      });
    },
    // 点击设置时弹出层
    set() {
      this.setting = true;
    },
  },
};
</script>
<style  scoped>
.test_choose {
  width: 100%;
  height: 0.8rem;
}
.test_choose_wrapper {
  margin: auto;
  width: 94%;
  height: 0.8rem;
  align-items: center;
  justify-content: space-between;
  display: flex;
}
.choose_item {
  display: flex;
  align-items: center;
  font-size: 0.35rem;
}
.touch_num {
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.choose_random {
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
}
.touch_num p {
  margin-left: 0.3rem;
  color: #8c8c8c;
  font-size: 0.3rem;
}
</style>
