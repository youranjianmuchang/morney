<template>
  <button class="button">
    <!-- <button class="button" @click="$emit('click',$event)"> //$emit('click',$event)可以使得自定义模板触发点击事件 -->
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
.button {
  background-color: #767676;
  color: white;
  border: 0;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
  }
}
</style>