<template>
  <!-- 培训课程介绍组件 -->
  <div class="card-content">
    <div class="picture">
      <img :src="imgurl" class="imgsize" />
    </div>
    <div class="textspacing">
      <h2 class="paragraph">{{ name }}</h2>
      <h1 class="header">{{ monet }}</h1>
    </div>
    <h1 class="human">{{ human }}人已抢</h1>
    <button>立即抢购</button>
  </div>
</template>

<script >
export default {
  name: "XxxxXxx",
  props: {
    imgurl: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    monet: {
      type: String,
      default: "",
    },
    human: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  scoped>
.textspacing h1 {
  margin: 0;
  font-size: 13px;
  color: gray;
  font-weight: 300;
}
.textspacing h2 {
  margin: 0;
  font-size: 12px;
  font-weight: 400;
}
.picture img {
  border-radius: 5%;
}
.picture img {
  height: 78px;
  width: 100%;
}
.human {
  margin: 0;
  font-size: 12px;
  color: #8080806b;
}
.human {
  display: flex;
  justify-content: flex-end;
}
.human {
  position: relative;
  bottom: 20px;
}
.card-content button {
  padding: 0;
  margin: 0;
  background-color: rgb(255 71 0 / 79%);
  border: none;
  text-align: center;
  color: #fff;
  margin: 0 0 16px 10px;
}
.card-content button {
  width: 134px;
  height: 25px;
}
</style>