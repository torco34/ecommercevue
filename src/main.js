import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapVueNext from 'bootstrap-vue-next';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import "bootstrap";
import store from "./store";
import router from "./router/index";
import '@fortawesome/fontawesome-free/css/all.css';

import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
const app = createApp(App);

const options = {
  position: POSITION.BOTTOM_RIGHT, 
  timeout: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  closeButton: "button",
  icon: true,
  rtl: false,
  toastClassName: "custom-toast",
  bodyClassName: "custom-toast-body",

};
app.use(router);
app.use(store);
app.use(Toast, options);
app.use(BootstrapVueNext);
app.mount("#app");
// createApp(App).mount("#app");
