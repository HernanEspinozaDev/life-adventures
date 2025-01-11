<!-- src/components/GuideCard.vue -->
<template>
    <div class="guide-card card mb-4 shadow-sm">
      <div class="image-container">
        <img
          :src="guide.picture.large"
          class="card-img-top guide-image"
          :alt="`${guide.name.first} ${guide.name.last}`"
          loading="lazy"
        >
        <router-link
          :to="'/guide/' + guide.id"
          class="view-details-btn"
          aria-label="Ver detalles de {{ guide.name.first }} {{ guide.name.last }}"
        >
          <font-awesome-icon icon="eye" />
        </router-link>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ guide.name.first }} {{ guide.name.last }}</h5>
        
        <div class="guide-info">
          <div class="info-section">
            <span class="info-title">Especialidades:</span>
            <ul class="list-inline specialties-list">
              <li class="list-inline-item" v-for="specialty in guide.specialties" :key="specialty">
                <font-awesome-icon icon="check-circle" class="text-success me-1" />
                {{ specialty }}
              </li>
            </ul>
          </div>
          
          <div class="info-section">
            <span class="info-title">Idiomas:</span>
            <ul class="list-inline languages-list">
              <li class="list-inline-item" v-for="language in guide.languages" :key="language">
                <font-awesome-icon icon="language" class="text-primary me-1" />
                {{ language }}
              </li>
            </ul>
          </div>
          
          <div class="info-section">
            <span class="info-title">Experiencia:</span>
            <span>{{ guide.experience }} años</span>
          </div>
          
          <div class="info-section">
            <span class="info-title">Calificación:</span>
            <span class="ratings">
              <font-awesome-icon
                v-for="star in 5"
                :key="star"
                icon="star"
                :class="star <= guide.ratings.stars ? 'text-warning' : 'text-muted'"
              />
              <span class="ms-2">({{ guide.ratings.reviews }} reseñas)</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GuideCard',
    props: {
      guide: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .guide-card {
    border: none;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .guide-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  }
  
  .image-container {
    position: relative;
    overflow: hidden;
  }
  
  .guide-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .image-container:hover .guide-image {
    transform: scale(1.05);
  }
  
  .view-details-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    text-decoration: none;
  }
  
  .image-container:hover .view-details-btn {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
  
  .view-details-btn:hover {
    color: #fff;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #28a745;
    margin-bottom: 0.75rem;
  }
  
  .guide-info {
    font-size: 0.95rem;
  }
  
  .info-section {
    margin-bottom: 0.5rem;
  }
  
  .info-title {
    font-weight: bold;
    margin-right: 0.3rem;
  }
  
  .specialties-list,
  .languages-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  .specialties-list li,
  .languages-list li {
    display: inline-block;
    margin-right: 0.5rem;
  }
  
  .ratings .fa-star {
    color: #ffc107;
  }
  
  .ratings .text-muted {
    color: #e4e5e9;
  }
  
  @media (max-width: 768px) {
    .guide-image {
      height: 200px;
    }
    
    .card-title {
      font-size: 1.1rem;
    }
    
    .view-details-btn {
      font-size: 1.2rem;
    }
  }
  </style>
  