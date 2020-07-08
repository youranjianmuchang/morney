<template>
  <a-modal
    title="请输入标签名"
    :visible="isVisible"
    @ok="ok"
    @cancel="cancel"
    okText="确认"
    cancelText="取消"
  >
    <input type="text" v-model="tagName" placeholder="请输入标签名" class="tagName" id="tagName" />
  </a-modal>
</template>

<script lang="ts">
import Vue from "vue";
import TagHelper from "@/mixins/TagHelper";
import { mixins } from "vue-class-component";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class AddModal extends mixins(TagHelper) {
  @Prop(Boolean) isVisible!: boolean;
  tagName = "";
  ok() {
    if (this.tagName === "") {
      this.$message.error("标签名不能为空");
    } else {
      this.createTag(this.tagName);
      this.tagName = "";
      this.$emit("update:isVisible", false);
    }
  }
  cancel() {
    this.$emit("update:isVisible", false);
  }
}
</script>

<style scoped>
.tagName {
  border: 0;
  min-width: 60%;
  border-bottom: 1px solid #ccc;
  outline-color: transparent;
}
</style>