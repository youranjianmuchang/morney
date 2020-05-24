<template>
  <div class="nav">
    <hr />
    <div>
      <router-link to="/money">
        <svg class="icon">
          <use xlink:href="#moneybag" />
        </svg>
        记账
      </router-link>|
      <router-link to="/labels">labels</router-link>|
      <router-link to="/statistics">statistics</router-link>
    </div>
  </div>
</template>


<script>
import x from "@/assets/icons/moneybag.svg";
console.log(x);

export default {};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>