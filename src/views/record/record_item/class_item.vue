<template>
  <div>
      <van-nav-bar title="一对一辅导" left-arrow color="black" font-size:20px>
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

<div class="teacher_mans">
  <div class="techer_img"><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png" alt=""></div>
<div>
  <p>杨德胜</p>
  <p><span>男</span><span>30年教龄</span></p>
</div>
</div>

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
.teacher_mans{
  display: flex;
}
.techer_img{
  width: 10%;
  height: 0.5rem;
}
.techer_img img{
  width: 100%;
  height: 0.5rem;
}
</style>