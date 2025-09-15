<script setup lang="ts">
import PageTitle from "@/components/parts/PageTitle.vue";
import PaymentSelect from "@/components/vue/parts/PaymentSelect.vue";
import PageBottomNav from "@/components/vue/parts/PageBottomNav.vue";
import CommonModal from "@/components/vue/modal/CommonModal.vue";
import { ref } from "vue";

const modalDisplay = ref<boolean>(false);
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
          v-model="modalDisplay"
        />
        <CommonModal
          :selectedDisplayModal="'order'"
          v-if="modalDisplay === true"
          v-model="modalDisplay"
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
