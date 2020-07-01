<template>
  <Layout>
    <Tabs class-prefix="statistics-type" :data-source="typeList" :value.sync="type" />
    <ol class="record-list">
      <li v-for="(group,index) in groupList" :key="index">
        <h3 class="record-list-title">
          <span>{{beautyDate(group.title)}}</span>
          <span>￥{{group.total}}</span>
        </h3>
        <ol>
          <li v-for="item in group.items" class="record-list-item" :key="item.currentTags.id">
            <span>{{tagString(item.currentTags)}}</span>
            <span class="record-list-item-notes">{{item.notes}}</span>
            <span>￥{{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import intervalList from "@/constants/intervalList.ts";
import typeList from "@/constants/typeList.ts";
import dayjs from "dayjs";
import clone from "@/lib/clone";

type Result = {
  title: string;
  total?: number;
  items: RecordItem[];
}[];

@Component({
  components: { Tabs }
})
export default class Statistics extends Vue {
  type = "-";
  typeList = typeList;
  tagString(tags: Tag[]) {
    if (tags.length === 0) return "无";
    return tags.map(tag => tag.name).join(",");
  }
  beforeCreate() {
    this.$store.commit("fetchRecord");
  }
  beautyDate(str: string) {
    const currentDate = dayjs(str);
    const now = dayjs();
    if (currentDate.isSame(now, "d")) {
      return "今天";
    } else if (currentDate.isSame(now.subtract(1, "d"), "d")) {
      return "昨天";
    } else if (currentDate.isSame(now.subtract(2, "d"), "d")) {
      return "前天";
    } else {
      return str;
    }
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get groupList() {
    const { recordList } = this;
    if (recordList.length === 0) {
      return [];
    }
    const newList = clone(recordList)
      .filter(r => r.type === this.type)
      .sort(
        (a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf()
      );
    if (newList.length === 0) return [];
    const result: Result = [
      {
        title: dayjs(newList[0].createAt).format("YYYY-MM-DD"),
        items: [newList[0]]
      }
    ];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createAt), "day")) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(current.createAt).format("YYYY-MM-DD"),
          items: [current]
        });
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => (sum += item.amount), 0);
    });
    return result;
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .statistics-type-tab-item {
    background-color: #c4c4c4;
    &.selected {
      background-color: #fff;
    }
    &::after {
      display: none;
    }
  }
  %item {
    font-size: 16px;
    padding: 10px 16px;
  }
  .record-list {
    .record-list-title {
      background-color: #f3f0f0;
      @extend %item;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
    }
    .record-list-item {
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      @extend %item;
      .record-list-item-notes {
        margin-right: auto;
        margin-left: 10px;
      }
    }
  }
}
</style>