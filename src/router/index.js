import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/HomePage.vue';
import GuidesPage from '@/components/GuidesPage.vue';
import ResortsPage from '@/components/ResortsPage.vue';
import ResortDetails from '@/components/ResortDetails.vue';
import BookingForm from '@/components/BookingForm.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/guides', component: GuidesPage },
  { path: '/resorts', component: ResortsPage },
  { path: '/resort/:id', component: ResortDetails, props: true },
  { path: '/booking', component: BookingForm },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
