<template>
  <!-- 在线推荐模块过滤按钮 -->
  <div class="buttoxn">
    <h1>{{ classification }}</h1>
    <div class="flex">
      <div class="button" v-for="item in index" :key="item">
        <button class="name">{{ items[item].message }}</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "FilterButton",
  data() {
    return {
      items: [
        { message: "全部" },
        { message: "平面广告" },
        { message: "电商淘宝" },
        { message: "网页UI" },
        { message: "视屏音屏" },
        { message: "装饰装修" },
      ],
      index: [0, 1, 3, 4, 5],
      classification: "类别: ",
    };
  },
};
</script>
  
<style lang="less" scoped>
.button h1 {
  margin: 0;
  font-size: 12px;
  padding-top: 5px;
  padding-left: 5px;
  color: #808080a1;
  font-weight: 400;
}
button {
  padding: 0;
  background: #fff;
  border: none;
  font-size: 12px;
}
.flex {
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
}
</style>
  