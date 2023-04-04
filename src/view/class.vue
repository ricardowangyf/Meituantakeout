<template>
  <div class="footer">
    <Footers />
  </div>
</template>

<script>
import Footers from "../components/Footers.vue"; //课程卡片组件

export default {
  name: "ClassApp",
  data() {
    return {};
  },
  components: {
    Footers,
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  width: 100%;
  background: #fff;
  bottom: 0;
}
</style>  
