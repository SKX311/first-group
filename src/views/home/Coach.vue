<template>
  <div class="coach">
    <div class="box"></div>
    <div class="top">
      <van-nav-bar title="一对一辅导" left-arrow @click-left="onClickLeft">
        <template #right>
          <van-icon name="search" size="18" @click="toSearch" />
        </template>
      </van-nav-bar>
    </div>
    <div class="top_select">
      <p @click="pull_up" id="p1" :class="{active:iscolor==-1}">
        选择上课时间<i class="el-icon-caret-bottom"></i>
      </p>
      <p @click="pull_ups" id="p1">
        选择老师条件<i class="el-icon-caret-bottom"></i>
      </p>
    </div>
    <div class="center" v-show="showprise">
      <div class="famous_one" @click="make">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three" @click="make">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
        <div class="famous_two">
          <p class="famous_name">文卫星</p>
          <p class="famous_introduce">女 15年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
    </div>
    <!-- 隐藏下的日历 -->
    <div class="boxf_color" v-show="showrent">
      <div class="calendar">
        <p class="pp">日期</p>

        <p class="p_span">
          <span>周一</span>
          <span>周二</span>
          <span>周三</span>
          <span>周四</span>
          <span>周五</span>
          <span>周六</span>
          <span>周日</span>
        </p>
        <div class="p_div">
          <div style="color: grey">28</div>
          <div style="color: grey">29</div>
          <div class="divg">30</div>
          <div class="divg">1</div>
          <div class="divg">2</div>
          <div class="divg">3</div>
          <div class="divg">4</div>
        </div>

        <div class="p_div">
          <div class="divg">5</div>
          <div class="divg">6</div>
          <div class="divg">7</div>
          <div class="divg">8</div>
          <div class="divg">9</div>
          <div class="divg">10</div>
          <div class="divg">11</div>
        </div>
      </div>
      <!-- 时段 -->
      <div class="max_time">
        <p class="ps">时段</p>
        <div style="display: flex">
          <el-time-picker
            v-model="value1"
            :picker-options="{
              selectableRange: '18:30:00 - 20:30:00',
            }"
            placeholder="00:00"
          >
          </el-time-picker>
          <el-time-picker
            arrow-control
            v-model="value2"
            :picker-options="{
              selectableRange: '18:30:00 - 20:30:00',
            }"
            placeholder="00:00"
          >
          </el-time-picker>
        </div>
      </div>
      <div id="anniu_two">
        <button style="color: rgb(238, 86, 66); border: 1px solid white">
          重置
        </button>
        <button
          style="
            color: white;
            background-color: rgb(238, 86, 66);
            border: 1px solid rgb(238, 86, 66);
          "
        >
          确定
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
      showprise: true,
      showrent: false,
      iscolor:0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    make() {
      this.$router.push({ path: "/class_item" });
    },
    toSearch() {
      this.$router.push({ path: "/Search" });
    },
    pull_up() {
      this.showprise = !this.showprise;
      this.showrent = !this.showrent;
      this.iscolor = -1
    },
    pull_ups() {
      this.iscolor = 0

    },
  },
};
</script>

<style lang="scss" scoped>
.active{
  color: red;
}
#anniu_two {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-around;
  margin-top: 4.8rem;
}
#anniu_two button {
  width: 50%;
}

.coach {
  background: #f0f2f5;
}
.box {
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

// 隐藏
.center {
  // display: none;
}
.boxf_color {
  background-color: rgb(240, 242, 245);
  width: 100%;
  height: 11rem;
}
.calendar {
  width: 95%;
  height: 4rem;
  margin: 0.3rem auto;
  border-radius: 0.15rem;
  background-color: white;
}
.pp {
  padding: 0.2rem 0.2rem;
}
.ps {
  padding-left: 0.2rem;
  padding-top: 0.17rem;
}
.p_span span {
  margin: 0.269rem;
}

.p_div {
  display: flex;
  justify-content: space-around;
  margin-top: 0.6rem;
}
.p_div div {
  width: 0.5rem;
  height: 0.5rem;
  // background-color: red;
  font-size: 24px;
  text-align: center;
}
.divg:hover {
  color: #f0f2f5;
  background-color: rgb(238, 86, 66);
  border-radius: 50%;
}
.max_time {
  width: 95%;
  height: 1.5rem;
  margin: 0.3rem auto;
  border-radius: 0.15rem;
  background-color: white;
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
.famous_three {
  button {
    width: 1.5rem;
    height: 0.7rem;
    background: #ebeefe;
    border: 1px solid #ebeefe;
    color: #eb6152;
    border-radius: 20px;
  }
}
</style>