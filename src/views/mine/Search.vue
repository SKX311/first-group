<template>
  <div>
      <!-- navbar -->
      <van-nav-bar
  title="搜索"
  left-text="返回"
  left-arrow
  @click-left="$router.go(-1)"
/>
      <!-- navbar -->
    <!-- 搜索 -->
    <van-search v-model="kw" show-action placeholder="请输入搜索关键词" @input="search" @search="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <!-- 搜索历史部分 -->
    <van-cell-group :border="false">
      <van-cell title="搜索记录">
        <!-- 删除图标及删除功能 -->
        <template #right-icon>
          <van-icon name="delete" @click="del" />
        </template>
      </van-cell>
    </van-cell-group>
    <!-- 展示搜索历史 -->
    <div class="body_history">
      <span v-for="(item,index) in historylist" :key="index">{{item}}</span>
    </div>
    <!-- 搜索联想词显示部分 -->
    <div class="body" v-if="kw !== ''">
      <van-cell-group>
        <van-cell
          :title="item.dtitle"
          v-for="(item,index) in lists"
          :key="index"
          @click="clicks(item.dtitle)"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      kw: "", //输入框内容
      list: [], //商品列表
      lists: [], //存放搜索热词
      historylist: [], //存放历史记录
      history:[],
    };
  },
  created() {
    axios.get("http://api.kudesoft.cn/tdk/goods").then((res) => {
      //   console.log(res.data.data.data.list);
      this.list = res.data.data.data.list;
    });
    let history = localStorage.history
        if(history){
            this.historylist = JSON.parse(history)
        }
  },
  methods: {
    onSearch() {
      this.historylist.push(this.kw);
      if(this.historylist.length>3){
        this.historylist.splice(2,1)
      }
      this.save()
    },
    search() {
      this.list.map((item) => {
        if (item.dtitle.includes(this.kw)) {
          this.lists.push(item);
        }
      });
      if(this.historylist.length>3){
        this.historylist.splice(0,1)
      }
      this.save()
    },
    clicks(dtitle) {
      this.kw = dtitle;
    },
    del() {
      this.historylist = [];
      this.save()
    },
    save(){
      localStorage.history = JSON.stringify(this.historylist)
    }
  },
};
</script>

<style scoped>
.body_history {
  width: 100%;
  height: 200px;
  /* border: 1px solid #000; */
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
}
.body_history span {
  margin: 10px;
}
.body {
  width: 100%;
  height: 100%;
  /* border: 1px solid #000; */
  /* background: pink; */
  position: absolute;
  top: 1.85rem;
}
</style>