<script setup lang="ts">
import router from "@/router";
import { useGlobalStore } from "@/stores/global.store";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const globalStore = useGlobalStore();
const { isNavigationDisplay } = storeToRefs(globalStore);

// checkboxの状態を直接管理
const menuToggle = ref(false);

const pageChangeHandler = (path: string) => {
  // メニューを閉じる
  isNavigationDisplay.value = false;
  menuToggle.value = false; // checkboxも閉じる
  router.push(path);
};

// ハンバーガーメニューのトグル処理
const toggleMenu = () => {
  menuToggle.value = !menuToggle.value;
  isNavigationDisplay.value = menuToggle.value;
};
</script>

<template>
  <div class="outer background-banner">
    <div class="inner sp-width">
      <header class="header">
        <div class="header-inner">
          <!-- ヘッダーロゴ -->
          <div @click="pageChangeHandler('home')" class="header-logo">
            <img src="@/assets/logo-sp.png" alt="" />
          </div>

          <!-- ハンバーガーメニュー（checkboxを削除してclickイベントで制御） -->
          <div
            @click="toggleMenu"
            class="header-hamburger"
            :class="{ 'is-active': menuToggle }"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <!-- フルスクリーンメニュー -->
          <nav class="header-nav-content" :class="{ 'is-open': menuToggle }">
            <ul class="header-nav-list">
              <li @click="pageChangeHandler('cart')" class="header-nav-item">
                カート一覧
              </li>
              <li @click="pageChangeHandler('inquiry')" class="header-nav-item">
                お問い合せ
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </div>
</template>

<style scoped lang="scss">
.outer {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9999;
}

.inner {
  background-color: var(--color-company-theme);
  height: 50px;
}

.header {
  position: relative;
  width: 100%;

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;

    .header-logo {
      margin-left: 20px;
      position: relative;
      z-index: 99999999;
      cursor: pointer;

      img {
        width: 60px;
        height: 40px;
        object-fit: cover;
      }
    }

    /* ハンバーガー */
    .header-hamburger {
      position: relative;
      width: 40px;
      height: 20px;
      cursor: pointer;
      z-index: 1000;
      margin-right: 20px;

      span {
        position: absolute;
        height: 1px;
        right: 0;
        background: #ffffff;
        transition: all 0.6s;

        &:nth-of-type(1) {
          top: 0;
          width: 40px;
        }

        &:nth-of-type(2) {
          top: 10px;
          width: 30px;
        }

        &:nth-of-type(3) {
          top: 20px;
          width: 20px;
        }
      }

      /* アクティブ時の状態 */
      &.is-active {
        span {
          width: 20px;

          &:nth-child(1) {
            transform: translateY(10px) rotate(45deg);
            width: 30px;
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(3) {
            transform: translateY(-10px) rotate(-45deg);
            width: 30px;
          }
        }
      }
    }

    /* メニュー */
    .header-nav-content {
      position: fixed;
      top: 0;
      max-width: var(--sp-width);
      min-width: var(--sp-width);
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      transition: all 0.6s;
      z-index: 900;
      display: flex;
      flex-direction: column;
      background: var(--color-company-theme);

      &.is-open {
        visibility: visible;
        opacity: 1;
      }
    }

    .header-nav-list {
      list-style: none;
      text-align: center;
      padding: 0;
      margin-top: 175px;
      display: flex;
      flex-direction: column;
      gap: 35px;

      .header-nav-item {
        cursor: pointer;
        font-size: 18px;
        color: #000;
      }
    }
  }
}
</style>
