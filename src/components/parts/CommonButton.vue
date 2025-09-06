<script setup lang="ts">
const props = defineProps<{
  text: string;
  mode: "pc-prev" | "pc-next" | "sp-prev" | "sp-next";
  isContactForm?: boolean;
}>();
</script>
<template>
  <button
    :class="{
      'pc-prev': props.mode === 'pc-prev',
      'pc-next': props.mode === 'pc-next',
      'sp-prev': props.mode === 'sp-prev',
      'sp-next': props.mode === 'sp-next',
    }"
  >
    {{ props.text }}
  </button>
</template>
<style scoped lang="scss">
// PC用スタイル
.pc-prev {
  border-radius: 50px;
  padding: 17px 0;
  width: 300px;
  color: #fff;
  border: 1px solid #fff;
  background-color: #33362f;

  &:hover {
    background-color: #000;
    border: 1px solid #000;
  }
}
.pc-next {
  border-radius: 50px;
  padding: 17px 0;
  width: 300px;
  color: #33362f;
  border: 1px solid #fff;
  background-color: #fff;

  &:hover {
    color: #fff;
    background-color: #000;
    border: 1px solid #000;
  }
}

//SP用スタイル
.sp-prev {
  border-radius: 50px;
  padding: 10px 0;
  width: 200px;
  color: #fff;
  border: 1px solid #fff;
  background-color: #33362f;

  &:hover {
    background-color: #000;
    border: 1px solid #000;
  }
}
.sp-next {
  border-radius: 50px;
  padding: 10px 0;
  width: 200px;
  color: #33362f;
  border: 1px solid #fff;
  background-color: #fff;

  &:hover {
    color: #fff;
    background-color: #000;
    border: 1px solid #000;
  }
}
</style>
