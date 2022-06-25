import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import { createPinia } from "pinia" ;

import Toaster from "@meforma/vue-toaster";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/style.scss";

//axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://newsapp.be875981ca9416725.temporary.link/api/v1/';

createApp(App).use(store).use(createPinia()).use(Toaster).use(router).mount("#app");
