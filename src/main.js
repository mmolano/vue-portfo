import {createApp} from 'vue';
import App from './App.vue';

import router from './router';

import "./dist/tailwind.css";
import "./assets/style/style.css";

const app = createApp(App);

app.config.devtools = true;
app.use(router);

app.mount('#app');
