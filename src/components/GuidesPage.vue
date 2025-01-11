<template>
  <div class="container mt-5">
    <h1 class="mb-4">Nuestros Guías</h1>
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="error" class="alert alert-danger" role="alert">
      {{ error.message }}
    </div>
    <div v-else class="row">
      <div class="col-md-4" v-for="guide in guides" :key="guide.email">
        <GuideCard :guide="guide" />
      </div>
    </div>
  </div>
</template>

<script>
import GuideCard from '@/components/GuideCard.vue';

export default {
  components: { GuideCard },
  computed: {
    guides() {
      return this.$store.state.guides;
    },
    loading() {
      return this.$store.state.loading;
    },
    error() {
      return this.$store.state.error;
    },
  },
};
</script>

<style scoped>
</style>
