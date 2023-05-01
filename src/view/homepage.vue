<template>
  <!-- 首页 -->
  <div class="center">
    <div class="header">
      <img src="../assets/培训.png" />
    </div>
    <div class="login">
      <div class="message">
        <img src="../assets/message.png" />
      </div>
      <div class="login-text">
        {{ loginmessage }}
      </div>
      <div class="login-button">
        <button>登录</button>
      </div>
    </div>
    <div class="regsiter">
      <img src="../assets/com.png" alt="" />
    </div>
    <div class="online-courses">
      <div class="center">
        <div class="flex">
          <div class="contant bottom">
            <h1>{{ classes }}</h1>
          </div>
          <div class="more">
            <h1>{{ more }}</h1>
          </div>
        </div>
        <div>
          <div class="routerbutton">
            <h1>{{ classification }}</h1>
            <div>
              <FilterButton  />
            </div>
          </div>
          <div class="card" v-if="tableData && tableData.length > 0">
            <TrainingCourse
              v-for="(tableData, index) in tableData"
              :key="index"
              class="component-details"
              :title="tableData.speaker"
              :des="tableData.imgurl"
              :eal="tableData.name"
            />
          </div>
          <div class="change-button">
            <button class="change">换一批</button>
          </div>
        </div>
      </div>
    </div>
    <div class="homepage-card homepage-bottom">
      <div class="center">
        <li>
          <div class="flex">
            <div class="contant bottom">
              <h1>{{ hot }}</h1>
            </div>
            <div class="more">
              {{ more }}
            </div>
          </div>
        </li>
        <div class="between card">
          <hotcard
            v-for="(hotcards, index) in hotcards"
            :key="index"
            class="component-details"
            :human="hotcards.people"
            :monet="hotcards.money"
            :name="hotcards.name"
            :imgurl="hotcards.imgurl"
          />
        </div>
      </div>
    </div>
    <div class="homepage-card homepage-bottom">
      <div class="center">
        <li class="flex">
          <div class="contant bottom">
            <h1>{{ workinventory }}</h1>
          </div>
          <div class="more">
            <span>{{ more }}</span>
          </div>
        </li>
        <div class="flexcenter">
          <img src="https://s2.xptou.com/2023/03/31/64268ec86158e.jpg" />
        </div>
      </div>
    </div>
    <div class="homepage-card homepage-bottom">
      <div class="center">
        <li class="flex">
          <div class="contant bottom">
            <h1>{{ shi }}</h1>
          </div>
          <div class="more">
            <span>{{ more }}</span>
          </div>
        </li>
        <div class="teacher-card">
          <teacher
            v-for="(detali, index) in detali"
            :key="index"
            class="teacher-details"
            :img="detali.users"
            :username="detali.username"
            :job="detali.job"
          />
        </div>
      </div>
    </div>
    <div class="homepage-card">
      <div class="center">
        <li class="flex">
          <div class="contant bottom">
            <h1>{{ xian }}</h1>
          </div>
          <div class="more">
            <span>{{ more }}</span>
          </div>
        </li>
        <div class="top">
          <div>
            <classes
              v-for="(line, index) in line"
              :key="index"
              style="padding-top: 24px"
              :name="line.name"
              :data="line.data"
              :monet="line.money"
              :job="line.job"
            />
          </div>
          <li>
            <h1>{{ line.money }}</h1>
          </li>
        </div>
      </div>
      <div class="recommendation fixed">
        <div class="center">
          <Footers />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterButton from "../components/FilterButton.vue"; //过滤按钮
import hotcard from "../components/hotcard.vue"; //热门推荐内容
import teacher from "../components/teacher.vue"; //名师推荐
import classes from "../components/classes.vue"; //线下推荐卡片
import Footers from "../components/Footers.vue"; //底部导航栏
import TrainingCourse from "../components/TrainingCourse.vue"; //在线推荐
import { line, recommend, detali, list } from "../API/index";
// import { list } from "../API/index";

