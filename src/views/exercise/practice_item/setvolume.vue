<template>
  <div>
    <van-nav-bar title="套卷练习" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" @click="search" />
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item title="套卷分类">
        <el-row class="tac">
          <el-col :span="10">
            <el-menu
              default-active="0"
              class="el-menu-vertical-demo"
              active-text-color="orange"
              background-color="#f2f2f2"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-menu-item index="0" @click="go('/all')">
                <span slot="title">全部</span>
              </el-menu-item>
              <el-menu-item index="1" @click="go('/senior')">
                <span slot="title">中考真题</span>
              </el-menu-item>
              <el-menu-item index="2" @click="go('/sethx')">
                <span slot="title">化学</span>
              </el-menu-item>
              <el-menu-item index="3" @click="go('/setenlinsh')">
                <span slot="title">英语</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="14"><router-view /> </el-col>
        </el-row>
      </van-dropdown-item>
      <van-dropdown-item v-model="value2" title="套卷状态" :options="option2" />
    </van-dropdown-menu>

    <div class="log_nothing">
      <img
        src="http://localhost:8080/practice/空状态.png"
        width="3rem"
        height="3rem"
      />
      <p>请稍候，套卷正在赶来的路上啦</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value2: "a",

      option2: [
        { text: "全部", value: "a" },
        { text: "已做", value: "b" },
        { text: "未做", value: "c" },
      ],
    };
  },
  methods: {
    onClickLeft() {
    this.$router.push('/ExerciseHome')
    },
    search() {
      this.$router.push({
        path: "/Search",
      });
    },
      handleOpen(key, keyPath) {
      console.log(111);
      console.log(key, keyPath);
    },
     handleClose(key, keyPath) {
      console.log(222);
      console.log(key, keyPath);
      this.index = key;
    },
     go(str) {
      console.log(str);
      this.$router.push({
        path: str,
      });
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