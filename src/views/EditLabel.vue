<template>
  <Layout class-prefix="editLabel">
    <div class="navBar">
      <Icons class="nav-left" name="left" @click.native="goBack" />
      <span class="nav-title">编辑标签</span>
    </div>
    <div class="formItem-wrapper">
      <FormItem filed-name="标签名" placeholderText="输入新的标签名" :value.sync="value" />
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
import store from "@/store/index2.ts";

@Component({
  components: { FormItem, Button }
})
export default class EditLabel extends Vue {
  tag?: Tag = undefined;
  value = "";
  created() {
    this.tag = store.findTag(this.$route.params.id);
    if (this.tag) {
      this.value = this.tag.name;
    } else {
      this.$router.replace("/404");
    }
  }
  removeTag() {
    if (window.confirm("是否确认删除？")) {
      if (this.tag) {
        if (store.removeTag(this.tag.id)) {
          this.$router.back();
        }
      }
    }
  }
  goBack() {
    this.$router.back();
  }
  @Watch("value", { immediate: false })
  onValueChange() {
    if (this.tag) {
      store.updateTag(this.tag.id, this.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  background-color: #fff;
  position: relative;
  text-align: center;
  padding: 12px 0;
  font-size: 16px;
  .nav-left {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.formItem-wrapper {
  background-color: #fff;
  margin-top: 8px;
  padding: 2px 0;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>