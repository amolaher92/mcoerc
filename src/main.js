import './plugins/fontawesome'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//createApp(App).use(router,).mount('#app')
const app = createApp(App);
app.use(VueSweetalert2)
app.use(router)
app.mount('#app')
