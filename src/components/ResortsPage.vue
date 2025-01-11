<!-- src/components/ResortsPage.vue -->
<template>
  <div class="container mt-5">
    <h1 class="mb-4">Resorts</h1>
    <div class="mb-4">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar por ciudad..."
        v-model="searchCity"
      />
    </div>
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
    <div v-else-if="error" class="alert alert-danger" role="alert">
      {{ error.message }}
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-4" v-for="resort in filteredResorts" :key="resort.id">
          <ResortCard :resort="resort" />
        </div>
      </div>
      <div class="mt-4">
        <h5>Resumen:</h5>
        <p><strong>Guías Totales:</strong> {{ totalGuides }}</p>
        <p><strong>Resorts Totales:</strong> {{ resorts.length }}</p>
        <p><strong>Tours Totales:</strong> {{ totalTours }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ResortCard from '@/components/ResortCard.vue';

export default {
  components: { ResortCard },
  data() {
    return {
      searchCity: '',
    };
  },
  computed: {
    resorts() {
      return this.$store.state.resorts;
    },
    guides() {
      return this.$store.state.guides;
    },
    totalGuides() {
      return this.$store.state.guides.length;
    },
    totalTours() {
      return this.$store.state.resorts.reduce((acc, resort) => acc + resort.tours, 0);
    },
    loading() {
      return this.$store.state.loading;
    },
    error() {
      return this.$store.state.error;
    },
    filteredResorts() {
      if (this.searchCity.trim() === '') {
        return this.resorts;
      }
      return this.resorts.filter(resort =>
        resort.city.toLowerCase().includes(this.searchCity.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para ResortsPage.vue si es necesario */
</style>
