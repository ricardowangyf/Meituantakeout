<template>
  <div class="card">
    <img :src="imgurl" class="img" />
    <div class="contant">
      <h1>{{ name }}</h1>
      <div class="flex">
        <div>
          <img :src="svg" />
        </div>
        <span class="contant-span"> {{ lastlearn }}{{ time }}</span>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "CardApp",
  props: {
    imgurl: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    svg: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      lastlearn: "上次学到",
    };
  },
};
</script>
  
<style scoped>
.img {
  width: 50%;
}
.contant h1 {
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  padding-bottom: 38px;
}
.contant img {
  width: 20px;
}
.flex {
  display: flex;
}
.card {
  display: flex;
}
.contant {
  padding-left: 17px;
}
.contant-span {
  font-size: 10px;
  color: #8080808f;
}
</style>