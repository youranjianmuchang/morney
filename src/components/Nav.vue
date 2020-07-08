<template>
  <nav class="nav">
    <router-link to="/money" class="item" active-class="selected">
      <Icons name="moneybag" />记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icons name="label" />标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icons name="chartbar" />统计
    </router-link>
  </nav>
</template>


<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 0.58rem;
      height: 0.58rem;
    }
  }
  > .item.selected {
    color: $c-highlight;
  }
}
</style>