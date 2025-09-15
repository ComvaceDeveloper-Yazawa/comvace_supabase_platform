<script setup lang="ts">
const props = defineProps({
  selectedDisplayModal: {
    type: String,
    default: "",
  },
});

const modalDisplay = defineModel();
</script>
<template>
  <div class="modal-outer">
    <div class="modal-inner">
      <img
        src="@/assets/close-icon.png"
        alt="閉じるアイコン"
        class="close-icon"
        @click="modalDisplay = false"
        v-if="props.selectedDisplayModal !== 'order'"
      />
      <p v-if="props.selectedDisplayModal === 'cart'">カートに追加しました</p>
      <div v-if="props.selectedDisplayModal === 'order'" class="order-complete">
        <div>
          ご注文が完了しました<br />この度はご注文いただきありがとうございました
        </div>
        <button @click="modalDisplay = false">買い物を続ける</button>
      </div>
      <p v-if="props.selectedDisplayModal === 'send'">
        お問い合せ内容を送信しました
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.modal-outer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999;
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
</style>
