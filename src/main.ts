import Vue from "vue";
import main from "./main.vue";
import router from "plugins/router";
import store from "plugins/store";
import "plugins/service-worker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(main)
}).$mount("#app");
