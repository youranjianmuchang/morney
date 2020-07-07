<template>
  <Layout class-prefix="money">
    <NumberPad :initOutput.sync="record.amount" @submit="saveRecord" />
    <div class="notes">
      <FormItem filed-name="备注" placeholderText="在这里输入备注" :value.sync="record.notes" />
    </div>
    <Tabs :value.sync="record.type" :data-source="tabItemArr" />
    <Tags :currentTags.sync="record.currentTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import NumberPad from "@/components/Money/NumberPad.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import Tabs from "@/components/Tabs.vue";
import typeList from "@/constants/typeList.ts";

@Component({
  components: { NumberPad, FormItem, Tags, Tabs }
})
export default class Money extends Vue {
  record: RecordItem = {
    currentTags: [],
    type: "-",
    notes: "",
    amount: 0
  };
  get recordList() {
    return this.$store.state.recordList;
  }
  tabItemArr = typeList;
  created() {
    this.$store.commit("fetchRecord");
  }
  saveRecord() {
    if (this.record.currentTags.length < 1) {
      alert("请选择至少一个标签");
      return;
    }
    this.$store.commit("createRecord", this.record);
    this.$message.success("添加成功", () => {
      window.location.reload();
    });
  }
}
</script>
<style scoped lang="scss">
::v-deep {
  .money-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .notes {
    padding: 12px 0;
  }
}
// @import "~@/assets/style/helper.scss";
</style>