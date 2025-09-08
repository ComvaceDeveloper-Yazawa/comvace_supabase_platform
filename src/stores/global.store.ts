import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore("global", () => {
  const displayPage = ref<string>("main");
  const selectedMenu = ref<string>("main");

  // function increment() {
  //   count.value = 100;
  // }

  return { displayPage, selectedMenu };
});
