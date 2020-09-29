<template>
  <div>
    <van-nav-bar title="习题收藏" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" @click="search" />
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item
        class="menu_grounp"
        v-model="value1"
        :options="option1"
      />
    </van-dropdown-menu>
    <div class="log_nothing">
      <img
        src="http://localhost:8080/practice/空状态.png"
        width="3rem"
        height="3rem"
      />
      <p>暂无收藏记录</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: "题目类型", value: 0 },
        { text: "单选", value: 1 },
        { text: "多选", value: 2 },
        { text: "判断", value: 3 },
        { text: "连线", value: 4 },
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