<script setup lang="ts">
import CommonButton from "./CommonButton.vue";
const props = defineProps({
  isPc: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <h3 :class="props.isPc ? 'pc-title' : 'sp-title'">
    ご不明点などをご記入いただき内容をご送信ください
  </h3>
  <div :class="props.isPc ? 'outer' : 'outer-sp'">
    <section class="form-area">
      <div class="input">
        <label class="required" for="inquiry">お問い合せ種別</label>
        <div class="form-wrapper">
          <select class="common-input" name="inquiry" id="inquiry" required>
            <option value="" disabled selected hidden>商品について</option>
            <option class="option" value="payment">
              商品についてのお問い合せ
            </option>
            <option class="option" value="delivery">
              支払いについてのお問い合せ
            </option>
            <option class="option" value="other">
              その他についてのお問い合せ
            </option>
          </select>
        </div>
      </div>
      <div class="input">
        <label class="required" for="name">氏名</label>
        <div class="form-wrapper">
          <input
            class="common-input"
            type="text"
            id="name"
            placeholder="例：山田 花子"
          />
        </div>
      </div>
      <div class="input">
        <label class="required" for="email">メールアドレス</label>
        <div class="form-wrapper">
          <input
            class="common-input"
            type="email"
            id="email"
            placeholder="例：contact@example.com"
          />
          <p class="error">
            メールアドレスの形式が間違っています。contact@example.com
          </p>
        </div>
      </div>
      <div class="input">
        <label class="required" for="tel">電話番号</label>
        <div class="form-wrapper">
          <input
            class="common-input"
            type="tel"
            id="tel"
            placeholder="例：03-0000-0000"
          />
          <p class="error">
            電話番号の形式が間違っています。ハイフンありで入力してください。
          </p>
        </div>
      </div>
      <div class="input">
        <label class="required" for="tel">お問い合せ内容</label>
        <div class="form-wrapper">
          <textarea
            class="common-input"
            type="text"
            id="tel"
            placeholder="例：領収書の発行について不明点がありますので電話でのサポートを希望します"
          ></textarea>
        </div>
      </div>
    </section>
    <div class="personal-info-confirm">
      <input type="checkbox" id="confirm" />
      <label for="confirm"
        >個人情報の取り扱いについて同意した上で送信します</label
      >
    </div>
    <div class="button-wrapper">
      <CommonButton
        text="送信する"
        :mode="isPc ? 'pc-inquiry' : 'sp-inquiry'"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.pc-title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
}

.sp-title {
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin: 30px 0;
}

.outer {
  font-family: Inter, sans-serif;
  width: 900px;
  margin: 0 auto;
  box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.05);
  padding: 80px 150px;
  border: 1px solid #dddddd;
  background-color: #ffffff;

  .form-area {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 30px;
    font-weight: 400;

    label {
      font-size: 18px;
      font-weight: 400;
      width: fit-content;
    }

    .form-wrapper {
      display: flex;
      flex-direction: column;
      gap: 5px;
      .error {
        color: #ff0000;
        font-size: 12px;
      }
    }

    .required {
      position: relative;
      display: inline-block;
      &::after {
        content: "※";
        color: #ff0000;
        position: absolute;
        top: 0;
        right: -40px;
      }
    }
    .common-input {
      height: 35px;
      border: 1px solid #a5a5a5;
      border-radius: 5px;
      outline: none;
      padding-left: 20px;
    }

    select {
      appearance: none;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: url("/src/assets/selector-gray.png") no-repeat right 20px
        center;
    }

    select:invalid {
      color: #a5a5a5;
    }
  }

  .personal-info-confirm {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    margin-top: 20px;

    input[type="checkbox"] {
      width: 20px;
      min-width: 20px;
      height: 20px;
      min-height: 20px;
      appearance: none;
      -webkit-appearance: none;
      border: 1px solid #a5a5a5;
      border-radius: 3px;
      position: relative;
      cursor: pointer;

      &:checked {
        border: none;
        &::after {
          content: url("/src/assets/checked-box.png");
          position: absolute;
          width: 20px;
          height: 20px;
        }
      }
    }

    label {
      cursor: pointer;
    }
  }
  .button-wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
}

.outer-sp {
  font-family: Inter, sans-serif;
  width: calc(100% - 40px);
  margin: 0 auto;
  box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.05);
  padding: 50px 30px;
  border: 1px solid #dddddd;
  background-color: #ffffff;

  .form-area {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 14px;

    label {
      font-size: 14px;
      font-weight: 400;
      width: fit-content;
    }

    .form-wrapper {
      display: flex;
      flex-direction: column;
      gap: 5px;
      .error {
        color: #ff0000;
        font-size: 8px;
      }
    }

    .required {
      position: relative;
      display: inline-block;
      &::after {
        content: "※";
        color: #ff0000;
        position: absolute;
        top: 0;
        right: -30px;
      }
    }
    .common-input {
      height: 35px;
      border: 1px solid #a5a5a5;
      border-radius: 5px;
      outline: none;
      padding-left: 20px;
    }

    select {
      appearance: none;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: url("/src/assets/selector-gray.png") no-repeat right 20px
        center;
    }

    select:invalid {
      color: #a5a5a5;
    }
  }

  .personal-info-confirm {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 10px;
    margin-top: 20px;

    input[type="checkbox"] {
      width: 15px;
      min-width: 15px;
      height: 15px;
      min-height: 15px;
      appearance: none;
      -webkit-appearance: none;
      border: 1px solid #a5a5a5;
      border-radius: 3px;
      position: relative;
      cursor: pointer;

      &:checked {
        border: none;
        &::after {
          content: url("/src/assets/checked-box-sp.png");
          position: absolute;
          width: 15px;
          height: 15px;
        }
      }
    }

    label {
      cursor: pointer;
    }
  }
  .button-wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
}
</style>
