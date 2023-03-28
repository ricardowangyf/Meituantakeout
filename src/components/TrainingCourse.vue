<template>
  <!-- 培训课程介绍组件 -->
  <div>
    <div class="picture">
      <img :src="des" class="imgsize" />
    </div>
    <div class="textspacing">
      <h2 class="paragraph">{{ eal }}</h2>
      <h1 class="header">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
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
      cart: [],
    };
  },
  methods: {},
};
</script>
<style lang="less">
.textspacing h1 {
  margin: 0;
  font-size: 13px;
  color: gray;
  font-weight: 300;
}
.textspacing h2 {
  margin: 0;
  font-size: 15px;
  font-weight: 400;
}
.picture img {
  height: 78px;
  width: 90%;
  border-radius: 5%;
}
.buttoxn h1 {
  margin: 0;
  font-size: 12px;
  padding-left: 11px;
  color: #808080d4;
  font-weight: 300;
  padding-top: 5px;
}
.buttoxn {
  display: flex;
  justify-content: start;
}
.buttoxn {
  padding-top: 5px;
}
.button {
  padding-right: 20px;
}
</style>