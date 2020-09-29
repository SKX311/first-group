<template>
  <div>
<van-nav-bar title="错题记录"  left-arrow  @click-left="onClickLeft" >
  <template #right>
    <van-icon name="search" size="18" @click="search" />
  </template>
</van-nav-bar>
<van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "套卷分类", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "套卷状态", value: "a" },
        { text: "已做", value: "b" },
        { text: "未做", value: "c" },
      ],
    };
  },
    methods:{
        onClickLeft(){
            window.history.back()
        },
        search(){
            
        }
    }
}
</script>

<style>

</style>