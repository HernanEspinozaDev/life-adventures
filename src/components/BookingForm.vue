<!-- src/components/ReservationForm.vue -->
<template>
    <div class="reservation-container">
      <div class="reservation-card">
        <h1 class="reservation-title">Reservar un Tour</h1>
        <form @submit.prevent="submitForm" novalidate>
          <div class="form-group mb-4">
            <label for="name" class="form-label">Nombre Completo</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="name"
              required
              placeholder="Ingrese su nombre completo"
            />
          </div>
          <div class="form-group mb-4">
            <label for="email" class="form-label">Correo Electrónico</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email"
              required
              placeholder="Ingrese su correo electrónico"
            />
          </div>
          <div class="form-group mb-4">
            <label for="city" class="form-label">Ciudad</label>
            <select
              v-model="city"
              class="form-select"
              id="city"
              required
            >
              <option value="" disabled>Seleccione una ciudad</option>
              <option v-for="cityItem in cities" :key="cityItem.id" :value="cityItem.city">
                {{ cityItem.city }}
              </option>
            </select>
          </div>
          <button type="submit" class="btn btn-submit" :disabled="isSubmitting">
            <span v-if="isSubmitting">Reservando...</span>
            <span v-else>Reservar</span>
          </button>
        </form>
  
        <div v-if="successMessage" class="alert alert-success mt-4" role="alert">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="alert alert-danger mt-4" role="alert">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReservationForm',
    data() {
      return {
        name: '',
        email: '',
        city: '',
        isSubmitting: false,
        successMessage: '',
        errorMessage: '',
      };
    },
    computed: {
      cities() {
        return this.$store.state.cities;
      },
    },
    methods: {
      submitForm() {
        if (this.name && this.email && this.city) {
          this.isSubmitting = true;
          this.successMessage = '';
          this.errorMessage = '';
          setTimeout(() => {
            this.isSubmitting = false;
            this.successMessage = `Estimado ${this.name}, su reserva fue exitosa. Ingrese a su correo: ${this.email} para descargar información de nuestro tour más cercano.`;
            this.name = '';
            this.email = '';
            this.city = '';
          }, 1500);
        } else {
          this.errorMessage = 'Por favor, complete todos los campos.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .reservation-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    min-height: 100vh;
  }
  
  .reservation-card {
    background: linear-gradient(135deg, #ffffff, #f0f4f8);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .reservation-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  
  .reservation-title {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: #28a745;
    font-weight: bold;
  }
  
  .form-label {
    font-weight: 600;
    color: #495057;
  }
  
  .form-control, .form-select {
    border-radius: 10px;
    padding: 0.75rem 1rem;
    border: 1px solid #ced4da;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .form-control:focus, .form-select:focus {
    border-color: #28a745;
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
  }
  
  .btn-submit {
    width: 100%;
    padding: 0.75rem;
    background: linear-gradient(45deg, #28a745, #218838);
    border: none;
    border-radius: 10px;
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
  }
  
  .btn-submit:hover {
    background: linear-gradient(45deg, #218838, #1e7e34);
    transform: translateY(-2px);
  }
  
  .alert {
    border-radius: 10px;
  }
  
  @media (max-width: 576px) {
    .reservation-card {
      padding: 1.5rem;
    }
  
    .reservation-title {
      font-size: 1.5rem;
    }
  
    .btn-submit {
      font-size: 1rem;
      padding: 0.6rem;
    }
  }
  </style>
  