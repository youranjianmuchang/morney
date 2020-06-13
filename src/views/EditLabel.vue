<template>
  <div>编辑标签</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { tagListModel } from "@/models/tagListModel";

@Component
export default class EditLabel extends Vue {
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