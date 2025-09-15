<script setup lang="ts">
import { placeHolder } from "@/utils/const";
import CommonButton from "@/components/vue/parts/CommonButton.vue";
import { ref, computed } from "vue";

const modalDisplay = defineModel();
const REQUIRED_ERROR_MESSAGE = "必須項目です";

// フォームデータ
const formData = ref({
  title: "",
  name: "",
  email: "",
  phone: "",
  content: "",
  agree: false,
});

// エラーメッセージ
const errorMessage = ref({
  title: "",
  name: "",
  email: "",
  phone: "",
  content: "",
  agree: "",
});

// バリデーションルール
const validationRules = {
  title: (value: string) => (value === "" ? REQUIRED_ERROR_MESSAGE : ""),
  name: (value: string) => (value === "" ? REQUIRED_ERROR_MESSAGE : ""),
  email: (value: string) => (value === "" ? REQUIRED_ERROR_MESSAGE : ""),
  phone: (value: string) => (value === "" ? REQUIRED_ERROR_MESSAGE : ""),
  content: (value: string) => (value === "" ? REQUIRED_ERROR_MESSAGE : ""),
  agree: (value: boolean) => (!value ? REQUIRED_ERROR_MESSAGE : ""),
};

// オブジェクトをバラしてブランクがあるか判定する。受講生だとif else祭りになる可能性大？
const hasErrors = computed(() =>
  Object.values(errorMessage.value).some((error) => error !== ""),
);

// バリデーション実行。受講生だとif else祭りになる可能性大？
const validateForm = () => {
  errorMessage.value.title = validationRules.title(formData.value.title);
  errorMessage.value.name = validationRules.name(formData.value.name);
  errorMessage.value.email = validationRules.email(formData.value.email);
  errorMessage.value.phone = validationRules.phone(formData.value.phone);
  errorMessage.value.content = validationRules.content(formData.value.content);
  errorMessage.value.agree = validationRules.agree(formData.value.agree);
};

// フォーム送信
const submitForm = () => {
  validateForm();

  if (hasErrors.value) {
    return;
  }

  // 親にモダールオープンを通知する
  modalDisplay.value = true;
};
</script>

<template>
  <h3 class="pc-title">ご不明点などをご記入いただき内容をご送信ください</h3>
  <div class="outer">
    <section class="form-area">
      <div class="input">
        <label class="required" for="inquiry">お問い合せ種別</label>
        <div class="form-wrapper">
          <select
            class="common-input"
            id="inquiry"
            required
            v-model="formData.title"
          >
            <option value="" disabled selected hidden>商品について</option>
            <option value="payment">商品についてのお問い合せ</option>
            <option value="delivery">支払いについてのお問い合せ</option>
            <option value="other">その他についてのお問い合せ</option>
          </select>
          <p v-if="errorMessage.title" class="error">
            {{ errorMessage.title }}
          </p>
        </div>
      </div>

      <div class="input">
        <label class="required" for="name">氏名</label>
        <div class="form-wrapper">
          <input
            class="common-input"
            type="text"
            id="name"
            :placeholder="placeHolder.name"
            v-model="formData.name"
          />
          <p v-if="errorMessage.name" class="error">
            {{ errorMessage.name }}
          </p>
        </div>
      </div>

      <div class="input">
        <label class="required" for="email">メールアドレス</label>
        <div class="form-wrapper">
          <input
            class="common-input"
            type="email"
            id="email"
            :placeholder="placeHolder.email"
            v-model="formData.email"
          />
          <p v-if="errorMessage.email" class="error">
            {{ errorMessage.email }}
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
            :placeholder="placeHolder.phone"
            v-model="formData.phone"
          />
          <p v-if="errorMessage.phone" class="error">
            {{ errorMessage.phone }}
          </p>
        </div>
      </div>

      <div class="input">
        <label class="required" for="content">お問い合せ内容</label>
        <div class="form-wrapper">
          <textarea
            class="common-input"
            id="content"
            :placeholder="placeHolder.inquiry"
            v-model="formData.content"
          ></textarea>
          <p v-if="errorMessage.content" class="error">
            {{ errorMessage.content }}
          </p>
        </div>
      </div>
    </section>

    <div class="personal-info-confirm">
      <input type="checkbox" id="confirm" v-model="formData.agree" />
      <label for="confirm">
        個人情報の取り扱いについて同意した上で送信します
      </label>
    </div>
    <p v-if="errorMessage.agree" class="error">
      {{ errorMessage.agree }}
    </p>

    <div class="button-wrapper">
      <CommonButton text="送信する" :mode="'pc-inquiry'" @click="submitForm" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.pc-title {
  font-size: 24px;
  font-weight: 400;
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
    select {
      @include select("gray", 20px);
    }
    input,
    textarea {
      @include input;
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
.error {
  color: #ff0000;
  font-size: 12px;
}
</style>
