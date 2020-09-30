<template>
  <div>
    <van-nav-bar title="错题记录" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" @click="search" />
      </template>
    </van-nav-bar>
    <div class="bottom_menu">
      <van-row>
        <van-col span="8">
          <!-- 下拉 -->
          <van-dropdown-menu>
            <van-dropdown-item
            title="类型不限"
              v-model="value1"
              :options="option1"
            /> </van-dropdown-menu
        ></van-col>
        <van-col span="8"
          ><span class="menu_s1"
            ><i class="el-icon-copy-document"></i> 巩固全部错题</span
          ></van-col
        >
        <van-col span="8"
          ><span class="menu_s1"
            ><i class="el-icon-document-remove"></i>移除错题</span
          ></van-col
        >
      </van-row>
    </div>

    <div class="log_nothing">
      <img
        src="http://localhost:8080/practice/空状态.png"
        width="3rem"
        height="3rem"
      />
      <p>暂无错题记录</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 1,
      option1: [
      
        { text: "全部", value: 1 },
        { text: "套装练习", value: 2 },
        { text: "考点专练", value: 3 },
        { text: "仿真模考", value: 4 },
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
.bottom_menu {
  width: 100%;
  height: -0.5rem;
  border-bottom: 1px solid lightgray;
}
.menu_s1 {
  display: inline-block;
  margin-top: 0.23rem;
  margin-left: 0.3rem;
  font-size: 0.3rem;
  color: #8c8c8c;
}
.menu_group {
  color: 0.3rem;
}
</style>