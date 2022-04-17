import { createApp } from "vue";

import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";

const vue = createApp(App);

vue.mount("#app");

vue.component("friend-contact", FriendContact);
