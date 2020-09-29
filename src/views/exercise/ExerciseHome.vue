<template>
  <div class="practice">
    <van-nav-bar title="练习" />
    <ul class="JIU">
      <li
        class="JIU_ITEM"
        v-for="(item, index) in JIU"
        :key="index"
        @click="jiu(item)"
      >
        <div class="JIU_ITEM_img">
          <img :src="item.img" width="25%" height="25%" />
        </div>
        <p>{{ item.title }}</p>
      </li>
    </ul>
    <div class="section">
      <h1>近期模考</h1>
      <div class="sort">
        <span>默认排序</span>
        <span>时间</span>
      </div>
      <div class="robot">
        <img
          src="https://wap.365msmk.com/img/empty@2x.a2fa524d.png"
          width="30%"
          height="60%"
        />
        <p>暂无模考安排，敬请期待</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      JIU: [
        {
          img: "http://localhost:8080/practice/JIU1.png",
          title: "考点专练",
          path: "/centre",
        },
        {
          img: "http://localhost:8080/practice/JIU2.png",
          title: "套卷练习",
          path: "/setvolume",
        },
        {
          img: "http://localhost:8080/practice/JIU3.png",
          title: "仿真模考",
          path: "/aeromodelling",
        },
        {
          img: "http://localhost:8080/practice/JIU4.png",
          title: "错题练习",
          path: "/mistakes",
        },
        {
          img: "http://localhost:8080/practice/JIU5.png",
          title: "测评记录",
          path: "/appraisal",
        },
        {
          img: "http://localhost:8080/practice/JIU6.png",
          title: "习题收藏",
          path: "/enshrine",
        },
      ],
    };
  },
  methods: {
    jiu(str) {
      console.log(str.path);
      this.$router.push({
        path: str.path,
      });
    },
  },
};
</script>


<style>
.practice {
  width: 100vw;
  height: 100vh;
  background: rgba(240, 242, 245);
}
.JIU {
  width: 95%;
  height: 3.8rem;
  margin: 0.2rem;
  border-radius: 1%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  background: rgba(255, 255, 255);
}
.JIU_ITEM {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.1rem;
  width: 23%;
  height: 1.6rem;
  flex-direction: column;
}
.section {
  width: 100%;
  height: 5rem;
  background: rgba(255, 255, 255);
}
.sort {
  width: 96%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
}
.section h1 {
  color: #8c8c8c;
  font-size: 0.3rem;
  margin-left: 0.3rem;
  padding-top: 0.3rem;
}
.sort span:nth-child(1) {
  color: #eb6100;
  margin-left: 0.3rem;
}
.robot {
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.JIU_ITEM_img {
  width: 40px;
  height: 40px;
  background: #f2f2ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: #8c8c8c;
}
.JIU_ITEM_img img {
  width: 50%;
  height: 50%;
}
.robot img {
  width: 25%;
  height: 70%;
}
.robot p {
  color: #8c8c8c;
}
</style>