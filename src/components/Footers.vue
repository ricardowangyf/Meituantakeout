<template>
  <div>
    <li class="demo">
      <div class="text">
        <img src="../assets/home.svg" />
        <h1>
          {{ home }}
        </h1>
      </div>
      <router-link class="a" to="/classity">
        <div class="text">
          <img src="../assets/classify.svg" />
          <h1>{{ classify }}</h1>
        </div>
      </router-link>
      <router-link class="a" to="/class">
        <div class="text">
          <img src="../assets/class.svg" />
          <h1>{{ claass }}</h1>
        </div>
      </router-link>
      <router-link class="a" to="/my">
        <div class="text">
          <img src="../assets/my.svg" />
          <h1>{{ my }}</h1>
        </div>
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: "XxxxXXxx",
  data() {
    return {
      home: "主页",
      classify: "分类",
      claass: "课程",
      my: "我的",
    };
  },
};
</script>

<style  scoped>
h1 {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 300;
}
li {
  list-style: none;
}
.a {
  text-decoration: none;
}
.demo {
  display: flex;
  justify-content: space-around;
}

.demo {
  padding-top: 8px;
}

.text {
  text-align: center;
}
</style>