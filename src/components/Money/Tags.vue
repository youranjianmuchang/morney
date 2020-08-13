<template>
  <div class="tags">
    <div class="new">
      <button @click="isVisible=true">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="{selected:selectedTags.indexOf(tag) >= 0}"
        @click="toggle(tag.name)"
      >{{tag.name}}</li>
    </ul>
    <AddModal :isVisible.sync="isVisible" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import TagHelper from "@/mixins/TagHelper";
import AddModal from "@/components/AddModal.vue";
@Component({
  components: { AddModal }
})
export default class Tags extends mixins(TagHelper) {
  isVisible = false;
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
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  background-color: white;
  font-size: 0.22rem;
  padding: 0.29rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      padding: 0 0.29rem;
      background-color: #d9d9d9;
      $h: 0.43rem;
      line-height: $h;
      height: $h;
      border-radius: $h/2;
      margin-right: 0.22rem;
      &.selected {
        color: #fff;
        background-color: #ff9400;
      }
    }
  }
  > .new {
    padding-top: 0.29rem;
    button {
      background-color: transparent;
      border: 0;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
      cursor: pointer;
      outline-color: transparent;
    }
  }
}
</style>