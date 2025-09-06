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
              <p>{{ i.name }}</p>
            </div>
            <img
              class="trush-icon"
              src="@/assets/trush-box.png"
              alt="購入予定商品の削除アイコン"
            />
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
  height: 70px;
  background-color: #33362f;
  color: #ffffff;
  font-size: 22px;
  letter-spacing: 0.5em;
}

th:first-child {
  width: 60%;
}

th:not:first-child {
  width: 20%;
}

td {
  height: 120px;
  padding: 10px 35px;
  font-size: 18px;
  font-weight: 400;

  .product-flex-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 42px 10px 35px !important;

    .product-area {
      display: flex;
      align-items: center;
      gap: 35px;
    }

    .product-image {
      width: 120px;
      height: 100px;
      object-fit: cover;
    }

    .trush-icon {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }

  &:not(:first-child) {
    text-align: right;
  }
}
</style>
