<template>
  <Layout class-prefix="money">
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="请输入备注" />
      </label>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div class="tags">
      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: "Money"
};
</script>
<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    text-align: right;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
  }
  .buttons {
    @extend %clearFix;
    > button {
      width: 25%;
      height: 64px;
      text-align: center;
      float: left;
      $bg: #f2f2f2;
      background-color: transparent;
      border: 0;
      &:nth-child(1) {
        background-color: $bg;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background-color: darken($bg, 4%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background-color: darken($bg, 4% * 2);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background-color: darken($bg, 4% * 3);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background-color: darken($bg, 4% * 4);
      }
      &:nth-child(14) {
        background-color: darken($bg, 4% * 5);
      }
      &:nth-child(12) {
        background-color: darken($bg, 4% * 6);
      }
      &.ok {
        height: 64px * 2;
        float: right;
      }
      &.zero {
        width: 25% * 2;
      }
    }
  }
}
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      padding: 0 16px;
      background-color: #d9d9d9;
      $h: 24px;
      line-height: $h;
      height: $h;
      border-radius: $h/2;
      margin-right: 12px;
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background-color: transparent;
      border: 0;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
      cursor: pointer;
    }
  }
}
.notes {
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  padding: 0 16px;
  > .name {
    padding-right: 16px;
  }
  > input {
    flex-grow: 1;
    background-color: transparent;
    border: 0;
    padding: 20px 0;
    outline: none;
  }
}
.types {
  display: flex;
  background-color: #c4c4c4;
  align-items: center;
  font-size: 24px;
  > li {
    text-align: center;
    flex: 1;
    height: 64px;
    line-height: 64px;
    position: relative;
    &.selected {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        background-color: #333;
        width: 100%;
        height: 3px;
        left: 0;
      }
    }
  }
}
</style>