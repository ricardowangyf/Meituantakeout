<template>
  <!-- 培训课程介绍组件 -->
  <div class="card-content">
    <div class="card-bottom">
      <div class="picture">
        <img :src="imgurl" class="imgsize" />
      </div>
      <div class="textspacing">
        <h2 class="paragraph">{{ name }}</h2>
        <h1 class="header">{{ monet }}</h1>
      </div>
      <div class="flex-number">
        <h1 class="human">{{ number }}</h1>
        <h1 class="human">{{ human }}人已抢</h1>
      </div>
    </div>
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
    return {
      number: "189.00",
    };
  },
  methods: {},
};
</script>
<style  scoped>
.textspacing h1 {
  margin: 0;
  font-size: 26px;
  color: red;
  font-weight: 400;
  padding: 0 10px 0 10px;
}

.textspacing h2 {
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  padding: 0 10px 0 10px;
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
  font-size: 15px;
  color: #8080806b;
  text-decoration: line-through;
}

.human {
  display: flex;
  justify-content: flex-end;
}

.flex-number {
  display: flex;
  justify-content: space-between;
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
.card-bottom {
  padding-bottom: 12px;
}
</style>