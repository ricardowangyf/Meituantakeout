<template>
  <div>
    <li class="demo fixed">
      <router-link class="none active" to="/">
        <div class="text">
          <img src="../assets/home.svg" />
          <h1>
            {{ home }}
          </h1>
        </div>
      </router-link>
      <router-link class="none" to="/class">
        <div class="text">
          <img src="../assets/classify.svg" />
          <h1>{{ classify }}</h1>
        </div>
      </router-link>
      <router-link class="none" to="/classity">
        <div class="text">
          <img src="../assets/class.svg" />
          <h1>{{ claass }}</h1>
        </div>
      </router-link>
      <router-link class="none" to="/my">
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
  color: rgb(186, 186, 186);
}
li {
  list-style: none;
}
.isactive {
color: #005fe4;
}

.none {
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

.fixed {
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  background-color: #fff;
}
</style>