<script setup lang="ts">
import PageTitle from "@/components/parts/PageTitle.vue";
import TableView from "@/components/parts/TableView.vue";
import PageBottomNav from "@/components/parts/PageBottomNav.vue";
</script>
<template>
  <div>
    <PageTitle :title="'カート一覧'" :isPc="true" />
    <TableView />
    <PageBottomNav
      :text="'購入手続きはこちらから行うことができます'"
      :isSingleButton="false"
      buttonPrevText="戻る"
      buttonNextText="購入に進む"
    />
  </div>
</template>
<style scoped lang="scss">
div {
  padding: 0 90px;
}
</style>
