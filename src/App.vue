<template>
  <div><Home></Home></div>
</template>

<script>
import { ref } from "vue";
import Home from "./Home.vue";

export default {
  components: {
    Home,
  },
  setup() {
    let msg = ref("vue 3");
    return {
      msg,
    };
  },
};
</script>

<style lang="scss" scoped></style>
