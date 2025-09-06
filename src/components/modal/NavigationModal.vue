<script setup lang="ts">
import { ref } from "vue";

const isDisplay = ref<boolean>(true);
</script>
<template>
  <div class="outer" v-if="isDisplay">
    <div class="inner">
      <p>閉じるボタンをクリックするとページが表示されます。</p>
      <p>ページ表示後にメニューに戻る場合はページをリロードしてください。</p>
      <p>
        ⚠️
        SPは検証ツールから横幅を390pxに設定した想定で作成しています。そのため、コンテンツ以外の背景色を黒にしていますが、カリキュラムで作成する際は検証ツールから横幅を390pxに設定し、コンテンツのみを作成してください
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
}
</style>
