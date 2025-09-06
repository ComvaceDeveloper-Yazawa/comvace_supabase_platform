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
  <div class="mobile-outer">
    <div class="text-area">{{ props.text }}</div>
    <div class="button-area">
      <div class="single-button" v-if="props.isSingleButton">
        <button>{{ props.buttonText }}</button>
      </div>
      <div class="double-button" v-else>
        <CommonButton text="戻る" :mode="'sp-prev'" />
        <CommonButton text="購入する" :mode="'sp-next'" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.mobile-outer {
  background-color: #33362f;
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  font-size: 14px;
  color: #fff;
  margin-top: 50px;
}

.button-area {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .double-button {
    display: flex;
    flex-direction: column;
    gap: 27px;
  }
}
</style>
