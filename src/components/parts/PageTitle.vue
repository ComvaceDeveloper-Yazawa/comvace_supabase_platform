<script setup lang="ts">
defineProps<{
  title: string;
  device: "pc" | "sp";
  type: "common" | "inquiry";
}>();
</script>
<template>
  <div :class="[device, type]">
    {{ title }}
  </div>
</template>
<style scoped lang="scss">
.pc {
  font-family: noto-sans-jp, sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: #000;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 80px 0 30px 0;
  font-weight: 400;

  &.common {
    margin-bottom: 80px;
  }

  &.inquiry {
    margin-bottom: 80px;
  }

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

.sp {
  font-size: 20px;
  color: #000;
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 15px;
  font-weight: 400;

  &.common {
    margin-bottom: 50px;
  }

  &.inquiry {
    margin-bottom: 80px;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-bottom: #d89323 4px solid;
    width: 40px;
    margin-top: 8px;
  }
}
</style>
