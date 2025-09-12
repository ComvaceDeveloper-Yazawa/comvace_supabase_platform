<script setup lang="ts">
import PageTitle from "@/components/parts/PageTitle.vue";
import TableView from "@/components/parts/TableView.vue";
import PageBottomNav from "@/components/parts/PageBottomNav.vue";
</script>
<template>
  <div class="background-banner">
    <div class="pc-width">
      <div class="main-view">
        <PageTitle :title="'カート一覧'" :type="'common'" :device="'pc'" />
        <TableView />
        <PageBottomNav
          :text="'購入手続きはこちらから行うことができます'"
          :isSingleButton="false"
          buttonPrevText="戻る"
          buttonNextText="購入に進む"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.main-view {
  background-color: var(--background-color-main);
  padding: 0 90px 80px 90px;
}
</style>
