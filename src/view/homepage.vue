<template>
  <!-- 主页 -->
  <div>
    <div class="center">
      <div class="header">
        <img
          src="../assets/培训.png"
          :style="{ width: '100%', height: 'auto' }"
        />
      </div>
      <div class="login">
        <div class="message">
          <img src="../assets/message.png" />
        </div>
        <div class="login-ntext">
          {{ message }}
        </div>
        <div class="login-button">
          <button>登录</button>
        </div>
      </div>
      <div class="logon">
        <img
          src="../assets/com.png"
          alt=""
          :style="{ width: '100%', height: 'auto' }"
        />
      </div>
      <div class="classes">
        <div class="center">
          <div class="flex">
            <div class="wenzi bottom">
              {{ classes }}
            </div>
            <div class="more">
              {{ more }}
            </div>
          </div>
          <div>
            <div class="start">
              <h1>{{ classification }}</h1>
              <FilterButton> </FilterButton>
            </div>
            <div class="card" v-if="tableData && tableData.length > 0">
              <li
                v-for="(tableData, index) in tableData"
                :key="index"
                class="component-details"
              >
                <TrainingCourse
                  :title="tableData.speaker"
                  :des="tableData.imgurl"
                  :eal="tableData.CourseName"
                />
              </li>
              <div class="huan">
                <button class="change">换一批</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommendation">
        <div class="center">
          <li>
            <Hotrecommendation />
          </li>
          <div class="betw card">
            <li
              v-for="(hotcards, index) in hotcards"
              :key="index"
              class="component-details"
            >
              <hotcard
                :human="hotcards.people"
                :monet="hotcards.money"
                :name="hotcards.CourseName"
                :imgurl="hotcards.imgurl"
              />
            </li>
          </div>
        </div>
      </div>
      <div class="recommendation">
        <div class="center">
          <li class="flex">
            <div class="wenzi bottom">
              {{ gan }}
            </div>
            <div class="more">
              {{ more }}
            </div>
          </li>
          <img src="https://s2.xptou.com/2023/03/31/64268ec86158e.jpg" />
        </div>
      </div>
      <div class="recommendation">
        <div class="center">
          <li class="flex">
            <div class="wenzi bottom">
              {{ shi }}
            </div>
            <div class="more">
              {{ more }}
            </div>
          </li>
          <div class="teacher-card">
            <li
              v-for="(detali, index) in detali"
              :key="index"
              class="teacher-details"
            >
              <teacher
                :img="detali.users"
                :username="detali.username"
                :job="detali.job"
              />
            </li>
          </div>
        </div>
      </div>
      <div class="recommendation">
        <div class="center">
          <li class="flex">
            <div class="wenzi bottom">
              {{ xian }}
            </div>
            <div class="more">
              {{ more }}
            </div>
          </li>
          <div class="top">
            <li v-for="(line, index) in line" :key="index">
              <classes
                :name="line.name"
                :data="line.data"
                :monet="line.money"
                :job="line.job"
              />
            </li>
        
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqCategoryList } from "../API/index"; //在线课程
import { detali } from "../API/index"; //热门推荐API
import { recommend } from "../API/index"; //热门推荐API
import { line } from "../API/index"; //线下推荐API
import TrainingCourse from "../components/TrainingCourse.vue"; //在线推荐
import FilterButton from "../components/FilterButton.vue"; //过滤按钮
import Hotrecommendation from "../components/Hotrecommendation.vue"; //热门推荐
import hotcard from "../components/hotcard.vue"; //热门推荐组件内容
import teacher from "../components/teacher.vue"; //名师推荐
import classes from "../components/classes.vue"; //线下推荐卡片

export default {
  name: "HomePage",
  props: ["initialCounter"],
  data() {
    return {
      tableData: [],
      detali: [],
      hotcards: [],
      money:" ",
      name: [],
      line: [],
      more: "更多",
      selected: 0,
      shi: "名师推荐",
      xian: "线下推荐",
      gan: "干货盘点",
      classes: "在线课程",
      classification: "类别: ",
      message: "您还没有登录,只能试听五分钟哦",
    };
  },
  mounted() {
    this.getList();
    recommend().then((data) => {
      this.hotcards = data.data;
      console.log("---->this.hotcards", data.data);
    });
    detali().then((data) => {
      this.detali = data.data;
      console.log("---->this.detali", data.data);
    });
    line().then((data) => {
      this.line = data.data;
      console.log("---->this.line", data.data);
    });
  },
  methods: {
    getList() {
      reqCategoryList().then((data) => {
        this.tableData = data.data;
        console.log("---->this.tableData", data.data);
      });
    },
  },
  components: {
    FilterButton, //过滤按钮
    TrainingCourse, //在线推荐
    Hotrecommendation, //热门推荐
    hotcard, //热门推荐组件内容
    teacher, //名师推荐
    classes, //线下推荐卡片
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.center {
  margin: 0 auto;
}
.isactive {
  color: blue;
}
.login {
  padding-top: 10px;
  background: white;
}

.login {
  display: flex;
  justify-content: space-between;
}

.message img {
  width: 20px;
}
.classes h1 {
  margin: 0;
  padding-top: 5px;
  font-size: 12px;
  padding-left: 12px;
  color: #808080a1;
  font-weight: 400;
}

.message {
  padding-left: 10px;
}

.login-ntext {
  padding-right: 105px;
  font-size: 10px;
}

.login-button button {
  border: none;
  background: white;
  color: blue;
  font-weight: 300;
}

.logon {
  padding-top: 10px;
}

.logon img {
  width: 360px;
}

.bottom {
  border-bottom: 1px solid blue;
}
.classes {
  background: #fff;
  margin-top: 10px;
}
.isactive {
  color: #0000ff91;
}
.wenzi {
  width: 85px;
  padding-top: 10px;
  font-weight: 300;
  font-size: 21px;
  margin-left: 10px;
  margin-top: 10px;
}

.more {
  padding-top: 26px;
  font-weight: 200;
  color: #808080a3;
  height: 20px;
  padding-right: 13px;
}

.card {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  padding-top: 10px;
}

.component-details {
  width: 43.99%;
  padding-right: 20px;
}

.change {
  border: 2px solid rgb(169, 71, 253);
  border-radius: 5px;
  color: rgb(169, 71, 253);
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  background: #fff;
  border-bottom-left-radius: 35%;
  border-bottom-right-radius: 35%;
  border-top-left-radius: 35%;
  border-top-right-radius: 35%;
  width: 130px;
  margin: 0;
  padding: 0;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.recommendation {
  background: #fff;
  margin-top: 15px;
}
.recommendation img {
  padding-left: 25px;
  padding-top: 30px;
  padding-bottom: 30px;
}
.start {
  display: flex;
  justify-content: start;
}

.huan {
  margin-left: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.betw {
  display: flex;
  justify-content: space-between;
}

.teacher-details {
  width: 43.99%;
  padding-right: 20px;
}
.teacher-card {
  display: flex;
  padding-left: 15px;
  padding-top: 25px;
  padding-bottom: 25px;
}
.top {
  padding-top: 30px;
}
</style>