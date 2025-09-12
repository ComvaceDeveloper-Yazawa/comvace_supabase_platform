<script setup lang="ts">
import PageTitle from "@/components/parts/PageTitle.vue";
import InquiryForm from "@/components/parts/InquiryForm.vue";
import NavigationModal from "@/components/modal/NavigationModal.vue";
</script>
<template>
  <div class="outer background-banner">
    <div class="sp-width">
      <div class="main-view">
        <PageTitle :title="'お問い合せ'" :type="'common'" :device="'sp'" />
        <InquiryForm :isPc="false" />
      </div>
    </div>
  </div>
  <NavigationModal />
</template>
<style scoped lang="scss">
.main-view {
  background-color: var(--background-color-main);
  padding-bottom: 50px;
}
</style>
