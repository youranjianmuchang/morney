<template>
  <Layout class-prefix="editLabel">
    <div>
      <Icons name="left" />
      <span>编辑标签</span>
    </div>
    <Notes filed-name="标签名" placeholderText="输入新的标签名" :notes.sync="notes" />
  </Layout>
</template>

<script lang="ts">
import Notes from "@/components/Money/Notes.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { tagListModel } from "@/models/tagListModel";

@Component({
  components: { Notes }
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

<style scoped>
</style>