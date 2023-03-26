<template>
  <router-view></router-view>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let msg = ref("vue 3");
    return {
      msg,
    };
  },
};
</script>

<style lang="scss" scoped></style>
