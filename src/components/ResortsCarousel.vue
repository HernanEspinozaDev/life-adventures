<template>
    <div class="resorts-carousel my-5">
      <div
        class="carousel-container"
        ref="carouselContainer"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        <div
          class="carousel-track"
          :style="trackStyle"
        >
          <div
            class="carousel-slide"
            v-for="(resort, index) in resorts"
            :key="resort.id"
            :class="{ active: isActive(index) }"
            :style="{ flex: '0 0 ' + (100 / slidesToShow) + '%' }"
          >
            <div class="resort-card-container">
              <ResortCard :resort="resort" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ResortCard from './ResortCard.vue';
  
  export default {
    name: 'ResortsCarousel',
    components: {
      ResortCard,
    },
    props: {
      resorts: {
        type: Array,
        required: true,
      },
      slidesToShow: {
        type: Number,
        default: 3, 
      },
      autoplayInterval: {
        type: Number,
        default: 3000, 
      },
    },
    data() {
      return {
        currentIndex: 0,
        intervalId: null,
        cardWidth: 0,
        totalSlides: 0,
      };
    },
    computed: {
      trackStyle() {
        return {
          transform: `translateX(-${this.currentIndex * this.cardWidth}px)`,
          transition: 'transform 0.5s ease-in-out',
        };
      },
    },
    methods: {
      startAutoplay() {
        if (!this.intervalId) {
          this.intervalId = setInterval(this.nextSlide, this.autoplayInterval);
        }
      },
      stopAutoplay() {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      },
      nextSlide() {
        if (this.currentIndex >= this.totalSlides - this.slidesToShow) {
          this.currentIndex = 0;
        } else {
          this.currentIndex += 1;
        }
      },
      prevSlide() {
        if (this.currentIndex <= 0) {
          this.currentIndex = this.totalSlides - this.slidesToShow;
        } else {
          this.currentIndex -= 1;
        }
      },
      calculateCardWidth() {
        const containerWidth = this.$refs.carouselContainer.clientWidth;
        this.cardWidth = containerWidth / this.slidesToShow;
      },
      handleResize() {
        this.calculateCardWidth();
      },
      isActive(index) {
        const centralOffset = Math.floor(this.slidesToShow / 2);
        const centralIndex = this.currentIndex + centralOffset;
  
        if (centralIndex >= this.totalSlides) {
          return centralIndex - this.totalSlides === index;
        }
        return centralIndex === index;
      },
    },
    mounted() {
      this.calculateCardWidth();
      this.totalSlides = this.resorts.length;
      this.startAutoplay();
      window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
      this.stopAutoplay();
      window.removeEventListener('resize', this.handleResize);
    },
  };
  </script>
  
  <style scoped>
  .resorts-carousel {
    width: 100%;
  }
  
  .carousel-container {
    overflow: hidden;
    width: 100%;
    position: relative;
  }
  
  .carousel-track {
    display: flex;
  }
  
  .carousel-slide {
    padding: 0 0.5rem;
    box-sizing: border-box;
    transition: transform 0.5s ease-in-out;
    position: relative;
  }
  
  /* Contenedor de la tarjeta para scaling */
  .resort-card-container {
    width: 100%;
    transition: transform 0.5s ease-in-out;
  }
  
  /* Tarjeta activa (central) */
  .carousel-slide.active .resort-card-container {
    transform: scale(1.1);
    z-index: 2;
  }
  
  /* Tarjetas laterales */
  .carousel-slide:not(.active) .resort-card-container {
    transform: scale(0.9);
    z-index: 1;
  }
  
  /* Responsividad */
  @media (max-width: 1024px) {
    .carousel-slide.active .resort-card-container {
      transform: scale(1);
    }
  
    .carousel-slide:not(.active) .resort-card-container {
      transform: scale(0.95);
    }
  }
  
  @media (max-width: 768px) {
    .carousel-slide.active .resort-card-container,
    .carousel-slide:not(.active) .resort-card-container {
      transform: scale(1);
    }
  }
  </style>
  