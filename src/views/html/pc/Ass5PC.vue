<script setup lang="ts">
import PageTitle from "@/components/parts/PageTitle.vue";
import InquiryForm from "@/components/parts/InquiryForm.vue";
import NavigationModal from "@/components/modal/NavigationModal.vue";
</script>
<template>
  <div class="background-banner">
    <div class="pc-width">
      <div class="main-view">
        <PageTitle :title="'お問い合せ'" :type="'common'" :device="'pc'" />
        <InquiryForm />
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
