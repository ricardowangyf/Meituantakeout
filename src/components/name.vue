<template>
  <div>
    <div class="imgurl">
      <div class="name-flex">
        <img :src="imgurl" />
        <div class="tag">
          <h1>{{ name }}</h1>
          <div class="buttontop">
            <button class="style none">90后</button>
            <button class="style">狮子座</button>
            <button class="style">爱摄影</button>
          </div>
        </div>
        <el-badge :value="2" class="item" type="warning">
          <el-button size="small" class="naem">回复</el-button>
        </el-badge>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NameApp",
  props: {
    name: {
      type: String,
      default: "",
    },
    imgurl: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
button {
  margin: 0;
  border: none;
}
.style {
  padding: 5px;
  margin-left: 10px;
  border-radius: 10%;
  background-color: #87cefa52;
}
.buttontop {
  margin-top: 10px;
}
.none {
  margin-left: 0;
}
.imgurl img {
  width: 26%;
  border-radius: 50%;
  padding-left: 11px;
}
.imgurl h1 {
  margin: 0;
  font-size: 23px;
  font-weight: 400;
}
.name-flex {
  padding: 42px 0 42px 0;
  display: flex;
}
.nameasd {
  padding: 0;
  margin: 0;
}
.tag {
  margin-left: 15px;
}
.naem {
  background-color: #57a6f7;
}
.item {
  margin-left: 18px;
}
</style>
