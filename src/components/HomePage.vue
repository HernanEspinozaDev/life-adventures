<template>
  <div>
    <div class="container mt-5">
      <div class="jumbotron text-center">
        <h1 class="display-4">Bienvenido a Life Adventures</h1>
        <p class="lead">¡Encuentra tu próxima aventura con nosotros!</p>
        <hr class="my-4" />
        <div class="d-flex justify-content-center">
          <router-link
            to="/guides"
            class="btn btn-primary btn-lg me-3"
            aria-label="Conoce a Nuestros Guías"
          >
            Conoce a Nuestros Guías
          </router-link>
          <router-link
            to="/resorts"
            class="btn btn-success btn-lg"
            aria-label="Explora Resorts"
          >
            Explora Resorts
          </router-link>
        </div>
      </div>
    </div>

    <ResortsCarousel :resorts="resorts" />
  </div>
</template>

<script>
import ResortsCarousel from './ResortsCarousel.vue';

export default {
  name: 'HomePage',
  components: {
    ResortsCarousel,
  },
  computed: {
    resorts() {
      return this.$store.state.resorts;
    },
  },
  created() {
    this.$store.dispatch('loadResorts');
    this.$store.dispatch('loadGuides');
    this.$store.dispatch('loadCities');
  },
};
</script>

<style scoped>
.jumbotron {
  background-color: #ffffff;
  padding: 4rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.jumbotron::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(40, 167, 69, 0.05); /* Fondo semitransparente */
  pointer-events: none;
}

.jumbotron:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.jumbotron h1 {
  font-weight: 700;
  color: #28a745;
}

.jumbotron .btn {
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.3rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.jumbotron .btn:hover {
  transform: translateY(-3px);
}

@media (max-width: 767.98px) {
  .jumbotron {
    padding: 2rem 1rem;
  }
}
</style>
