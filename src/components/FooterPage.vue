<template>
    <footer class="footer bg-light py-4">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <router-link to="/" class="navbar-brand mb-3 mb-md-0">Life Adventures</router-link>
  
          <div class="social-icons d-flex justify-content-center mb-3 mb-md-0">
            <a
              href="https://www.instagram.com/lifeadventures"
              target="_blank"
              rel="noopener noreferrer"
              class="mx-2 social-link"
              aria-label="Instagram"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
            </a>
            <a
              href="https://www.twitter.com/lifeadventures"
              target="_blank"
              rel="noopener noreferrer"
              class="mx-2 social-link"
              aria-label="Twitter"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
            </a>
            <a
              href="https://www.facebook.com/lifeadventures"
              target="_blank"
              rel="noopener noreferrer"
              class="mx-2 social-link"
              aria-label="Facebook"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
            </a>
          </div>
  
          <p class="mb-0 text-md-end">&copy; 2025 Life Adventures. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterPage',
  };
  </script>
  
  <style scoped>
  .footer {
    width: 100%;
  }
  
  .social-icons a {
    color: #000;
    transition: transform 0.3s, color 0.3s;
  }
  
  .social-icons a:hover {
    transform: scale(1.2);
    color: #28a745; 
  }
  
  @media (max-width: 767.98px) {
    .footer .navbar-brand {
      margin-bottom: 1rem;
    }
    .footer p {
      text-align: center;
    }
  }
  </style>
  