<template>
  <div>
    <van-nav-bar title="仿真模考" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" @click="search" />
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "j",
      option1: [
        { text: "考试类型", value: 0 },
        { text: "全部", value: 1 },
        { text: "模拟考试", value: 2 },
        { text: "正式考试", value: 3 },
      ],
      option2: [
        { text: "考试状态", value: "a" },
        { text: "全部", value: "b" },
        { text: "未开始", value: "c" },
        { text: "进行中", value: "d" },
        { text: "已结束", value: "e" },

      ],
      option3: [
        { text: "参考状态", value: "j" },
        { text: "全部", value: "k" },
        { text: "已做", value: "l" },
        { text: "未做", value: "u" },

      ],
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    search() {},
  },
};
</script>

<style>
</style>