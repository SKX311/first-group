<template>
  <div>
    <van-nav-bar title="测评记录" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" @click="search" />
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <div class="log_nothing">
      <img
        src="http://localhost:8080/practice/空状态.png"
        width="3rem"
        height="3rem"
      />
      <p>该时段您没有留下测评记录哦！</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "类型不限", value: 0 },
        { text: "全部", value: 1 },
        { text: "套装练习", value: 2 },
        { text: "仿真模考", value: 3 },
        { text: "考点专练", value: 4 },
      ],
      option2: [
        { text: "时间", value: "a" },
        { text: "全部", value: "b" },
        { text: "今天", value: "c" },
        { text: "7天", value: "d" },

      ],
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    search() {
      this.$router.push({
        path:'/Search'
      })
    },
  },
};
</script>

<style>
.log_nothing {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.log_nothing img {
  width: 3rem;
  height: 3rem;
}
.log_nothing p {
  font-size: 0.3rem;
  color: #8c8c8c;
}
</style>