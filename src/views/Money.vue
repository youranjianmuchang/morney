<template>
  <Layout class-prefix="money">
    <NumberPad />
    <Notes />
    <Types />
    <Tags />
  </Layout>
</template>

<script lang="ts">
import NumberPad from "@/components/Money/NumberPad.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
export default {
  name: "Money",
  components: { NumberPad, Notes, Types, Tags }
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
</style>