export default {
  name: "HomePage",
  props: ["type"],
  data() {
    return {
      tableData: [],
      filteredData: [],
      detali: [],
      hotcards: [],
      item: [],
      line: [],
      more: "更多",
      selected: 0,
      shi: "名师推荐",
      xian: "线下推荐",
      workinventory: "干货盘点",
      classes: "在线课程",
      hot: "热门推荐",
      classification: "类别:",
      loginmessage: "您还没有登录,只能试听五分钟哦",
    };
  },
  mounted() {
    recommend().then((data) => {
      this.hotcards = data.data;
      console.log("---->this.hotcards", data.data);
    }); //热门推荐API
    detali().then((data) => {
      this.detali = data.data;
      console.log("---->this.detali", data.data);
    }); //用户头像API
    line().then((data) => {
      this.line = data.data;
      console.log("---->this.line", data.data);
    }); //线下推荐API
    // list().then((data) => {
    //   // console.log('----->',data)
    //   // console.log('----JSONJSONJSON----->',JSON.stringify(data.data ))
    //   this.tableData = data.data;
    //   console.log("---->this.tableData", this.tableData);
    // }); //线下推荐API
    list().then((data) => {
      this.tableData = data.data;
      console.log("--->this.tableData", data.data);
    });
  },
  methods: {},
  components: {
    FilterButton, //过滤按钮
    hotcard, //热门推荐内容
    teacher, //名师推荐
    classes, //线下推荐卡片
    Footers, //底部导航栏
    TrainingCourse, //在线推荐
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
h1 {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.header img {
  width: 100%;
  height: auto;
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

.more h1 {
  margin: 0;
  font-size: 12px;
  color: #808080a1;
  font-weight: 400;
  padding: 5px 0 0 12px;
}

.message {
  padding-left: 10px;
}

.login-text {
  padding-right: 105px;
  font-size: 13px;
}

.login-button {
  position: relative;
  bottom: 3px;
  padding-right: 15px;
}
.login-button button {
  border: none;
  background: white;
  color: blue;
  font-weight: 300;
  padding: 0;
}

.regsiter {
  padding-top: 10px;
}

.regsiter img {
  width: 360px;
}
.bottom {
  border-bottom: 1px solid blue;
}
.online-courses {
  background: #fff;
  margin-top: 10px;
}
.contant h1 {
  padding-top: 10px;
  font-weight: 300;
  font-size: 21px;
  width: 85px;
}
.contant {
  margin-left: 17px;
  width: 85px;
}
.more {
  font-weight: 200;
  color: #808080a3;
  padding: 20px 13px 0 0px;
}
.more {
  height: 20px;
}
.card {
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0 0 20px;
}

.component-details {
  padding: 0 20px 20px 0;
}
.component-details {
  width: 43.99%;
}

.change {
  border: 2px solid rgb(169, 71, 253);
  color: rgb(169, 71, 253);
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  background: #fff;
  border-radius: 35%;
  padding: 0;
  margin: 22px 0 33px 0;
}

.change {
  width: 130px;
}

.flex {
  display: flex;
  justify-content: space-between;
}
.homepage-card {
  background: #fff;
  margin: 15px 0 85px 0;
}
.homepage-card img {
  padding: 30px 0 30px 0;
}

.homepage-bottom {
  margin-bottom: 20px;
}
.routerbutton {
  display: flex;
  justify-content: start;
}
.routerbutton {
  padding: 15px 10px 0 7px;
}

.change-button {
  display: flex;
  justify-content: center;
}

.teacher-details {
  width: 43.99%;
  padding-right: 20px;
}
.teacher-card {
  padding: 25px 0 25px 15px;
}

.teacher-card {
  display: flex;
}
.top {
  padding: 15px 0 10px 15px;
}

.fixed {
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
}

.routerbutton h1 {
  font-size: 12px;
  color: #8080809e;
  font-weight: 400;
  padding: 7px 0 0 12px;
}

.flexcenter {
  display: flex;
  justify-content: center;
}

.flex {
  display: flex;
  justify-content: space-between;
}
.contant h1 {
  width: 85px;
  padding-top: 10px;
  font-weight: 300;
  font-size: 21px;
  margin: 0;
}
.bottom {
  border-bottom: 1px solid blue;
}
.regsiter img {
  width: 100%;
  height: auto;
}
</style>
