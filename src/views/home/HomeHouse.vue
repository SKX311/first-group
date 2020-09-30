<template>
  <div class="home">
    <div class="banner_top">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><img src="http://localhost:8080/img/banner01.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://localhost:8080/img/banner02.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://localhost:8080/img/banner03.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://localhost:8080/img/banner04.jpg" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="center">
      <div @click="toCourse">
        <img src="http://localhost:8080/img/center1.png" alt="" />
        <p>特色课</p>
      </div>
      <div @click="toCoach">
        <img src="http://localhost:8080/img/center2.png" alt="" />
        <p>一对一辅导</p>
      </div>
      <div @click="toCalendar">
        <img src="http://localhost:8080/img/center3.png" alt="" />
        <p>学习日历</p>
      </div>
    </div>
    <div class="bottom">
        <div class="famous">
            <p class="famous_content">名师阵容</p>
            <div class="famous_one" @click="toTeacherDetail"><img src="http://localhost:8080/img/teacher01.png" alt="">
            <div class="famous_two">
                <p class="famous_name" >杨德胜</p>
                <p class="famous_introduce">杨老师，特级教师，多次被中国教学会评为全国高级教师</p>
                </div>
            </div>
            <div class="famous_one" @click="toTeacherDetail"><img src="http://localhost:8080/img/teacher02.jpg" alt="">
            <div class="famous_two">
                <p class="famous_name">文卫星</p>
                <p class="famous_introduce">文老师，特级教师，多次被中国教学会评为全国高级教师</p>
                </div>
            </div>
            <div class="famous_one" @click="toTeacherDetail"><img src="http://localhost:8080/img/teacher03.png" alt="">
            <div class="famous_two">
                <p class="famous_name">马学斌</p>
                <p class="famous_introduce">马老师，特级教师，多次被中国教学会评为全国高级教师</p>
                </div>
            </div>
        </div>
        <div class="excellent_course">
           <p class="excellent_course_content">精品课程</p>
            <div class="excellent_course_introduce" @click="toClass_item">
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
         <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
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
         <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
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
        <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
                <div class="excellent_course_top">
                    <p class="excellent_course_issue">每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题</p>
                    <span>共1课时</span>
                    <p class="excellent_course_tuwen">
                        <img src="http://localhost:8080/img/teacher03.png" alt="">
                        杨德胜
                    </p>
                </div>
                <div class="excellent_course_bottom">
                    <p>100人已报名 </p>
                    <p class="free">免费</p>
                </div>
            </div>
        </div>
        <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
                <div class="excellent_course_top">
                    <p class="excellent_course_issue">每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题</p>
                    <span>共1课时</span>
                    <p class="excellent_course_tuwen">
                        <img src="http://localhost:8080/img/teacher03.png" alt="">
                        杨德胜
                    </p>
                </div>
                <div class="excellent_course_bottom">
                    <p>100人已报名 </p>
                    <p class="free">免费</p>
                </div>
            </div>
        </div>
        <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
                <div class="excellent_course_top">
                    <p class="excellent_course_issue">每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题</p>
                    <span>共1课时</span>
                    <p class="excellent_course_tuwen">
                        <img src="http://localhost:8080/img/teacher03.png" alt="">
                        杨德胜
                    </p>
                </div>
                <div class="excellent_course_bottom">
                    <p>100人已报名 </p>
                    <p class="free">免费</p>
                </div>
            </div>
        </div>
        <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
                <div class="excellent_course_top">
                    <p class="excellent_course_issue">每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题</p>
                    <span>共1课时</span>
                    <p class="excellent_course_tuwen">
                        <img src="http://localhost:8080/img/teacher03.png" alt="">
                        杨德胜
                    </p>
                </div>
                <div class="excellent_course_bottom">
                    <p>100人已报名 </p>
                    <p class="free">免费</p>
                </div>
            </div>
        </div>
        <div class="recommended_course ">
            <div class="excellent_course" >
           <p class="excellent_course_content">精品课程</p>
            <div class="excellent_course_introduce" @click="toClass_item">
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
        <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
                <div class="excellent_course_top">
                    <p class="excellent_course_issue">每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题</p>
                    <span>共1课时</span>
                    <p class="excellent_course_tuwen">
                        <img src="http://localhost:8080/img/teacher03.png" alt="">
                        杨德胜
                    </p>
                </div>
                <div class="excellent_course_bottom">
                    <p>100人已报名 </p>
                    <p class="free">免费</p>
                </div>
            </div>
        </div>
        <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
                <div class="excellent_course_top">
                    <p class="excellent_course_issue">每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题</p>
                    <span>共1课时</span>
                    <p class="excellent_course_tuwen">
                        <img src="http://localhost:8080/img/teacher03.png" alt="">
                        杨德胜
                    </p>
                </div>
                <div class="excellent_course_bottom">
                    <p>100人已报名 </p>
                    <p class="free">免费</p>
                </div>
            </div>
        </div>
        <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
                <div class="excellent_course_top">
                    <p class="excellent_course_issue">每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题</p>
                    <span>共1课时</span>
                    <p class="excellent_course_tuwen">
                        <img src="http://localhost:8080/img/teacher03.png" alt="">
                        杨德胜
                    </p>
                </div>
                <div class="excellent_course_bottom">
                    <p>100人已报名 </p>
                    <p class="free">免费</p>
                </div>
            </div>
        </div>
        <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
                <div class="excellent_course_top">
                    <p class="excellent_course_issue">每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题</p>
                    <span>共1课时</span>
                    <p class="excellent_course_tuwen">
                        <img src="http://localhost:8080/img/teacher03.png" alt="">
                        杨德胜
                    </p>
                </div>
                <div class="excellent_course_bottom">
                    <p>100人已报名 </p>
                    <p class="free">免费</p>
                </div>
            </div>
        </div>
        <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
                <div class="excellent_course_top">
                    <p class="excellent_course_issue">每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题</p>
                    <span>共1课时</span>
                    <p class="excellent_course_tuwen">
                        <img src="http://localhost:8080/img/teacher03.png" alt="">
                        杨德胜
                    </p>
                </div>
                <div class="excellent_course_bottom">
                    <p>100人已报名 </p>
                    <p class="free">免费</p>
                </div>
            </div>
        </div>
        </div>
        <div class="star_lecturer ">
            <p class="famous_content">名师阵容</p>
            <div class="famous_one" @click="toTeacherDetail"><img src="http://localhost:8080/img/teacher04.jpg" alt="">
            <div class="famous_two">
                <p class="famous_name">杨德胜</p>
                <p class="famous_introduce">杨老师，特级教师，多次被中国教学会评为全国高级教师</p>
                </div>
            </div>
            <div class="famous_one" @click="toTeacherDetail"><img src="http://localhost:8080/img/teacher04.jpg" alt="">
            <div class="famous_two">
                <p class="famous_name">杨德胜</p>
                <p class="famous_introduce">杨老师，特级教师，多次被中国教学会评为全国高级教师</p>
                </div>
            </div>
            <div class="famous_one" @click="toTeacherDetail"><img src="http://localhost:8080/img/teacher04.jpg" alt="">
            <div class="famous_two">
                <p class="famous_name">杨德胜</p>
                <p class="famous_introduce">杨老师，特级教师，多次被中国教学会评为全国高级教师</p>
                </div>
            </div>
            <div class="famous_one" @click="toTeacherDetail"><img src="http://localhost:8080/img/teacher04.jpg" alt="">
            <div class="famous_two">
                <p class="famous_name">杨德胜</p>
                <p class="famous_introduce">杨老师，特级教师，多次被中国教学会评为全国高级教师</p>
                </div>
            </div>
            <div class="famous_one" @click="toTeacherDetail"><img src="http://localhost:8080/img/teacher04.jpg" alt="">
            <div class="famous_two">
                <p class="famous_name">杨德胜</p>
                <p class="famous_introduce">杨老师，特级教师，多次被中国教学会评为全国高级教师</p>
                </div>
            </div>
            <div class="famous_one" @click="toTeacherDetail"><img src="http://localhost:8080/img/teacher04.jpg" alt="">
            <div class="famous_two">
                <p class="famous_name">杨德胜</p>
                <p class="famous_introduce">杨老师，特级教师，多次被中国教学会评为全国高级教师</p>
                </div>
            </div>
            <div class="famous_one" @click="toTeacherDetail"><img src="http://localhost:8080/img/teacher04.jpg" alt="">
            <div class="famous_two">
                <p class="famous_name">杨德胜</p>
                <p class="famous_introduce">杨老师，特级教师，多次被中国教学会评为全国高级教师</p>
                </div>
            </div>
        </div>
    </div>
    <div class="dibu"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
      toCoach(){
          this.$router.push({path:"/Coach"})
      },
      toCourse(){
          this.$router.push({path:"/CourseHome"})
      },
      toTeacherDetail(){
          this.$router.push({path:"/TeacherDetails"})
      },
      toCalendar(){
          this.$router.push({path:"/Calendar"})
      },
      toClass_item(){
          this.$router.push({path:"/class_item"})
      }
  }
};
</script>

