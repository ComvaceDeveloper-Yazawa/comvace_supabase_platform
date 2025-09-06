<script setup lang="ts">
import HTML3Information from "./HTML3Information.vue";

defineProps<{
  device: string;
}>();
</script>
<template>
  <HTML3Information :device="device" />
</template>
<style scoped lang="scss"></style>
