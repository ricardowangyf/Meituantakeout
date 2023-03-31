<template>
  <div class="centera">
    <div class="picture">
      <h1>{{ name }}</h1>
      <div class="start jianju">
        <img src="../assets/address.svg" />
        <h1 class="data job">{{ data }}</h1>
      </div>
      <div class="start ">
        <img src="../assets/time.svg" />
        <h2 class="job">{{ job }}</h2>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "XxxxXxx",
  props: {
    job: {
      type: String,
      default: "",
    },
    data: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
};
</script>
  
<style  >
.username {
  margin: 0;
  padding: 0;
}
.picture h1 {
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
}
.start {
  display: flex;
  justify-content: flex-start;
}
.start img {
  width: 20px;
}
.job {
  margin: 0;
  font-size: 15px;
  color: #808080bd;
  font-weight: 300;
}
.jianju{
  padding-top: 15px;
    padding-bottom: 15px;
}
</style>