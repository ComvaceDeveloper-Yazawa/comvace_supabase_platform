<script setup lang="ts">
import PageTitle from "@/components/parts/PageTitle.vue";
import InquiryForm from "@/components/vue/parts/InquiryForm.vue";
import CommonModal from "@/components/vue/modal/CommonModal.vue";
import { ref } from "vue";

const modalDisplay = ref<boolean>(false);
</script>
<template>
  <div class="background-banner">
    <div class="pc-width">
      <div class="main-view">
        <PageTitle :title="'お問い合せ'" :type="'common'" :device="'pc'" />
        <InquiryForm v-model="modalDisplay" />
        <CommonModal
          :selectedDisplayModal="'send'"
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
