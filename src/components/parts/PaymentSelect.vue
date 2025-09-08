<script setup lang="ts"></script>
<template>
  <div class="outer">
    <div class="payment">
      <div class="label">支払い方法</div>
      <div class="selector">
        <label>
          <input
            type="radio"
            name="payment"
            value="bank_transfer"
          />口座振り込み
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="credit_card"
          />クレジットカード
        </label>
        <label>
          <input type="radio" name="payment" value="cash_on_delivery" />代金引換
        </label>
      </div>
    </div>
    <div class="content">
      <div class="info-text">下記の振込先にお振込をお願いいたします</div>
      <div class="info-bank-account">
        <p>普通預金</p>
        <p>名義：株式会社comvace</p>
        <p>口座番号：10010021</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.outer {
  font-family: Inter, sans-serif;
  width: 900px;
  margin: 0 auto;
  box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.05);
  padding: 133px 97px;
  border: 1px solid #dddddd;
}

.payment {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 400;
}

.selector {
  display: flex;
  gap: 40px;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #dddddd;
    margin-right: 20px;
    position: relative;
    top: 2px;
    cursor: pointer;

    &:checked {
      background-color: #e7d032;
    }
  }
}

.content {
  margin-top: 60px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .info-bank-account {
    display: flex;
    gap: 40px;
  }
}
</style>
