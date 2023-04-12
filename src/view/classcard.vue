<template>
  <!-- 课程管理界面卡片组件 -->
  <div class="classcard">
    <div class="class-contant">
      <div class="center">
        <div class="class-top">
          <div class="flex">
            <button id="button1">
              <li>{{ allclass }}</li>
            </button>
            <button id="button2">
              <li>{{ freeclass }}</li>
            </button>
            <button id="button3">
              <li>{{ payclass }}</li>
            </button>
          </div>
        </div>
        <div class="classcard">
          <myclasscard
            v-for="(userdetali, index) in userdetali"
            :key="index"
            class="object"
            :name="userdetali.name"
            :imgurl="userdetali.imgurl"
            :free="userdetali.free"
          />
        </div>
      </div>
      <Footers />
    </div>
  </div>
</template>
  
  <script>
import Footers from "../components/Footers.vue"; //底部组件
import myclasscard from "../components/myclasscarda.vue"; //课程卡片组件
import { classare } from "../API/index"; //在线课程

export default {
  name: "ClassCard",
  data() {
    return {
      userdetali: [],
      allclass: "全部课程",
      freeclass: "免费课程",
      payclass: "付费课程",
    };
  },
  components: {
    Footers, //底部组件
    myclasscard, //课程卡片组件
  },
  mounted() {
    classare()
      .then((response) => {
        this.userdetali = response.data;
        console.log("---->this.userdetali", this.userdetali);
      })
      .catch((error) => {
        console.error(error);
      }); //在线课程
  },
};
</script>
  
<style scoped>
li {
  list-style: none;
}

.footer {
  position: fixed;
  width: 100%;
  background: #fff;
  bottom: 0;
}

.flex button {
  padding: 0;
  margin: 0;
  border: none;
  background: #fff;
}

.flex button {
  width: 35%;
  height: 70px;
}

.flex {
  display: flex;
  justify-content: space-around;
}

#button1 {
  border-bottom: 2px solid #7d8abf;
}

.object {
  margin-bottom: 26px;
  background: #fff;
  padding: 30px 0 20px 0;
}

.classcard {
  padding-bottom: 25px;
}

.flex li {
  font-size: 16px;
}
</style>  
  