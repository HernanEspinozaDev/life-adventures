import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import './assets/styles.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEye, faCheckCircle, faLanguage, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faInstagram, faTwitter, faFacebook, faEye, faCheckCircle, faLanguage, faStar);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store).use(router).mount('#app');
