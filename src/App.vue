<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      store: this.$store2a
    };
  }
};
</script>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

html body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $font-hei;
  line-height: 1.5;
  color: #333;
  font-size: 16px;
  background-color: #f5f5f5;
}

@media (min-width: 500px) {
  html {
    font-size: 55.2px !important;
    width: 414px !important;
    margin: auto;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
}
</style>
