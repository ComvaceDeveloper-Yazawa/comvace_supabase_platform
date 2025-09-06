import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// import("disable-devtool").then(({ default: DisableDevTool }) => {
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

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
