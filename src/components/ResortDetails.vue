<template>
    <div class="container mt-5" v-if="resort">
      <h1>{{ resort.name }}</h1>
      <img :src="resort.image" alt="Resort Image" class="img-fluid mb-4">
      <p><strong>Ciudad:</strong> {{ resort.city }}, {{ resort.country }}</p>
      <p><strong>Estrellas:</strong> {{ resort.stars }}</p>
      <p><strong>Precio por noche:</strong> ${{ resort.price_per_night }}</p>
      <p><strong>Amenities:</strong> {{ resort.amenities.join(', ') }}</p>
      <p><strong>Tours Disponibles:</strong> {{ resort.tours }}</p>
      <p><strong>Guías Asignados:</strong> {{ resort.guides }}</p>
      <router-link to="/booking" class="btn btn-success">Reservar Ahora</router-link>
    </div>
    <div v-else-if="loading" class="container mt-5 text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
    <div v-else class="container mt-5">
      <p class="alert alert-warning">Resort no encontrado.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    computed: {
      resort() {
        return this.$store.state.resorts.find(resort => resort.id === parseInt(this.id));
      },
      loading() {
        return this.$store.state.loading;
      },
    },
    created() {
      if (!this.$store.state.resorts.length) {
        this.$store.dispatch('loadResorts');
      }
    },
  };
  </script>
  
  <style scoped>
  .img-fluid {
    max-height: 500px;
    object-fit: cover;
  }
  </style>
  