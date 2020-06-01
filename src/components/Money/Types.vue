<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="updateType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="updateType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Types extends Vue {
  @Prop(Number) xxx: number | undefined;
  // Prop 告诉 Vue, xxx不是data是prop
  // Number告诉Vue，xxx运行时是个Number
  // 属性名
  type = "-";
  updateType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknow");
    }
    this.type = type;
  }
  mounted() {
    console.log(this.xxx);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.types {
  display: flex;
  background-color: #c4c4c4;
  align-items: center;
  font-size: 24px;
  > li {
    text-align: center;
    flex: 1;
    height: 64px;
    line-height: 64px;
    position: relative;
    &.selected {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        background-color: #333;
        width: 100%;
        height: 3px;
        left: 0;
        transition: width 0.5s;
      }
    }
  }
}
</style>