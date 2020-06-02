<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="请输入备注" v-model="value" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  value = "";
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.notes {
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  padding: 0 16px;
  > .name {
    padding-right: 16px;
  }
  > input {
    flex-grow: 1;
    background-color: transparent;
    border: 0;
    padding: 20px 0;
    outline: none;
  }
}
</style>