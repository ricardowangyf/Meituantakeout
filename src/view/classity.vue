<template>
  <div>
    <div class="center">
      <div class="header">
        <div class="classity-contant">
          <h1>{{ learn }}</h1>
        </div>
        <div class="classity-contant">
          <h1>{{ time }}{{ tiame }}</h1>
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
      tiame: "分钟",
      item:[],
      time:"",
    };
  },
  mounted() {
    time().then((data) => {
      this.item = data.data;
      console.log("---->this.item", this.item);
    });
  },
};
</script>

<style  scoped>
div {
  background: #fff;
}
h1 {
  margin: 0;
  padding: 0;
}
</style>