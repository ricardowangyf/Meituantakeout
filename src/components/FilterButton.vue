<template>
  <!-- 在线推荐模块过滤按钮 -->
  <div class="between padding">
    <div class="button" v-for="item in index" :key="item">
      <button class="name">{{ items[item].message }}</button>
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
    };
  },
};
</script>
  
<style lang="less" scoped>
button {
  padding: 0;
  background: #fff;
  border: none;
  font-size: 12px;
}

.between {
  display: flex;
  justify-content: space-between;
}
.padding {
  padding-left: 14px;
  padding-top: 3px;
}
.flex {
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
}
.button {
  padding-right: 15px;
}
</style>
  