<template>
  <div>
    <label class="notes">
      <span class="name">{{filedName}}</span>
      <input type="text" :placeholder="placeholderText" v-model="value" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  @Prop(String) notes: string | undefined;
  @Prop({ required: true }) filedName!: string;
  @Prop() placeholderText!: string;
  value = this.notes;

  @Watch("value")
  onValueChange(value: string) {
    this.$emit("update:notes", value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
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
</style>