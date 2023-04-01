<template>
  <div>
    <div class="flex">
      <div class="wenzi bottom">
        {{ classes }}
      </div>
      <div class="more">
        {{ more }}
      </div>
    </div>
    <div class="card">
      <div class="HotreCommendation-img">
        <img :src="des" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotreCommendation",
  props: {
    des: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      classes: "热门推荐",
      more: "更多",
    };
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.wenzi {
  width: 85px;
  padding-top: 10px;
  font-weight: 300;
  font-size: 21px;
  margin: 10px 0 0 10px;
}
.bottom {
  border-bottom: 1px solid blue;
}

.more {
  font-weight: 200;
  color: #808080a3;
  height: 20px;
  padding: 26px 13px 0 0;
}
</style>