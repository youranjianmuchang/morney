<template>
  <ul :class="classPrefix+'-tab'" class="tabs">
    <li
      @click="select(item)"
      :class="liClass(item)"
      class="tabs-item"
      v-for="item in dataSource"
      :key="item.value"
    >{{item.text}}</li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

type DataSourceType = {
  text: string;
  value: string;
};

@Component
export default class Tabs extends Vue {
  @Prop({ required: true, type: Array }) dataSource!: DataSourceType[];
  @Prop({ required: true, type: String }) value!: string;
  @Prop(String) classPrefix?: string;
  liClass(item: DataSourceType) {
    return {
      [this.classPrefix + "-tab-item"]: this.classPrefix,
      selected: this.value === item.value
    };
  }
  select(item: DataSourceType) {
    this.$emit("update:value", item.value);
  }
}
</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  background-color: #c4c4c4;
  align-items: center;
  font-size: 24px;
  &-item {
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