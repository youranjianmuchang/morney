<template>
  <Layout>
    <div class="tags">
      <router-link class="item" v-for="tag in tagList" :key="tag.id" :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icons name="right" />
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click.native="isVisible=true">新建标签</Button>
    </div>
    <AddModal :isVisible.sync="isVisible" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import { mixins } from "vue-class-component";
import TagHelper from "@/mixins/TagHelper";
import AddModal from "@/components/AddModal.vue";
@Component({
  components: { Button, AddModal }
})
export default class Labels extends mixins(TagHelper) {
  isVisible = false;
  get tagList() {
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit("fetchTag");
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background-color: #fff;
  padding-left: 0.29rem;
  font-size: 16px;
  > .item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    min-height: 0.8rem;
    align-items: center;
  }
  svg {
    width: 0.35rem;
    height: 0.35rem;
    color: #666;
    margin-right: 0.29rem;
  }
}
.createTag {
  background-color: #767676;
  color: white;
  border: 0;
  border-radius: 0.1rem;
  height: 0.73rem;
  padding: 0 0.29rem;
  outline-color: transparent;
  &-wrapper {
    text-align: center;
    padding: 0.29rem;
    margin-top: 0.51rem;
  }
}
</style>