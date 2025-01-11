<template>
  <div id="app">
    <MainNavbar />
    <main>
      <router-view />
    </main>
    <FooterPage />
  </div>
</template>

<script>
import MainNavbar from '@/components/MainNavbar.vue';
import FooterPage from '@/components/FooterPage.vue'; 

export default {
  components: { MainNavbar, FooterPage }, 
  created() {
    this.$store.dispatch('loadResorts');
    this.$store.dispatch('loadGuides');
    this.$store.dispatch('loadCities');
  },
};
</script>

<style>
</style>
