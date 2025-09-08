<script setup lang="ts">
import { homeMenuList } from "@/utils/const";
import NavigationModal from "@/components/modal/NavigationModal.vue";
</script>
<template>
  <div class="outer background-banner">
    <div class="sp-width">
      <div class="main-view">
        <p>コーヒーショップを作ってみよう！</p>
        <img src="/src/assets/main-view.png" alt="" />
      </div>
      <div class="content">
        <div class="searchbar-area">
          <div class="label">
            <p>商品一覧</p>
            <button>絞り込み</button>
          </div>
          <div class="function">
            <div class="select">
              <select name="category" id="category">
                <option value="dummy" disabled selected hidden>並び替え</option>
                <option value="asc">料金が安い順</option>
                <option value="desc">料金が高い順</option>
              </select>
            </div>
          </div>
        </div>
        <div class="menu-cards">
          <div v-for="menu in homeMenuList" :key="menu.id" class="card">
            <img :src="menu.path" alt="" />
            <div class="menu-info">
              <p>{{ menu.name }}</p>
              <p>{{ menu.price }}</p>
            </div>
          </div>
        </div>
        <div class="cart-info">
          <p>このアカウントでカートに追加した商品の一覧を見ることができます</p>
          <p>購入手続きもこちらから行うことができます</p>
          <button>カート一覧を見る</button>
        </div>
      </div>
    </div>
  </div>
  <NavigationModal />
</template>
<style scoped lang="scss">
.main-view {
  position: relative;
  height: 100svh;
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    font-size: 20px;
    background-color: #fff;
    padding: 11px 0;
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.content {
  background-color: #fff9f4;
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
}

.searchbar-area {
  .label {
    width: 100%;
    padding: 11px 25px;
    background-color: #33362f;
    font-size: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    button {
      margin-left: auto;
      border-radius: 5px;
    }
  }
  .function {
    padding: 25px 22px;
    .search {
      width: 100%;
      display: flex;
      gap: 10px;
      input[type="text"] {
        width: 300px;
        height: 30px;
      }
      button {
        height: 30px;
        width: 60px;
        font-size: 14px;
        border-radius: 5px;
      }
    }
    .select {
      select {
        height: 40px;
        width: 100%;
        padding: 0 15px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        background-color: #fff;
        margin-top: 25px;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url("/src/assets/selector.png") no-repeat right 10px center
          #fff;
      }
    }
  }
}

.menu-cards {
  display: grid;
  gap: 20px;
  grid-auto-rows: 280px;
  padding: 0 20px;
  .card {
    padding: 20px 25px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 18px;
    box-shadow: 6px 10px 10px 0px rgb(0, 0, 0, 0.05);
    .menu-info {
      font-size: 14px;
      font-weight: 400px;
    }
    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
  }
}

.cart-info {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 1.8;
  background-color: #33362f;
  color: #fff;
  gap: 20px;
  padding: 50px;
  button {
    border-radius: 50px;
    padding: 16px 68px;
    background-color: #fff;
    color: #33362f;
    cursor: pointer;
    border: #fff 1px solid;

    &:hover {
      background-color: #000;
      color: #fff;
      border: #000 1px solid;
    }
  }
}
</style>