<style lang="scss" scoped>
.home {
  background: #f0f2f5;
}
.banner_top {
  img {
    width: 100%;
  }
}
.center{
    width: 100%;
    // height: 2rem;
    // background: pink;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    box-sizing: border-box;
    padding: 10px;
    div{
        width: 2rem;
        height: 2rem;
        background: white;
        border-radius: 10px;
        margin-top: -0.8rem;
        z-index: 999;
        img{
            width: 0.5rem;
            height: 0.5rem;
            margin-top: 0.5rem;
        }
    }
}
.bottom{
    .famous{
        width: 100%;
        height: 5rem;
        // background: pink;
        .famous_content{
            width: 90%;
            margin: 0 auto;
            font-size: 0.33rem;
            border-left: 2px solid #EB6100;
            padding-left: 10px;
        }
        .famous_one{
            width: 95%;
            height: 1.4rem;
            border-radius: 5px;
            background: white;
            margin: 0 auto;
            margin-top: 0.2rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            img{
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 100%;
            }
            .famous_two{
                width: 80%;
                display: flex;
                flex-direction: column;
               
                .famous_name{
                    font-size: 0.3rem;
                }
                .famous_introduce{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    margin-top: -7px;
                    color: #ccc;
                }
            }
        }
    }
    .excellent_course{
        .excellent_course_content{
            width: 90%;
            margin: 0 auto;
            font-size: 0.33rem;
            border-left: 2px solid #EB6100;
            padding-left: 10px;
            margin-top: 0.6rem;
        }
        .excellent_course_introduce{
            width: 95%;
            height: 3.7rem;
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
    }
    .star_lecturer{
        .famous_content{
            width: 90%;
            margin: 0 auto;
            font-size: 0.33rem;
            border-left: 2px solid #EB6100;
            padding-left: 10px;
        }
        .famous_one{
            width: 95%;
            height: 1.4rem;
            border-radius: 5px;
            background: white;
            margin: 0 auto;
            margin-top: 0.2rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            img{
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 100%;
            }
            .famous_two{
                width: 80%;
                display: flex;
                flex-direction: column;
               
                .famous_name{
                    font-size: 0.3rem;
                }
                .famous_introduce{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    margin-top: -7px;
                    color: #ccc;
                }
            }
        }
    }
}
.dibu{
    height: 60px;
}
</style>