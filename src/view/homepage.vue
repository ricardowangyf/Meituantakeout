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
          <div class="first">
            <div class="flex">
              <div class="wenzi bottom">
                {{ classes }}
              </div>
              <div class="more">
                {{ more }}
              </div>
            </div>
            <FilterButton />
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
            <button class="change">换一批</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqCategoryList } from "../API/index";
import TrainingCourse from "../components/TrainingCourse.vue";
import FilterButton from "../components/FilterButton.vue";

export default {
  name: "HomePage",
  data() {
    return {
      message: "您还没有登录,只能试听五分钟哦",
      classes: "在线课程",
      more: "更多",
      tableData: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      reqCategoryList().then((data) => {
        this.tableData = data.data;
        console.log("this.tableData", data.data);
      });
    },
  },
  components: {
    TrainingCourse, //在线推荐
    FilterButton, //过滤按钮
  },
};
</script>

<style >
li {
  list-style: none;
}
.center {
  margin: 0 auto;
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
.flex {
  display: flex;
  justify-content: space-between;
}
.classes {
  background: #fff;
  margin-top: 10px;
}

.wenzi {
  padding-left: 11px;
  padding-top: 10px;
  font-weight: 300;
  font-size: 21px;
}

.more {
  padding-top: 10px;
  font-weight: 200;
  color: #808080a3;
}

.card {
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
  padding-top: 15px;
}

.component-details {
  width: 42.33%;
  padding-left: 15px;
}

.change {
  border: 2px solid lightblue;
  padding: 10px 20px;
  border-radius: 5px;
  color: black;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  background: #fff;
  border-bottom-left-radius: 43%;
  border-bottom-right-radius: 43%;
  border-top-left-radius: 49%;
  border-top-right-radius: 43%;
  display: flex;
  justify-content: center;
  margin-left: 85px;
  width: 130px;
  margin-top: 31px;
  margin-bottom: 50px;
}
</style>