<script setup lang="ts">
import PageTitle from "@/components/parts/PageTitle.vue";
import TableViewSP from "@/components/parts/TableViewSP.vue";
import PageBottomNavSP from "@/components/parts/PageBottomNavSP.vue";
</script>
<template>
  <div class="outer background-banner">
    <div class="inner sp-width">
      <PageTitle :title="'カート一覧'" :type="'common'" :device="'sp'" />
      <TableViewSP />
      <PageBottomNavSP
        :text="'購入手続きはこちらから行うことができます'"
        :isSingleButton="false"
        buttonPrevText="戻る"
        buttonNextText="購入に進む"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.outer {
  width: 100%;
  min-height: 100svh;
  background-color: rgb(0, 0, 0, 0.6);
}

.inner {
  background-color: #fff9f4;
  padding-bottom: 50px;
}
</style>
