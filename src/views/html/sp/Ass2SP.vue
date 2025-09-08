<script setup lang="ts">
import PageTitle from "@/components/parts/PageTitle.vue";
import TableViewSP from "@/components/parts/TableViewSP.vue";
import PageBottomNavSP from "@/components/parts/PageBottomNavSP.vue";
</script>
<template>
  <div class="outer">
    <div class="inner">
      <PageTitle :title="'カート一覧'" :isPc="false" />
      <TableViewSP />
      <PageBottomNavSP
        :text="'購入手続きはこちらから行うことができます'"
        :isSingleButton="false"
        buttonPrevText="戻る"
        buttonNextText="購入に進む"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.outer {
  width: 100%;
  min-height: 100svh;
  background-color: rgb(0, 0, 0, 0.6);
  inset: 0;
  background-image: url("data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='320' height='160'>\
  <g fill='white' fill-opacity='0.14' font-size='20' \
     font-family='-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial'>\
    <text x='0' y='40' transform='rotate(-30 0 40)'>この背景は実装対象外</text>\
    <text x='0' y='110' transform='rotate(-30 0 110)'>この背景は実装対象外</text>\
  </g>\
</svg>");
  background-repeat: repeat;
  background-size: 500px 500px;
}

.inner {
  width: 390px;
  background-color: #fff9f4;
  margin: 0 auto;
  padding-bottom: 50px;
}
</style>
