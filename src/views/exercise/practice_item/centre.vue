<template>
  <div>
    <van-nav-bar title="英语" left-arrow   @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      window.history.back();
    },
  },
};
</script>

<style>
</style>