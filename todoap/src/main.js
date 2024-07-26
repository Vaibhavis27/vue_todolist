
import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Adjust the path as necessary

const app = createApp(App);
app.use(store);
app.mount('#app');