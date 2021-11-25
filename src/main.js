import './plugins/fontawesome'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


//createApp(App).use(router,).mount('#app')
const app = createApp(App);
app.use(PrimeVue, { ripple: true })
app.use(ToastService)
app.use(VueSweetalert2)
app.use(router)
app.mount('#app');