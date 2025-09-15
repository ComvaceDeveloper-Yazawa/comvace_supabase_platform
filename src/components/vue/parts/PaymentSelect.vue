<script setup lang="ts">
import { PaymentMethod } from "@/model";
import { ref } from "vue";
import { prefList, placeHolder } from "@/utils/const";

const props = defineProps({
  isPc: {
    type: Boolean,
    default: true,
  },
});

const selectedPayment = ref<PaymentMethod>("transfer");
</script>
<template>
  <div :class="props.isPc ? 'outer' : 'outer-sp'">
    <div :class="props.isPc ? 'payment' : 'payment-sp'">
      <div class="label">支払い方法</div>
      <div :class="props.isPc ? 'selector' : 'selector-sp'">
        <label>
          <input
            type="radio"
            name="payment"
            value="transfer"
            v-model="selectedPayment"
          />口座振り込み
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="credit"
            v-model="selectedPayment"
          />クレジットカード
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="delivery"
            v-model="selectedPayment"
          />代金引換
        </label>
      </div>
    </div>
    <div
      v-if="selectedPayment === 'transfer'"
      :class="props.isPc ? 'content' : 'content-sp'"
    >
      <div class="info-text">下記の振込先にお振込をお願いいたします</div>
      <div class="info-content">
        <p>普通預金</p>
        <p>名義：株式会社comvace</p>
        <p>口座番号：10010021</p>
      </div>
    </div>
    <div
      v-if="selectedPayment === 'credit'"
      :class="props.isPc ? 'content' : 'content-sp'"
    >
      <div class="info-content">
        <p class="sub-title">カード番号</p>
        <input
          class="form-input"
          type="text"
          :placeholder="placeHolder.cardNumber"
        />
      </div>
    </div>
    <div
      v-if="selectedPayment === 'delivery'"
      :class="props.isPc ? 'content' : 'content-sp'"
    >
      <div class="info-content">
        <div class="sub-title">お届け住所</div>
        <div class="adress">
          <select required>
            <option value="" disabled selected hidden>都道府県</option>
            <option v-for="p in prefList" value="">{{ p.pref }}</option>
          </select>
          <input type="text" :placeholder="placeHolder.address" />
        </div>
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
  background-color: #ffffff;
}

.outer-sp {
  font-family: Inter, sans-serif;
  width: calc(100% - 40px);
  margin: 0 auto;
  box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.05);
  padding: 50px 30px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
}

.payment {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 400;
}

.payment-sp {
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 14px;
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

  input {
    @include radio-box;
  }
}

.selector-sp {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-left: 20px;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  input {
    @include radio-box("sp");
  }
}

.content {
  margin-top: 60px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .info-content {
    display: flex;
    gap: 40px;
    .sub-title {
      white-space: nowrap;
    }
  }
  .form-input {
    @include input;
  }
  select {
    @include select("gray");
    width: 175px;
    height: 35px;
  }
  .adress {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    input {
      @include input;
    }
  }
}
.content-sp {
  margin-top: 45px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .info-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
