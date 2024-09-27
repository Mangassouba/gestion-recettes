<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- Lien vers la page d'accueil -->
      <router-link 
        class="navbar-brand"  
        :to="{ name: 'Home' }" 
        exact-active-class="active"
      >
        {{ $t("recette.app_page.titre") }}
      </router-link>

      <!-- Bouton pour mobile -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Liens du menu -->
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <!-- Lien vers la page des recettes -->
        <div class="navbar-nav">
          <router-link 
            class="nav-link" 
            :to="{ name: 'recette' }" 
            exact-active-class="active"
          >
            {{ $t("recette.app_page.ricipe_title") }}
          </router-link>
        </div>

        <!-- Lien vers la page des catégories -->
        <div class="navbar-nav">
          <router-link 
            class="nav-link" 
            :to="{ name: 'categorie' }" 
            exact-active-class="active"
          >
            Categorie
          </router-link>
        </div>

        <!-- Lien vers la page Axios (par exemple, si tu utilises Axios) -->
        <div class="navbar-nav">
          <router-link 
            class="nav-link" 
            :to="{ name: 'ListRecette' }" 
            exact-active-class="active"
          >
            Axios
          </router-link>
        </div>
      </div>
    </div>
  </nav>

  <!-- Zone de contenu où les composants des routes sont affichés -->
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
/* Style pour le lien actif dans la navigation */
.nav-link.active {
  font-weight: bold;
  color: #007bff; /* Couleur de texte pour le lien actif */
}
</style>
