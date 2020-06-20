<template>
  <Layout>
    <div class="tags">
      <router-link class="item" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icons name="right" />
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click.native="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import store from "@/store/index2.ts";
@Component({
  components: { Button }
})
export default class Labels extends Vue {
  tags = store.tagList;
  createTag() {
    store.createTag();
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background-color: #fff;
  padding-left: 16px;
  font-size: 16px;
  > .item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    min-height: 44px;
    align-items: center;
  }
  svg {
    width: 18px;
    height: 18px;
    color: #666;
    margin-right: 16px;
  }
}
.createTag {
  background-color: #767676;
  color: white;
  border: 0;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>