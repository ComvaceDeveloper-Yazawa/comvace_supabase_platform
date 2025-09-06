<script setup lang="ts">
import CommonButton from "./CommonButton.vue";

const props = defineProps<{
  text: string;
  isSingleButton: boolean;
  buttonText?: string;
  buttonPrevText?: string;
  buttonNextText?: string;
}>();
</script>
<template>
  <div class="outer">
    <div class="text-area">{{ props.text }}</div>
    <div class="button-area">
      <div class="single-button" v-if="props.isSingleButton">
        <button>{{ props.buttonText }}</button>
      </div>
      <div class="double-button" v-else>
        <CommonButton text="戻る" :mode="'pc-prev'" />
        <CommonButton text="購入する" :mode="'pc-next'" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.outer {
  background-color: #33362f;
  width: 100%;
  height: 260px;
  padding: 55px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  font-size: 18px;
  color: #fff;
  margin: 80px 0;
}

.button-area {
  display: flex;
  justify-content: center;
  align-items: center;

  .double-button {
    display: flex;
    gap: 50px;
  }
}
</style>
