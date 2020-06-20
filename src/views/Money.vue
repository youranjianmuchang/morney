<template>
  <Layout class-prefix="money">
    <NumberPad :initOutput.sync="record.amount" @submit="saveRecord" />
    <div class="notes">
      <FormItem filed-name="备注" placeholderText="在这里输入备注" :value.sync="record.notes" />
    </div>
    <Types :xxx="123" :type.sync="record.type" />
    <Tags :data-source="tagList" :currentTags.sync="record.currentTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import NumberPad from "@/components/Money/NumberPad.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import store from "@/store/index2.ts";

@Component({
  components: { NumberPad, FormItem, Types, Tags }
})
export default class Money extends Vue {
  tagList = store.tagList;
  record: RecordItem = {
    currentTags: [],
    type: "-",
    notes: "",
    amount: 0
  };
  recordList = store.recordList;
  saveRecord() {
    store.createRecord(this.record);
  }
}
</script>
<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
</style>
<style lang="scss" scoped>
// @import "~@/assets/style/helper.scss";
</style>