<template>
  <Layout class-prefix="money">
    <NumberPad :initOutput.sync="record.amount" @submit="saveRecord" />
    <Notes :notes.sync="record.notes" />
    <Types :xxx="123" :type.sync="record.type" />
    <Tags :data-source.sync="record.tags" :currentTags.sync="record.currentTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import NumberPad from "@/components/Money/NumberPad.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import { model } from "@/model";

@Component({
  components: { NumberPad, Notes, Types, Tags }
})
export default class Money extends Vue {
  record: RecordItem = {
    tags: ["衣", "食", "住", "行"],
    currentTags: [],
    type: "-",
    notes: "",
    amount: 0
  };
  recordList = model.fetch();
  saveRecord() {
    this.record.createAt = new Date();
    const newRecord = model.clone(this.record);
    this.recordList.push(newRecord);
  }

  @Watch("recordList")
  onRecordListChange() {
    model.save(this.recordList);
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