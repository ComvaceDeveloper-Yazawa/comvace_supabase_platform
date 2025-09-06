<script setup lang="ts">
const openProductDetailModal = defineModel();
</script>
<template>
  <div class="modal-outer">
    <div class="modal-inner">
      <img
        src="@/assets/close-icon.png"
        alt="閉じるアイコン"
        class="close-icon"
        @click="openProductDetailModal = false"
      />
      <img
        src="@/assets/menu2.png"
        alt="マイルドブレンド珈琲豆商品の写真"
        class="product-image"
      />
      <div class="detail-area">
        <div class="title-and-amount">
          <p class="title">マイルドブレンド珈琲豆</p>
          <p class="amount">￥3,350</p>
        </div>
        <div class="explain">
          <p>
            ミディアム・シティーローストのダブルロースト。マイルドで且つコクがある。
          </p>
        </div>
        <div class="action">
          <div class="quantity">
            <p>数量</p>
            <div class="select">
              <select name="category" id="category">
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <button class="add-button">カートに追加する</button>
        </div>
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

    .product-image {
      width: 476px;
      height: 461px;
      object-fit: cover;
    }
  }
}

.detail-area {
  display: flex;
  flex-direction: column;
  gap: 67px;
}

.title-and-amount {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.action {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .quantity {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 20px;
    font-weight: 400;
  }
  .select {
    select {
      height: 40px;
      width: 120px;
      border: 1px solid #dddddd;
      border-radius: 5px;
      font-size: 16px;
      background-color: #fff;
      padding-left: 30px;
      cursor: pointer;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: url("/src/assets/selector.png") no-repeat right 10px center
        #fff;
    }
  }
  button {
    background-color: #fff;
    border: 1px solid #000;
    padding: 8px 27px;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
}
</style>
