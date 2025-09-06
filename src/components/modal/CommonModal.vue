<script setup lang="ts">
const props = defineProps({
  selectedDisplayModal: {
    type: String,
    default: "",
  },
  device: {
    type: String,
    default: "",
  },
});

const openCommonModal = defineModel();
</script>
<template>
  <div v-if="props.device === 'pc'" class="modal-outer">
    <div class="modal-inner">
      <img
        src="@/assets/close-icon.png"
        alt="閉じるアイコン"
        class="close-icon"
        @click="openCommonModal = false"
        v-if="props.selectedDisplayModal !== 'order'"
      />
      <p v-if="props.selectedDisplayModal === 'cart'">カートに追加しました</p>
      <p v-if="props.selectedDisplayModal === 'order'" class="order-complete">
        <p>ご注文が完了しました<br />この度はご注文いただきありがとうございました</p>
        <button @click="openCommonModal = false">買い物を続ける</button>
      </p>
      <p v-if="props.selectedDisplayModal === 'send'">
        お問い合せ内容を送信しました
      </p>
    </div>
  </div>
  <div v-if="props.device === 'sp'" class="mobile-only-outer">
      <div class="modal-outer">
    <div class="modal-inner">
      <img
        src="@/assets/close-icon.png"
        alt="閉じるアイコン"
        class="close-icon"
        @click="openCommonModal = false"
        v-if="props.selectedDisplayModal !== 'order'"
      />
      <p v-if="props.selectedDisplayModal === 'cart'">カートに追加しました</p>
      <p v-if="props.selectedDisplayModal === 'order'" class="order-complete">
        <p>ご注文が完了しました<br />この度はご注文いただきありがとうございました</p>
        <button @click="openCommonModal = false">買い物を続ける</button>
      </p>
      <p v-if="props.selectedDisplayModal === 'send'">
        お問い合せ内容を送信しました
      </p>
    </div>
  </div>
  </div>
</template>
<style scoped lang="scss">
.modal-outer {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.6);
  font-size: 20px;
  .modal-inner {
    background-color: #fff;
    width: 1200px;
    height: 600px;
    padding: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    position: relative;

    .close-icon {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 45px;
      right: 45px;
      cursor: pointer;
    }
  }
}

.order-complete {
  text-align: center;
  line-height: 2;
}

button {
  background-color: #fff;
  border: 1px solid #000;
  padding: 8px 27px;
  border-radius: 50px;
  margin-top: 38px;

  &:hover {
    background-color: #000;
    color: #fff;
  }
}

.mobile-only-outer {
  width: 100vw;
  height: 100svh;
  background-color: gray;
  display: flex;
  justify-content: center;
  .modal-outer {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 100%;
  padding: 140px 20px;
  background-color: rgb(0, 0, 0, 0.6);
  font-size: 14px;
  .modal-inner {
    background-color: #fff;
    width: 350px;
    height: 517px;
    padding: 45px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    position: relative;

    .close-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
  }
}
}




</style>
