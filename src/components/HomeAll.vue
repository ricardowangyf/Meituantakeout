<template>
  <!-- 详情多肉植物组件 -->
  <div class="detali-plant">
    <div class="paragraphcontent">
      <div class="picture">
        <img :src="des" class="imgsize" />
      </div>
      <div class="textspacing">
        <h1 class="header">{{ title }}</h1>
        <h2 class="paragraph">{{ eal }}</h2>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    des: {
      type: String,
      default: "",
    },
    eal: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      cart: []
    };
  },
  methods: {

  }
};
</script>
<style lang="less">

</style>