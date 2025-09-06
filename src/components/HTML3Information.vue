<script setup lang="ts">
import { ref } from "vue";
import ProductDetailModal from "@/components/modal/ProductDetailModal.vue";
import ProductDetailModalSP from "@/components/modal/ProductDetailModalSP.vue";
import CommonModal from "@/components/modal/CommonModal.vue";
import closeIcon from "@/assets/close-info.png";
import questionIcon from "@/assets/open-info.png";
import imageSrc from "/chara.png";

const openProductDetailModal = ref<boolean>(false);
const openProductDetailModalSP = ref<boolean>(false);
const openCommonModal = ref<boolean>(false);
const selectedDisplayModal = ref<string>("");

const showGuide = ref<boolean>(true);

defineProps({
  scale: { type: Number, default: 1 },
  offsetRight: { type: Number, default: 16 },
  offsetBottom: { type: Number, default: 16 },
  device: { type: String, required: true },
});
</script>

<template>
  <main
    class="wrap"
    v-if="
      !openProductDetailModal && !openProductDetailModalSP && !openCommonModal
    "
  >
    <section class="panel">
      <h1>課題3・案内</h1>
      <p
        class="hint"
        @click="
          device === 'pc'
            ? (openProductDetailModal = true)
            : (openProductDetailModalSP = true)
        "
      >
        成果物1：商品詳細モーダルを表示
      </p>
      <p
        class="hint"
        @click="
          openCommonModal = true;
          selectedDisplayModal = 'cart';
        "
      >
        成果物2：カート追加完了モーダルを表示
      </p>
      <p
        class="hint"
        @click="
          openCommonModal = true;
          selectedDisplayModal = 'order';
        "
      >
        成果物3：注文完了モーダルを表示
      </p>
      <p
        class="hint"
        @click="
          openCommonModal = true;
          selectedDisplayModal = 'send';
        "
      >
        成果物4：送信完了モーダルを表示
      </p>
    </section>

    <aside
      class="guide"
      :style="{
        '--guide-scale': scale,
        right: offsetRight + 'px',
        bottom: offsetBottom + 'px',
      }"
    >
      <!-- 吹き出し（右上にレトロ閉じるボタン） -->
      <div
        v-if="showGuide"
        class="bubble"
        role="dialog"
        aria-live="polite"
        aria-label="課題3の案内"
      >
        <button
          class="icon-btn icon-close"
          aria-label="案内を閉じる"
          @click="showGuide = false"
        >
          <img :src="closeIcon" alt="" class="icon-img icon-img--close" />
        </button>
        <ul>
          <li>
            課題3は成果物が<strong>4つ</strong>あるので注意をしてください。
          </li>
          <li>
            それぞれ<strong>別々のHTMLファイル</strong>を作成してまとめてレビュー依頼に出してください。
          </li>
          <li>
            デモの展示は「<strong>×</strong>」ボタンと「<strong>買い物を続ける</strong>」ボタンをクリック
            or
            タップするとモーダルが閉じられますが、課題では<strong>開閉機能は実装対象外</strong>です。
          </li>
        </ul>
      </div>

      <!-- キャラ＋（非表示時のみ）クエスチョン再表示ボタン -->
      <div class="char-wrap">
        <img
          class="char"
          :src="imageSrc"
          alt="レトロRPG風の魔法使いキャラクター"
          decoding="async"
          loading="eager"
        />
        <button
          v-if="!showGuide"
          class="icon-btn icon-question"
          aria-label="案内を再表示する"
          @click="showGuide = true"
          title="案内を再表示"
        >
          <img :src="questionIcon" alt="" class="icon-img icon-img--question" />
        </button>
      </div>
    </aside>
  </main>

  <ProductDetailModal
    v-if="openProductDetailModal"
    v-model="openProductDetailModal"
  />
  <ProductDetailModalSP
    v-if="openProductDetailModalSP"
    v-model="openProductDetailModalSP"
  />
  <CommonModal
    v-if="openCommonModal"
    v-model="openCommonModal"
    :selectedDisplayModal="selectedDisplayModal"
    :device="device"
  />
</template>

<style scoped>
:root {
  --bg: #0f1220;
  --panel: #ffffff;
  --ink: #101215;
  --accent: #2bd2ff;
}

.wrap {
  min-height: 100dvh;
  place-items: center;
  padding: 6rem 1rem 10rem;
  color: #e8f1ff;
  background: radial-gradient(
    1200px 600px at 70% 20%,
    #1b2140 0%,
    #0f1220 60%,
    #0a0d19 100%
  );
  font-family: system-ui, -apple-system, "Hiragino Kaku Gothic ProN",
    "Yu Gothic", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.panel {
  width: min(920px, 95vw);
  background: rgba(255, 255, 255, 0.06);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(6px);
}

h1 {
  margin: 0 0 8px;
  font-size: clamp(24px, 4vw, 40px);
  letter-spacing: 0.06em;
  text-shadow: 0 0 8px rgba(43, 210, 255, 0.35);
}
.panel p {
  line-height: 1.9;
}
.hint {
  color: #b6e6ff;
  cursor: pointer;
}

.guide {
  position: fixed;
  display: flex;
  gap: 12px;
  align-items: flex-end;
  z-index: 10;
  transform: scale(var(--guide-scale, 1));
  transform-origin: 100% 100%;
}

.bubble {
  max-width: min(75vw, 520px);
  color: var(--ink);
  background: var(--panel);
  border: 4px solid #111;
  padding: 30px 30px 30px 10px;
  border-radius: 10px;
  box-shadow: 0 0 0 4px #fff inset, 0 8px 0 #111;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.35));
  position: relative;
}

/* ▼ レトロ調ボタンの枠は維持。中身のアイコンは <img> で表示 */
.icon-btn {
  --size: 40px;
  width: var(--size);
  height: var(--size);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: #fff;
  border: 4px solid #111;
  box-shadow: 0 0 0 4px #fff inset, 0 4px 0 #111;
  border-radius: 6px;
  cursor: pointer;
  position: absolute;
}
.icon-btn:active {
  transform: translateY(2px);
  box-shadow: 0 0 0 4px #fff inset, 0 2px 0 #111;
}

/* 画像そのものの“ドット感” */
.icon-img {
  image-rendering: pixelated;
  display: block;
}

/* 配置とサイズ調整 */
.icon-close {
  top: -14px;
  right: -14px;
}
.icon-img--close {
  width: 18px;
  height: 18px;
}

.icon-question {
  left: -8px;
  top: -8px;
  --size: 40px;
}
.icon-img--question {
  width: 40px;
  height: 40px;
}

/* キャラ */
.char-wrap {
  position: relative;
  display: inline-block;
}
.char {
  width: min(24vw, 180px);
  height: auto;
  image-rendering: pixelated;
  filter: drop-shadow(0 6px 0 #111) drop-shadow(0 10px 16px rgba(0, 0, 0, 0.35));
  user-select: none;
  -webkit-user-drag: none;
}

@media (max-width: 480px) {
  .guide {
    flex-direction: column;
    align-items: flex-end;
  }
  .bubble {
    max-width: 92vw;
  }
}
</style>
