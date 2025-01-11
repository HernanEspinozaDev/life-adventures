<!-- src/App.vue -->
<template>
  <div id="app">
    <MainNavbar />
    <main>
      <router-view />
    </main>
    <!-- Incluir el nuevo FooterPage -->
    <FooterPage />
  </div>
</template>

<script>
import MainNavbar from '@/components/MainNavbar.vue';
import FooterPage from '@/components/FooterPage.vue'; // Importar FooterPage

export default {
  components: { MainNavbar, FooterPage }, // Registrar FooterPage
  created() {
    this.$store.dispatch('loadResorts');
    this.$store.dispatch('loadGuides');
    this.$store.dispatch('loadCities');
  },
};
</script>

<style>
/* Estilos globales si es necesario */
</style>
