<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="{selected:selectedTags.indexOf(tag) >= 0}"
        @click="toggle(tag)"
      >{{tag.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  @Prop(Array) currentTags!: string[];
  selectedTags = this.currentTags;
  get tagList() {
    return this.$store.state.tagList;
  }
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:currentTags", this.selectedTags);
  }
  created() {
    this.$store.commit("fetchTag");
  }
  createTag() {
    this.$store.commit("createTag");
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  background-color: white;
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      padding: 0 16px;
      background-color: #d9d9d9;
      $h: 24px;
      line-height: $h;
      height: $h;
      border-radius: $h/2;
      margin-right: 12px;
      &.selected {
        color: #fff;
        background-color: #ff9400;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background-color: transparent;
      border: 0;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
      cursor: pointer;
    }
  }
}
</style>