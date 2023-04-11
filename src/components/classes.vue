<template>
  <div class="centera">
    <div class="class-picture">
      <div>
        <h1>{{ name }}</h1>
        <div class="start jianju">
          <img src="../assets/address.svg" />
          <h1 class="data job">{{ data }}</h1>
        </div>
        <div class="start">
          <img src="../assets/time.svg" />
          <h2 class="job">{{ job }}</h2>
        </div>
      </div>
      <button class="bao">
        {{ baoming }}
      </button>
    </div>
  </div>
</template>
  
<script scoped>
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
  data() {
    return {
      baoming: "火速报名",
    };
  },
};
</script>
  
<style  >
.username {
  margin: 0;
  padding: 0;
}
.class-picture h1 {
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
.jianju {
  padding: 15px 0 15px 0;
}
.class-picture {
  display: flex;
  justify-content: space-between;
}
.class-picture {
  padding-right: 20px;
}
.bao {
  border-radius: 21%;
  color: #fff;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  background: #ff2800;
  margin: 0;
  border: none;
  padding: 5px;
  height: 34px;
}
</style>