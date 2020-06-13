<template>
  <Layout>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag.id">
        <span>{{tag.name}}</span>
        <Icons name="right" />
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import { tagListModel } from "@/models/tagListModel";
tagListModel.fetch();
@Component
export default class Labels extends Vue {
  tags = tagListModel.data;
  createTag() {
    const name = window.prompt("请输入标签名称");
    if (name) {
      const message = tagListModel.create(name);
      if (message === "duplicated") {
        window.alert("标签已存在");
      } else if (message === "success") {
        window.alert("添加成功");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background-color: #fff;
  padding-left: 16px;
  font-size: 16px;
  > li {
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
  }
}
</style>