<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Life Adventures</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavCentered"
        aria-controls="navbarNavCentered"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-center" id="navbarNavCentered">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              :class="['nav-link', { active: isActive('/') }]"
              to="/"
            >
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :class="['nav-link', { active: isActive('/guides') }]"
              to="/guides"
            >
              Guías
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :class="['nav-link', { active: isActive('/resorts') }]"
              to="/resorts"
            >
              Resorts
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :class="['nav-link', { active: isActive('/booking') }]"
              to="/booking"
            >
              Reservas
            </router-link>
          </li>
        </ul>
      </div>

      <!-- "Resorts Disponibles" a la derecha -->
      <div class="navbar-text ms-auto">
        Resorts Disponibles: {{ resortsCount }}
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavbar',
  computed: {
    resortsCount() {
      return this.$store.state.resorts.length;
    },
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<style scoped>
.nav-link {
  position: relative;
  color: #000;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #28a745;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #28a745;
  bottom: 0;
  left: 0;
}

.navbar-text {
  font-weight: bold;
}
</style>
