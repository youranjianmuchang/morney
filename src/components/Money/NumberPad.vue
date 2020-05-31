<template>
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
</template>

<script>
export default {};
</script>

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
</style>