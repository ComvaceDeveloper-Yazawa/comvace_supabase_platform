<script setup lang="ts">
import { productCartListHeader, productCartList } from "@/utils/const";
</script>
<template>
  <table border="1">
    <thead>
      <tr>
        <th v-for="v in productCartListHeader" :key="v.id">{{ v.header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in productCartList" :key="i.id">
        <td>
          <div class="product-flex-box">
            <div class="product-area">
              <img class="product-image" :src="i.image" :alt="i.alt" />
            </div>
            <div class="product-text-area">
              <p>{{ i.name }}</p>
              <img
                class="trush-icon"
                src="@/assets/trush-box.png"
                alt="購入予定商品の削除アイコン"
              />
            </div>
          </div>
        </td>
        <td>{{ i.price }}</td>
        <td>{{ i.quantity }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped lang="scss">
// 横幅は100％、親コンポーネントで外の余白は調整が必要
table {
  width: 100%;
  border-collapse: collapse;
  border: #a5a5a5 solid 1px;
}

th {
  height: 50px;
  font-weight: 400;
  background-color: #33362f;
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 0.5em;
}

th:first-child {
  width: 60%;
}

th:not:first-child {
  width: 20%;
}

td {
  height: 80px;
  padding: 0 10px;
  font-size: 14px;
  font-weight: 400;

  .product-flex-box {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    .product-area {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .product-text-area {
      display: flex;
      flex-direction: column;
      padding-top: 5px;
      width: 100%;
    }

    .product-image {
      min-width: 60px;
      height: 60px;
      object-fit: cover;
    }

    .trush-icon {
      width: 22px;
      height: 22px;
      margin-left: auto;
      cursor: pointer;
    }
  }

  &:not(:first-child) {
    text-align: right;
  }
}
</style>
