<script setup lang="ts">
import PageTitle from "@/components/parts/PageTitle.vue";
import TableViewSP from "@/components/parts/TableViewSP.vue";
import PageBottomNavSP from "@/components/parts/PageBottomNavSP.vue";
</script>
<template>
  <div class="outer">
    <div class="inner">
      <PageTitle :title="'カート一覧'" :isPc="false" />
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
  background-color: #000;
}

.inner {
  width: 390px;
  background-color: #fff9f4;
  margin: 0 auto;
  padding-bottom: 50px;
}
</style>
