<script setup lang="ts">
import HeaderPC from "@/components/layout/HeaderPC.vue";
import HeaderSP from "@/components/layout/HeaderSP.vue";
import FooterPC from "@/components/layout/FooterPC.vue";
import FooterSP from "@/components/layout/FooterSP.vue";
import { useGlobalStore } from "@/stores/global.store";
import { storeToRefs } from "pinia";

const globalStore = useGlobalStore();
const { selectedDevice } = storeToRefs(globalStore);
</script>
<template>
  <HeaderPC v-if="selectedDevice === 'pc'" />
  <HeaderSP v-if="selectedDevice === 'sp'" />
  <router-view />
  <FooterPC v-if="selectedDevice === 'pc'" />
  <FooterSP v-if="selectedDevice === 'sp'" />
</template>
<style scoped lang="scss"></style>
