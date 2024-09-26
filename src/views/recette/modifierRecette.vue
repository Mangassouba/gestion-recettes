<template>
    <div class="container">
      <h2>{{ $t("recette.modify_page.titre") }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="title" class="form-label">{{ $t("recette.modify_page.label_titre") }}</label>
          <input v-model="title" type="text" id="title" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="ingredients" class="form-label">{{ $t("recette.modify_page.label_ingredients") }}</label>
          <textarea v-model="ingredients" id="ingredients" class="form-control" required></textarea>
        </div>
        <div class="mb-3">
          <label for="type" class="form-label">{{ $t("recette.modify_page.label_recipeType") }}</label>
          <select v-model="type" id="type" class="form-select" required>
            <option value="entrée">{{ $t("recette.modify_page.type_entree") }}</option>
            <option value="plat">{{ $t("recette.modify_page.type_plat") }}</option>
            <option value="dessert">{{ $t("recette.modify_page.type_dessert") }}</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">{{ $t("recette.modify_page.button_edit") }}</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
import { useRecettetore } from '@/store/recetteStore';
  
  const store = useRecettetore();
  const route = useRoute();
  const router = useRouter();
  
  const index = route.params.index;
  const recipe = ref({});
  
  const title = ref('');
  const ingredients = ref('');
  const type = ref('plat');
  
  onMounted(() => {
    recipe.value = store.getRecipe(index);
    title.value = recipe.value.title;
    ingredients.value = recipe.value.ingredients;
    type.value = recipe.value.type;
  });
  
  function handleSubmit() {
    store.updateRecipe(index, {
      title: title.value,
      ingredients: ingredients.value,
      type: type.value
    });
    router.push({ name: 'recette' });
  }
  </script>
  