<script setup lang="ts">
import router from "@/router";
import { useGlobalStore } from "@/stores/global.store";
import { storeToRefs } from "pinia";
const globalStore = useGlobalStore();
const { isNavigationDisplay } = storeToRefs(globalStore);

const pageChangeHandler = (path: string) => {
  isNavigationDisplay.value = false;
  router.push(path);
};
</script>
<template>
  <div class="pc-width">
    <div class="background-banner">
      <header class="header">
        <img
          @click="pageChangeHandler('home')"
          src="@/assets/logo-pc.png"
          alt="株式会社コッペのロゴ"
        />
        <nav>
          <ul>
            <li @click="pageChangeHandler('cart')">カート一覧</li>
            <li @click="pageChangeHandler('inquiry')">お問い合せ</li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  height: 80px;
  background-color: var(--color-company-theme);
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 60px;
    width: 84.3px;
    object-fit: cover;
    cursor: pointer;
  }

  ul {
    display: flex;
    gap: 90px;
    font-size: 20px;
    color: var(--color-header-footer);
    border: none;
    li {
      list-style: none;
      cursor: pointer;
    }
  }
}
</style>
