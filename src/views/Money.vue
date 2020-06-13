<template>
  <Layout class-prefix="money">
    <NumberPad :initOutput.sync="record.amount" @submit="saveRecord" />
    <Notes filed-name="备注" placeholderText="在这里输入备注" :notes.sync="record.notes" />
    <Types :xxx="123" :type.sync="record.type" />
    <Tags :data-source.sync="tags" :currentTags.sync="record.currentTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import NumberPad from "@/components/Money/NumberPad.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import { recordListModel } from "@/models/recordListModel";
import { tagListModel } from "@/models/tagListModel";

const tagList = tagListModel.fetch();

@Component({
  components: { NumberPad, Notes, Types, Tags }
})
export default class Money extends Vue {
  tags = tagList;
  record: RecordItem = {
    currentTags: [],
    type: "-",
    notes: "",
    amount: 0
  };
  recordList = recordListModel.fetch();
  saveRecord() {
    this.record.createAt = new Date();
    const newRecord = recordListModel.clone(this.record);
    this.recordList.push(newRecord);
  }

  @Watch("recordList")
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
</script>
<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>