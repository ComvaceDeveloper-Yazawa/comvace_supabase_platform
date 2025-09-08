import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";
import "@/styles/main.scss";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");

//   DisableDevTool({
//     // options
//     disableMenu: true,
//     clearIntervalWhenDevOpenTrigger: false,
//     ondevtoolopen: () => {
//       document.documentElement.style.display = "none";
//       document.body.innerHTML = "none";
//       // window.location.href = document.referrer;
//     },
//     ondevtoolclose: () => {
//       window.location.reload();
//     },
//   });
// });
