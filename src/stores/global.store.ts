import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore(
  "global",
  () => {
    const displayPage = ref<string>("main");
    const selectedMenu = ref<string>("main");
    const selectedDevice = ref<"pc" | "sp" | "">("");
    const isNavigationDisplay = ref<boolean>(true);

    return { displayPage, selectedMenu, selectedDevice, isNavigationDisplay };
  },
  {
    persist: true,
  },
);
