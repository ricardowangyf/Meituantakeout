<template>
  <!-- 课程卡片组件内容 -->
  <div class="card">
    <div class="flex">
      <img :src="imgurl" class="img" />
      <div class="contant">
        <h1>{{ name }}</h1>
        <div class="spantop">
          <span class="contant-span"> {{ free }}</span>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
    <div class="classbutton">
      <button class="detali">
        <span>取消报名</span>
      </button>
      <button class="detali">
        <span>评价课程</span>
      </button>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "ClassCard",
  props: {
    name: {
      type: String,
      default: "",
    },
    imgurl: {
      type: String,
      default: "",
    },
    free: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>
    
<style scoped>
img {
  padding: 0 11px 0 11px;
  border-radius: 17%;
}
img {
  width: 93%;
  height: 106px;
}
button {
  padding: 0;
  margin: 0;
  border: none;
}
.contant {
  padding-right: 38px;
}
.card h1 {
  margin: 0;
  font-size: 13px;
  font-weight: 400;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.bottom {
  border-bottom: 2px solid #80808029;
}
.bottom {
  padding-top: 20px;
}
.classbutton {
  display: flex;
  justify-content: flex-end;
}
.classbutton {
  padding-top: 20px;
}
.detali {
  margin-right: 27px;
  border-radius: 19%;
  height: 35px;
  background-color: #0000ff21;
  color: #000000c4;
  width: 25%;
}
.contant-span {
  padding-left: 5px;
  font-size: 12px;
  color: #808080b3;
}

.spantop {
  padding-top: 15px;
}
</style>