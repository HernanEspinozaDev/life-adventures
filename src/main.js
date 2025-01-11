// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Importar Bootstrap CSS y JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Importar estilos personalizados
import './assets/styles.css';

// Importar Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEye, faCheckCircle, faLanguage, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Agregar iconos a la biblioteca
library.add(faInstagram, faTwitter, faFacebook, faEye, faCheckCircle, faLanguage, faStar);

// Crear la aplicación y registrar el componente FontAwesomeIcon globalmente
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store).use(router).mount('#app');
