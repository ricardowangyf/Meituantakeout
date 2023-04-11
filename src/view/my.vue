<template>
  <div>
    <div class="my-card">
      <div class="center">
        <div class="my-header bottom">
          <div class="flex">
            <li
              v-for="(username, index) in username"
              :key="index"
              class="teacher-details"
            >
              <NameApp :imgurl="username.imgurl" :name="username.name" />
            </li>
          </div>
        </div>
        <div class="my-contant">
          <div class="flex" style="text-align: center">
            <div class="classmate">
              <div>
                <img src="../assets/classmate.svg" />
              </div>
              <h1>{{ classmate }}</h1>
            </div>
            <div class="classmate">
              <div>
                <img src="../assets/dowland.svg" />
              </div>
              <h1>{{ dowland }}</h1>
            </div>
            <div class="classmate">
              <div>
                <img src="../assets/collect.svg" />
              </div>
              <h1>{{ collect }}</h1>
            </div>
          </div>
        </div>
        <div class="my-class">
          <router-link to="/classcard">
            <li v-for="value in object" :key="value" class="object">
              {{ value }}
            </li>
          </router-link>
          <router-link to="/top/claass"> </router-link>
        </div>
      </div>
    </div>
    <div class="footer">
      <Footers />
    </div>
  </div>
</template>

<script>
import Footers from "../components/Footers.vue"; //课程卡片组件
import NameApp from "../components/name.vue"; //课程卡片组件
import { username } from "../API/index"; //在线课程
export default {
  name: "MyApp",
  data() {
    return {
      username: [],
      classmate: "课程管理",
      dowland: "下载管理",
      collect: "课程管理",
      object: {
        title: "我的课程表",
        author: "余额",
        wasd: "优惠券",
        publishedAt: "设置",
      },
    };
  },
  components: {
    Footers,
    NameApp,
  },
  mounted() {
    username()
      .then((response) => {
        this.username = response.data;
        console.log("---->this.username", this.username);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style  scoped>
h1 {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 300;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
img {
  width: 24px;
  height: 24px;
}
.footer {
  position: fixed;
  width: 100%;
  background: #fff;
  bottom: 0;
}
.my-header {
  background: #fff;
}
.bottom {
  border-bottom: 2px solid #c8c2c233;
}
.my-contant {
  padding: 25px 0px 25px 0;
  background: #fff;
}
.flex {
  display: flex;
  justify-content: space-around;
}
.my-class {
  margin-top: 23px;
  background: #fff;
}
.object {
  padding: 25px;
  border-bottom: 2px solid #80808033;
}
</style>