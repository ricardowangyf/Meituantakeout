<template>
  <!-- 培训课程介绍组件 -->
  <div class="card-content">
    <div class="picture">
      <img :src="des" class="imgsize" />
    </div>
    <div class="textspacing">
      <h2 class="paragraph">{{ eal }}</h2>
      <div class="space-between">
        <div class="flex-start">
          <h1>{{ zhujiang }}</h1>
          <h1 class="header">{{ title }}</h1>
        </div>
        <h1>{{ baoming }}</h1>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    des: {
      type: String,
      default: "",
    },
    eal: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      zhujiang: "主讲:",
      baoming: "688人报名",
    };
  },
  methods: {},
};
</script>
<style  scoped>
.flex-start {
  display: flex;
  justify-content: flex-start;
}
.space-between {
  display: flex;
  justify-content: space-between;
}
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
  color: #000000;
}
.picture img {
  height: 78px;
  width: 100%;
  border-radius: 5%;
}
</style>