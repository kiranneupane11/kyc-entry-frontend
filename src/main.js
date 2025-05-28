import './assets/main.css'
import router from "./router";
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    }
});

app.mount('#app')