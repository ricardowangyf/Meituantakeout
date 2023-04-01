<template>
  <div>
    <li class="demo">
      <div class="text">
        <img src="../assets/home.svg" />
        <ul>
          {{
            home
          }}
        </ul>
      </div>
      <div class="text">
        <img src="../assets/classify.svg" />
        <ul>
          {{
            classify
          }}
        </ul>
      </div>
      <div class="text">
        <img src="../assets/class.svg" />
        <ul>
          {{
            claass
          }}
        </ul>
      </div>
      <div class="text">
        <img src="../assets/my.svg" />
        <ul>
          {{
            my
          }}
        </ul>
      </div>
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
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
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