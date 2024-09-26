<template>
    <div class="container">
      <h2>{{ $t("recette.create_page.titre") }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="title" class="form-label">{{ $t("recette.create_page.label_title") }}</label>
          <input v-model="title" type="text" id="title" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="ingredients" class="form-label">{{ $t("recette.create_page.label_ingredients") }}</label>
          <textarea v-model="ingredients" id="ingredients" class="form-control" required></textarea>
        </div>
        <div class="mb-3">
          <label for="type" class="form-label">{{ $t("recette.create_page.label_type") }}</label>
          <select v-model="type" id="type" class="form-select" required>
            <option value="entrée">{{ $t("recette.create_page.type_entree") }}</option>
            <option value="plat">{{ $t("recette.create_page.type_plat") }}</option>
            <option value="dessert">{{ $t("recette.create_page.type_dessert") }}</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">{{ $t("recette.create_page.button_add") }}</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import { useRecettetore } from '@/store/recetteStore';
import { useRouter } from 'vue-router';
  
  const title = ref('');
  const ingredients = ref('');
  const type = ref('plat');
  
  const store = useRecettetore();
  const router = useRouter()
  
  function handleSubmit() {
    store.addRecipe({
      title: title.value,
      ingredients: ingredients.value,
      type: type.value
    });
    title.value = '';
    ingredients.value = '';
    type.value = 'plat';
    router.push('/recette')
  }
  </script>
  