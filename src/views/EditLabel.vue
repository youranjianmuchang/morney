<template>
  <Layout class-prefix="editLabel">
    <div class="navBar">
      <Icons class="nav-left" name="left" @click.native="goBack" />
      <span class="nav-title">编辑标签</span>
    </div>
    <div class="formItem-wrapper">
      <FormItem
        filed-name="标签名"
        @update:value="updateTag"
        :value="currentTag.name"
        placeholderText="输入新的标签名"
      />
    </div>
    <div class="button-wrapper">
      <Button @click.native="removeTag">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import FormItem from "@/components/Money/FormItem.vue";
import Button from "@/components/Button.vue";
import { Component, Watch } from "vue-property-decorator";

@Component({
  components: { FormItem, Button }
})
export default class EditLabel extends Vue {
  value = "";
  get currentTag() {
    return this.$store.state.currentTag;
  }
  created() {
    this.$store.commit("setCurrentTag", this.$route.params.id);
    if (!this.currentTag) {
      this.$router.replace("/404");
    }
  }
  removeTag() {
    this.$confirm({
      content: "是否确认删除标签？",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        if (this.currentTag) {
          this.$store.commit("removeTag", this.currentTag.id);
        }
      }
    });
  }
  updateTag(name: string) {
    if (this.currentTag) {
      this.$store.commit("updateTag", {
        id: this.currentTag.id,
        name: name
      });
    }
  }
  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  background-color: #fff;
  position: relative;
  text-align: center;
  padding: 0.23rem 0;
  font-size: 16px;
  .nav-left {
    position: absolute;
    left: 0.23rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
.formItem-wrapper {
  background-color: #fff;
  margin-top: 0.12rem;
  padding: 2px 0;
}
.button-wrapper {
  text-align: center;
  padding: 0.29rem;
  margin-top: 0.51rem;
}
</style>