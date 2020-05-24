<template>
  <div class="nav">
    <hr />
    <div>
      <router-link to="/money">
        <Icons name="moneybag" />记账
      </router-link>|
      <router-link to="/labels">
        <Icons name="label" />标签
      </router-link>|
      <router-link to="/statistics">
        <Icons name="chartbar" />统计
      </router-link>
    </div>
  </div>
</template>


<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>