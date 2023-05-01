<template>
  <div class="spacebetween">
    <div class="card">
      <div class="upList" v-for="item in filteredList" :key="item.id">
        <router-link :to="`/list/${tableData.tab}`">
          <div class="upTitle hover">{{ item.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "FilterButton",
  props: ["type"],
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
      selectedCategory: "全部",
    };
  },
  computed: {
    filteredList() {
      if (this.selectedCategory === "全部") {
        return this.upNavList;
      } else {
        return this.upNavList.filter(
          (item) => item.title === this.selectedCategory
        );
      }
    },
  },
};
</script>
  <style>
scoped > .backCol {
  color: #02b8b8;
}
button {
  padding: 0;
  margin: 0;
  border: none;
  background: #fff;
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
  font-size: 13px;
}
</style>
  