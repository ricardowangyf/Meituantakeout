<template>
  <div class="centera">
    <div class="picture">
      <img :src="img" class="imgsize" />
    </div>
    <div class="textspacing">
      <h2 class="username">{{ username }}</h2>
      <h1 class="job">{{ job }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "XxxxXxx",
  props: {
    img: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      default: "",
    },
    job: {
      type: String,
      default: "",
    },
  },
};
</script>

<style  scoped>
.job {
  margin: 0;
  font-size: 13px;
  color: gray;
  font-weight: 300;
}
.username {
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 24px;
}
.picture img {
  width: 50%;
  border-radius: 53%;
}
.centera{
  text-align: center;
}
</style>