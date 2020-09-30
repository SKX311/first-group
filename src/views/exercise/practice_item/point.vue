<template>
  <div>
    <div class="search">
      <van-nav-bar title="题库选择" left-arrow @click-left="onClickLeft" />
      <van-search
        v-model="value"
        shape="round"
        placeholder="请输入题库名称关键词"
      />

      <el-row class="tac">
        <el-col :span="6">
          <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="0"  @click="go('/derivation')">
              <span slot="title">求导题库</span>
            </el-menu-item>
            <el-menu-item index="1" @click="go('limitation')">
              <span slot="title">极限题库</span>
            </el-menu-item>
            <el-menu-item index="2" @click="go('biology')">
              <span slot="title">生物</span>
            </el-menu-item>
            <el-menu-item index="3" @click="go('chemistry')">
              <span slot="title">化学</span>
            </el-menu-item>
            <el-menu-item index="4" @click="go('math')">
              <span slot="title">数学</span>
            </el-menu-item>
            <el-menu-item index="5" @click="go('physics')">
              <span slot="title">物理</span>
            </el-menu-item>
            <el-menu-item index="5" @click="go('english')">
              <span slot="title">英语</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="18"><router-view /> </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      index: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/ExerciseHome",
      });
    },
    // 侧边
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
.search {
  width: 100%;
  height: 1.82rem;
  border-bottom: 1px solid lightgray;
}
</style>