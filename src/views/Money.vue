<template>
  <Layout class-prefix="money">
    <NumberPad :initOutput.sync="record.amount" />
    <Notes :notes.sync="record.notes" />
    <Types :xxx="123" :type.sync="record.type" />
    <Tags :data-source.sync="record.tags" :currentTags.sync="record.currentTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import NumberPad from "@/components/Money/NumberPad.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";

type Record = {
  tags: string[];
  currentTags: string[];
  notes: string;
  type: string;
  amount: number;
  // amount?: number; 在属性后面添加问号，可以使得变量定义时，不强制要用该属性
};
@Component({
  components: { NumberPad, Notes, Types, Tags }
})
export default class Money extends Vue {
  record: Record = {
    tags: ["衣", "食", "住", "行"],
    currentTags: [],
    type: "-",
    notes: "测试",
    amount: 100
  };
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