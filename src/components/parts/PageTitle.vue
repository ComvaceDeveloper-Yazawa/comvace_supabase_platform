<script setup lang="ts">
defineProps<{
  title: string;
  isPc: boolean;
}>();
</script>
<template>
  <div :class="isPc === true ? 'page-title' : 'mobile-title'">
    {{ title }}
  </div>
</template>
<style scoped lang="scss">
.page-title {
  font-size: 28px;
  font-weight: bold;
  color: #000;
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  margin: 80px 0;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-bottom: #d89323 6px solid;
    width: 40px;
    margin-top: 8px;
  }
}

.mobile-title {
  font-size: 20px;
  font-weight: bold;
  color: #000;
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 40px;
  margin-bottom: 50px;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-bottom: #d89323 6px solid;
    width: 40px;
    margin-top: 8px;
  }
}
</style>
