<template>
  <div class="coach">
      <div class="box"></div>
    <div class="top">
      <van-nav-bar title="一对一辅导" left-arrow @click-left="onClickLeft">
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <div class="top_select">
      <p>选择上课时间</p>
      <p>选择老师条件</p>
    </div>
    <div class="center">
      <div class="famous_one">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
            <button>预约</button>
        </div>
      </div>
      <div class="famous_one">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
            <button>预约</button>
        </div>
      </div>
      <div class="famous_one">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
            <button>预约</button>
        </div>
      </div>
      <div class="famous_one">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
            <button>预约</button>
        </div>
      </div>
      <div class="famous_one">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
            <button>预约</button>
        </div>
      </div>
      <div class="famous_one">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
            <button>预约</button>
        </div>
      </div>
      <div class="famous_one">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
            <button>预约</button>
        </div>
      </div>
      <div class="famous_one">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
            <button>预约</button>
        </div>
      </div>
      <div class="famous_one">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
            <button>预约</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    }
};
</script>

<style lang="scss" scoped>
.coach {
  background: #f0f2f5;
}
.box{
    height: 38px;
}
.top {
    width: 100%;
    height: 38px;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0px;
  .van-nav-bar {
    height: 38px;
  }
}
.top_select {
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: white;
  
}
.famous_one {
  width: 95%;
  height: 1.6rem;
  border-radius: 5px;
  background: white;
  margin: 0 auto;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
  }
  .famous_two {
    width: 60%;
    display: flex;
    flex-direction: column;

    .famous_name {
      font-size: 0.3rem;
    }
    .famous_introduce {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      margin-top: -7px;
      color: #ccc;
    }
  }
}
.famous_three{
    button{
        width: 1.5rem;
    height: 0.7rem;
    background: #EBEEFE;
    border: 1px solid #EBEEFE;
    color: #EB6152;
    border-radius:20px;
    }
}
</style>