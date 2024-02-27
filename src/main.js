import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Polyfill for global object
if (typeof global === "undefined") {
    window.global = window;
}


const app = createApp(App);
app.use(router).use(createPinia()).mount('#app');
