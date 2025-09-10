<script setup lang="ts">
import PageTitle from "@/components/parts/PageTitle.vue";
import PaymentSelect from "@/components/parts/PaymentSelect.vue";
import PageBottomNavSP from "@/components/parts/PageBottomNavSP.vue";
import NavigationModal from "@/components/modal/NavigationModal.vue";
</script>
<template>
  <div class="outer background-banner">
    <div class="sp-width">
      <div class="main-view">
        <PageTitle :title="'購入手続き'" :type="'common'" :device="'sp'" />
        <PaymentSelect :isPc="false" />
        <PageBottomNavSP
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
  background-color: #fff9f4;
  padding-bottom: 50px;
}
</style>
