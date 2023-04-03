<template>
  <div>
    <div class="center">
      <div class="header bottom">
        <div class="around">
          <li
            v-for="(item, index) in time"
            :key="index"
            class="component-details"
          >
            <div class="classity-contant">
              <h1>{{ learn }}</h1>
            </div>
            <span class="time">{{ index }}</span>
            <span class="mintues">{{ mintues }}</span>
          </li>
          <li
            v-for="(item, index) in time"
            :key="index"
            class="component-details"
          >
            <div class="classity-contant">
              <h1>{{ long }}</h1>
            </div>
            <span class="time">{{ index }}</span>
            <span class="mintues">{{ mintues }}</span>
          </li>
          <div>
            <button class="timea">时长兑奖励</button>
          </div>
        </div>
      </div>
      <div class="class-card">
        <div class="center">
          <div class="recently">
            {{ recently }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { time } from "../API/index"; //在线课程
export default {
  name: "ClasSity",
  data() {
    return {
      learn: "今天学习",
      item: [],
      time: " ",
      long: "累计时长",
      mintues: "分钟",
      recently: "最近学习  ",
    };
  },
  mounted() {
    time()
      .then((response) => {
        this.time = response.data;
        console.log("---->this.time", this.time);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style  scoped>
div {
  background: #fff;
}
li {
  list-style: none;
}
h1 {
  margin: 0;
  padding: 0;
}
.classity-contant h1 {
  font-size: 12px;
  color: #808080bd;
  font-weight: 300;
}
.mintues {
  font-size: 19px;
}
.time {
  color: rgb(125, 69, 249);
  font-size: 41px;
}
.timea {
  padding: 0;
  margin: 0;
  border: none;
  background-color: rgb(125, 69, 249);
  font-size: 12px;
  color: #fff;
  width: 108px;
  height: 28px;
  border-radius: 18%;
  margin-top: 20px;
}
.around {
  display: flex;
  justify-content: space-around;
  padding-top: 60px;
}
.bottom {
  border-bottom: 2px solid #0000001c;
}
.recently {
  padding: 20px 0 20px 18px;
}
</style>