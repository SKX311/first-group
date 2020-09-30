<template>
  <div id="detaile">
    <div class="top">
      <div class="nav_top">
        <p @click="onClickLeft"> < </p>
        <h6>讲师详情</h6>
      </div>
      <div>
        <div class="famous_one">
          <img src="http://localhost:8080/img/teacher01.png" alt="" />
          <div class="famous_two">
            <p class="famous_name">文卫星</p>
            <p class="famous_introduce">女 15年教龄</p>
          </div>
          <div class="famous_three">
            <button @click="Toast"  v-show="Show">关注</button>
            <p v-show="isShow" @click="clear">已关注</p>
          </div>
        </div>
      </div>
    </div>
    <div class="gray"></div>

    <van-tabs v-model="active">
      <van-tab title="讲师介绍">
          <div class="introduce">
              <p>教学年龄 30年</p>
              <p>授课价格 400学习币</p>
              <div class="teacher_brief">
                  <p class="teacher">老师简介</p>
                  <p class="brief">&nbsp; <b>bai</b> 杨老师，特级教师，多次被中国数学会评为全
                      国高中数学竞联赛游戏要加拉链元。长期熊市名校理科班的数学和束河静思辅导工作
                      多次被中国数学会评为全
                      国高中数学竞联赛游戏要加拉链元。长期熊市名校理科班的数学和束河静思辅导工作
                      多次被中国数学会评为全
                      国高中数学竞联赛游戏要加拉链元。长期熊市名校理科班的数学和束河静思辅导工作
                      多次被中国数学会评为全
                      
                      </p>
              </div>
              
          </div>
          </van-tab>
      <van-tab title="主讲课程">
          <div class="course">
              <div class="excellent_course_introduce">
                <div class="excellent_course_top">
                    <p class="excellent_course_issue">每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题</p>
                    <span>共1课时</span>
                    <p class="excellent_course_tuwen">
                        <img src="http://localhost:8080/img/teacher01.png" alt="">
                        杨德胜
                    </p>
                </div>
                <div class="excellent_course_bottom">
                    <p>100人已报名 </p>
                    <p class="free">免费</p>
                </div>
            </div>
            <div class="excellent_course_introduce">
                <div class="excellent_course_top">
                    <p class="excellent_course_issue">每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题</p>
                    <span>共1课时</span>
                    <p class="excellent_course_tuwen">
                        <img src="http://localhost:8080/img/teacher01.png" alt="">
                        杨德胜
                    </p>
                </div>
                <div class="excellent_course_bottom">
                    <p>100人已报名 </p>
                    <p class="free">免费</p>
                </div>
            </div>
            <div class="excellent_course_introduce">
                <div class="excellent_course_top">
                    <p class="excellent_course_issue">每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题</p>
                    <span>共1课时</span>
                    <p class="excellent_course_tuwen">
                        <img src="http://localhost:8080/img/teacher01.png" alt="">
                        杨德胜
                    </p>
                </div>
                <div class="excellent_course_bottom">
                    <p>100人已报名 </p>
                    <p class="free">免费</p>
                </div>
            </div>
            <div class="excellent_course_introduce">
                <div class="excellent_course_top">
                    <p class="excellent_course_issue">每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题</p>
                    <span>共1课时</span>
                    <p class="excellent_course_tuwen">
                        <img src="http://localhost:8080/img/teacher01.png" alt="">
                        杨德胜
                    </p>
                </div>
                <div class="excellent_course_bottom">
                    <p>100人已报名 </p>
                    <p class="free">免费</p>
                </div>
            </div>
          </div>
      </van-tab>
      <van-tab title="学员评价">
          <div class="evaluate">
              <img src="http://localhost:8080/img/pinglun.png" alt="">
              <p></p>
          </div>
      </van-tab>
    </van-tabs>
    <van-button color="#EB6100" @click="toClass_item">立即预约</van-button>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      Show:true,
       isShow:false,
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    toClass_item(){
      this.$router.push({path:"/class_item"})
    },
    Toast(){
      this.$toast.success('已关注')
      this.Show=false
      this.isShow=true
    },
    clear(){
      this.$toast.success('已取消')
      this.Show=true
      this.isShow=false
    }
  },
};
</script>

<style lang="scss" scoped>
#detaile {
  background: #f0f2f5;
}
.top {
  width: 100%;
  height: 2rem;
  background: #5eaaf8;
}
.nav_top {
  width: 100%;
  height: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h6 {
    width: 4.4rem;
    font-size: 0.33rem;
  }
  p {
    width: 1rem;
    text-align: center;
    font-size: 0.33rem;
  }
}
.famous_one {
  width: 95%;
  height: 1.8rem;
  border-radius: 5px;
  background: white;
  margin: 0 auto;
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
    width: 1.2rem;
    height: 0.6rem;
    background: #ebeefe;
    border: 1px solid #ebeefe;
    color: #eb6152;
    border-radius: 20px;
  }
}
.gray {
  height: 1rem;
}
.van-tab__text--ellipsis{
    font-size: 0.35rem !important;
}
.introduce{
    width: 100%;
    height: 8rem;
    
    color: rgb(163, 159, 159);
    background: white;
    margin-top: -10px;
   p{
        font-size: 0.26rem;
    box-sizing: border-box;
     padding-top: 0.5rem;
     padding-left: 0.5rem;
   }
   .brief{
       display: inline-block;
       width: 85%;
        box-sizing: border-box;
     padding-right: 10px;
     letter-spacing:0.05rem;
   }
   .teacher{
       display: inline-block;
       width: 2rem;
       margin-top:-153px;
      
   }
   .teacher_brief{
       display: flex;
       align-items: center;
       justify-content: space-between;

   }
   b{
       color: white;
   }
}
.van-button{
    width: 100%;
    height: 0.9rem;
    font-size: 0.33rem;
    position: fixed;
    bottom: 0px;
}
.grid{
  height: 0rem !important;
}
        .excellent_course_introduce{
            width: 95%;
            height: 4.3rem;
            background: white;
            margin: 0 auto;
            margin-top: 10px;
            .excellent_course_top{
                width: 100%;
                height: 75%;
                border-bottom: 1px solid #ccc;
                .excellent_course_issue{
                    font-size: 0.32rem;
                    box-sizing: border-box;
                    padding-top:10px;
                    padding-left:10px;
                }
                span{
                    color: rgb(170, 169, 169);
                     box-sizing: border-box;
                    padding:0px 10px;
                    display: inline-block;
                }
                .excellent_course_tuwen{
                    display: flex;
                    align-items: center;
                    box-sizing: border-box;
                    padding:0px 10px;
                    img{
                        width: 0.7rem;
                        height: 0.7rem;
                        border-radius: 100%;
                        
                    }
                }
            }
            .excellent_course_bottom{
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;
                padding:0px 10px;
                font-size: 0.33rem;
                    .free{
                        color: #44A426;
                    }
            }
        }
        .evaluate{
            img{
                width: 100%;
            }
            p{
                height: 4rem;
            }
        }
        .van-toast{
          width: 1.5rem !important;
          height: 1.5rem !important;

        }
</style>