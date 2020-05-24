<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid green;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  overflow: auto;
  flex-grow: 1;
  border: 1px solid blue;
}
</style>