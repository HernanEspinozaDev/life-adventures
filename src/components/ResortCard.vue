<!-- src/components/ResortCard.vue -->
<template>
    <div class="card resort-card mb-4 shadow-sm">
      <div class="image-container">
        <img :src="resort.image" class="card-img-top resort-image" :alt="resort.name" loading="lazy">
        <div class="overlay">
          <router-link
            :to="'/resort/' + resort.id"
            class="btn btn-primary"
            aria-label="Ver detalles de {{ resort.name }}"
          >
            Ver Detalles
          </router-link>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ resort.name }}</h5>
        <p class="card-text">
          <strong>Ciudad:</strong> {{ resort.city }}, {{ resort.country }}
        </p>
        <p class="card-text">
          <strong>Estrellas:</strong> ⭐⭐⭐⭐{{ resort.stars > 4 ? '⭐' : '' }}
        </p>
        <p class="card-text">
          <strong>Precio por noche:</strong> ${{ resort.price_per_night }}
        </p>
        <p class="card-text">
          <strong>Amenities:</strong> {{ resort.amenities.join(', ') }}
        </p>
        <div class="d-flex justify-content-end mt-3">
          <!-- Botón de Reserva -->
          <router-link :to="'/booking'" class="btn btn-success" aria-label="Reservar en {{ resort.name }}">Reservar</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResortCard',
    props: {
      resort: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .resort-card {
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .resort-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .image-container {
    position: relative;
    overflow: hidden;
  }
  
  .resort-image {
    height: 200px;
    object-fit: cover;
    transition: transform 0.5s;
  }
  
  .image-container:hover .resort-image {
    transform: scale(1.1);
  }
  
  .overlay {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.5s;
  }
  
  .image-container:hover .overlay {
    opacity: 1;
  }
  
  .overlay .btn {
    background-color: rgba(40, 167, 69, 0.8);
    border: none;
  }
  
  .overlay .btn:hover {
    background-color: rgba(40, 167, 69, 1);
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  
  .card-text {
    font-size: 0.95rem;
  }
  
  @media (max-width: 767.98px) {
    .resort-image {
      height: 150px;
    }
  
    .card-title {
      font-size: 1.1rem;
    }
  
    .card-text {
      font-size: 0.9rem;
    }
  }
  </style>
  