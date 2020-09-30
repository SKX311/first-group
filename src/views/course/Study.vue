<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #title>每时每刻初中数学———初二</template>
      <template #right>
        <van-icon name="calendar-o" />
      </template>
    </van-nav-bar>
    <div>
      <div class="SpeeDofFrogress">
        <div>共8课时</div>
        <div class="jindu">
          <van-progress  inactive :percentage="0" />
        </div>
        <div>已学习50%</div>
      </div>
    </div>
    <div>
        
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickRight() {
      this.$router.push({
        path: "/Calendar",
      });
    },
    onClickLeft() {
      this.$router.push({
        path: "/CourseDetails",
      });
    },
  },
};
</script>

<style scoped>
.SpeeDofFrogress {
  height: 1rem;
  width: 100%;
  
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.jindu {
  width: 0.5rem;
  width: 4rem;
}
</style>