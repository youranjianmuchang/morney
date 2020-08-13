<template>
  <Layout>
    <Tabs class-prefix="statistics-type" :data-source="typeList" :value.sync="type" />
    <ol class="record-list" v-if="viewType">
      <li v-for="(group,index) in groupList" :key="index">
        <h3 class="record-list-title">
          <span>{{beautyDate(group.title)}}</span>
          <span>￥{{group.total}}</span>
        </h3>
        <ol>
          <li v-for="(item,index) in group.items" class="record-list-item" :key="index">
            <span>{{tagString(item.currentTags)}}</span>
            <span class="record-list-item-notes">{{item.notes}}</span>
            <span>￥{{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
    <VueEcharts :options="echartsList" v-else></VueEcharts>
    <span v-if="recordList.length > 0" class="viewButton" @click="viewType=!viewType">{{buttonText}}</span>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import typeList from "@/constants/typeList.ts";
import dayjs from "dayjs";
import clone from "@/lib/clone";
import VueEcharts from "@/components/vue-echarts.vue";

type Result = {
  title: string;
  total?: number;
  items: RecordItem[];
}[];

@Component({
  components: { Tabs, VueEcharts }
})
export default class Statistics extends Vue {
  type = "-";
  typeList = typeList;
  viewType = true;
  tagString(tags: Tag[]) {
    if (tags.length === 0) return "无";
    return tags.map(tag => tag).join(",");
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
  get buttonText() {
    return this.viewType === true ? "图表" : "列表";
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get echartsList() {
    const { recordList } = this;
    const newList = clone(recordList).filter(r => r.type === this.type);

    const title = this.type === "-" ? "支出" : "收入";
    const typeData: Record<string, any> = {};
    newList.forEach(record => {
      const { currentTags, amount } = record;
      for (let i = 0; i < currentTags.length; i++) {
        const tag = currentTags[i];
        if (Object.prototype.hasOwnProperty.call(typeData, tag)) {
          typeData[tag] += amount;
        } else {
          typeData[tag] = amount;
        }
      }
    });
    const titleArr: string[] = [];
    const priceArr: number[] = [];
    this.$store.commit("fetchTag");
    this.$store.state.tagList.forEach((tag: { id: string; name: string }) => {
      const name = tag.name;
      if (Object.prototype.hasOwnProperty.call(typeData, name)) {
        titleArr.push(name);
        priceArr.push(typeData[name]);
      }
    });

    // 指定图表的配置项和数据
    const option = {
      title: {
        text: title
      },
      tooltip: {},
      legend: {
        data: [title]
      },
      xAxis: {
        data: titleArr
      },
      yAxis: {},
      series: [
        {
          type: "line",
          data: priceArr,
          itemStyle: {
            borderWidth: 10,
            color: "#ff9400"
          },
          lineStyle: {
            color: "#ff9400"
          }
        }
      ],
      backgroundColor: "#fff"
    };

    return option;
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
    padding: 0.18rem 0.29rem;
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
        margin-left: 0.18rem;
      }
    }
  }
  .viewButton {
    position: absolute;
    bottom: 1.5rem;
    right: 0.5rem;
    border-radius: 50%;
    background-color: rgba(181, 181, 181, 0.5);
    color: #fff;
    font-size: 0.3rem;
    display: inline-block;
    width: 0.85rem;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
  }
}
</style>