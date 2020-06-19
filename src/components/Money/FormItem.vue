<template>
  <div>
    <label class="formItem">
      <span class="name">{{filedName}}</span>
      <input type="text" :placeholder="placeholderText" v-model="currentValue" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class FormItem extends Vue {
  @Prop(String) value: string | undefined;
  @Prop({ required: true }) filedName!: string;
  @Prop() placeholderText!: string;
  currentValue = this.value;

  @Watch("currentValue")
  onCurrentValueChange(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.formItem {
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
    padding: 8px 0;
    outline: none;
  }
}
</style>