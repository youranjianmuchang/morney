<template>
  <Layout>
    <Types class-prefix="statistics" :type.sync="type" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Types from "@/components/Money/Types.vue";
@Component({
  components: { Types }
})
export default class Statistics extends Vue {
  type = "-";
}
</script>

<style lang="scss" scoped>
::v-deep .statistics-item {
  background-color: #fff;
  &.selected {
    background-color: #c4c4c4;
  }
  &::after {
    display: none;
  }
}
</style>