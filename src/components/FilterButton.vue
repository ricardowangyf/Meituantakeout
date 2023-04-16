<template>
  <!-- 在 FilterButton 组件中发射 change 事件 -->
  <div class="spacebetween">
    <div class="card">
      <div
        class="upList"
        v-for="item in upNavList"
        :key="item.id"
        @click="change(item.id)"
        :class="{ backCol: currentId === item.id }"
      >
        <div class="upTitle hover">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterButton",
  props: {
    currentId: { type: Number, default: 0 }, // 当前选中项的 ID，默认为全部分类
  },
  data() {
    return {
      upNavList: [
        { id: 0, title: "全部" },
        { id: 1, title: "平面广告" },
        { id: 2, title: "电商淘宝" },
        { id: 3, title: "网页UI" },
        { id: 4, title: "视频音频" },
        { id: 5, title: "装饰装修" },
      ],
    };
  },
  methods: {
    change(id) {
      this.$emit("change", id);
    },
  },
};
</script>

<style scoped>
.backCol {
  color: #02b8b8;
}
.spacebetween {
  display: flex;
  justify-content: space-between;
}
.spacebetween {
  padding-top: 7px;
}
.upList {
  margin-left: 7px;
}
.card {
  display: flex;
  flex-wrap: wrap;
}

.upTitle {
  font-weight: 200;
  font-size: 10px;
}
</style>
