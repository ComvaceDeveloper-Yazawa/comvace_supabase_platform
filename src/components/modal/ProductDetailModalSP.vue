<script setup lang="ts">
const openProductDetailModal = defineModel();
</script>
<template>
  <div class="sponly-outer">
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
  </div>
</template>
<style scoped lang="scss">
.sponly-outer {
  width: 100vw;
  height: 100svh;
  background-color: gray;
  display: flex;
  justify-content: center;
}

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
    width: 390px;
    height: fit-content;
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

    .product-image {
      width: 320px;
      height: 225px;
      object-fit: cover;
    }
  }
}

.detail-area {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title-and-amount {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.action {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .quantity {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 400;
    margin-left: auto;
  }
  .select {
    select {
      height: 30px;
      width: 100px;
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
    width: fit-content;
    margin: 0 auto;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
}
</style>
