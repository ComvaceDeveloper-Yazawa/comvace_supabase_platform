<script setup lang="ts">
import PageTitle from "@/components/parts/PageTitle.vue";
import PaymentSelect from "@/components/parts/PaymentSelect.vue";
import PageBottomNav from "@/components/parts/PageBottomNav.vue";
import NavigationModal from "@/components/modal/NavigationModal.vue";
</script>
<template>
  <div class="background-banner">
    <div class="pc-width">
      <div class="main-view">
        <PageTitle :title="'購入手続き'" :type="'common'" :device="'pc'" />
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
  <NavigationModal />
</template>
<style scoped lang="scss">
.main-view {
  background-color: var(--background-color-main);
  padding: 0 90px 80px 90px;
}
</style>
