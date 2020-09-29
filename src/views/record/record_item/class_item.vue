<template>
  <div>
      <van-nav-bar title="一对一辅导" left-arrow color="black">
  <template #right>
    <van-icon name="search" size="18" color="black" />
  </template>
</van-nav-bar>
<!-- 导航 -->
<div class="navigation_">
<div style="color:grey">选择上课时间<van-icon name="arrow-up"  color="grey"/></div>
<div style="color:grey">选择老师条件<van-icon name="arrow-down" color="grey" /></div>
</div>
<!-- 老师列表 -->
<div class="teacher_item">


</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
  font-size: 16px;
}
.navigation_{
  display: flex;
  justify-content: space-around;
}
.teacher_item{
  background-color: rgb(239, 243, 243);
}
</style>