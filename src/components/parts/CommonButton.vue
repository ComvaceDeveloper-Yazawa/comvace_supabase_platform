<script setup lang="ts">
const props = defineProps<{
  text: string;
  mode:
    | "pc-prev"
    | "pc-next"
    | "sp-prev"
    | "sp-next"
    | "pc-inquiry"
    | "sp-inquiry";
}>();
</script>
<template>
  <button
    :class="{
      'pc-prev': props.mode === 'pc-prev',
      'pc-next': props.mode === 'pc-next',
      'sp-prev': props.mode === 'sp-prev',
      'sp-next': props.mode === 'sp-next',
      'pc-inquiry': props.mode === 'pc-inquiry',
      'sp-inquiry': props.mode === 'sp-inquiry',
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
.pc-inquiry {
  border-radius: 50px;
  padding: 17px 0;
  width: 300px;
  color: rgb(0, 0, 0, 0.5);
  margin: 0 auto;
  border: 1px solid #fff;
  background-color: #ddd;

  &:hover {
    color: #fff;
    background-color: #000;
    border: 1px solid #000;
  }
}
</style>
