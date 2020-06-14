<template>
  <Layout class-prefix="editLabel">
    <div class="navBar">
      <Icons class="nav-left" name="left" />
      <span class="nav-title">编辑标签</span>
    </div>
    <div class="formItem-wrapper">
      <FormItem filed-name="标签名" placeholderText="输入新的标签名" :notes.sync="notes" />
    </div>
    <div class="button-wrapper">
      <Button>删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import FormItem from "@/components/Money/FormItem.vue";
import Button from "@/components/Button.vue";
import { Component } from "vue-property-decorator";
import { tagListModel } from "@/models/tagListModel";

@Component({
  components: { FormItem, Button }
})
export default class EditLabel extends Vue {
  notes = "";
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tagList = tagListModel.data;
    const names = tagList.filter(tag => id === tag.id)[0];
    if (names) {
      console.log(names);
    } else {
      this.$router.replace("/404");
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