<script setup lang="ts">
import PageTitle from "@/components/parts/PageTitle.vue";
import PaymentSelect from "@/components/parts/PaymentSelect.vue";
import PageBottomNav from "@/components/parts/PageBottomNav.vue";
</script>
<template>
  <div class="background-banner">
    <div class="pc-width">
      <div class="main-view">
        <PageTitle :title="'購入手続き'" :isPc="true" />
        <PaymentSelect />
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
  background-color: #fff9f4;
  padding: 0 90px 80px 90px;
}
</style>
