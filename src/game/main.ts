import Vue from "vue";
import App from "./gameApp.vue";
import "../registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
