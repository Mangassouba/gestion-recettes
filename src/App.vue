<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <!-- Lien vers la page d'accueil avec l'icône -->
      <router-link 
        class="navbar-brand me-3"  
        :to="{ name: 'Home' }" 
        exact-active-class="active"
      >
      <i class="fas fa-utensils mt-2" ></i> ROTANA
      </router-link>

      <!-- Bouton pour mobile -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Liens du menu -->
      <div class="collapse navbar-collapse d-flex justify-content-end gap-5" id="navbarNavAltMarkup">
        <!-- Lien vers la page des recettes avec l'icône -->
        <div class="navbar-nav">
          <router-link 
            class="nav-link" 
            :to="{ name: 'recette' }" 
            exact-active-class="active"
          >
           
            {{ $t("recette.app_page.ricipe_title") }}
          </router-link>
        </div>

        <!-- Lien vers la page des catégories avec l'icône -->
        <div class="navbar-nav">
          <router-link 
            class="nav-link" 
            :to="{ name: 'categorie' }" 
            exact-active-class="active"
          >
            
            {{ $t("recette.app_page.recipe_title") }}
          </router-link>
        </div>
        
        <div class="navbar-nav">
          <select class="form-select" @change="changeLanguage">
            <option value="fr">Français</option>
            <option value="en">Englais</option>
          </select>
        </div>
      </div>
    </div>
  </nav>

  <!-- Zone de contenu où les composants des routes sont affichés -->
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { RouterView } from 'vue-router';

const { locale } = useI18n();
const changeLanguage = (event) => {
  locale.value = event.target.value;
};
</script>

<style scoped>
/* Style pour le lien actif dans la navigation */
.nav-link.active {
  font-weight: bold;
  color: #007bff; /* Couleur de texte pour le lien actif */
}
</style>
