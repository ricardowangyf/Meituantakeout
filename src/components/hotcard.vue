<template>
  <div>{{ CourseName }}</div>
</template>
<script>
import { recommend } from "../API/index";

export default {
  name: "XxxXxx",
  data() {
    return {
      CourseName: " ",
    };
  },
  mounted() {
    recommend().then((data) => {
      console.log("--->", data.data);
    });
  },
};
</script>
<style scoped>
</style>