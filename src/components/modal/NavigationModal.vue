<script setup lang="ts">
import { ref } from "vue";

const isDisplay = ref<boolean>(true);
</script>
<template>
  <div class="outer" v-if="isDisplay">
    <div class="inner">
      <p style="font-size: 3rem">⚠️</p>
      <p>PCは横幅1440px、スマホは390pxを想定して作成してください</p>
      <p>
        検証ツールを活用し、それぞれの横幅でデザイン通りに作成できていればOKです。※広い画面のPCを使っている場合、もしくはスマホ用のレイアウトを確認する際はグレーの背景が見えると思いますが、この背景は実装対象外ですので注意してください。
      </p>
      <button @click="isDisplay = false">閉じる</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");
.outer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100svh;
  background: url("/modal-bk.png") !important;
  font-family: "DotGothic16", sans-serif;
  z-index: 9999999999;
}
.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90vw;
  max-width: 800px;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  button {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 30px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
  p {
    font-size: 24px;
    line-height: 1.5;
    max-width: 800px;
  }
}
</style>
