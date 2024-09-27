<template>
    <div class="container mt-4">
      <h2>{{ $t("recette.details_page.titre") }}</h2>
      <div v-if="category">
        <h3>{{ category.id }}</h3>
        <h3>{{ category.name }}</h3>
        <button @click="goBack" class="btn btn-secondary mt-3">
          {{ $t("recette.details_page.button_back") }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { useRecettetore } from "@/store/recetteStore";
  
  const store = useRecettetore();
  const route = useRoute();
  const router = useRouter();
  const category = ref(null);
  
  onMounted(() => {
  const fetchedRecipe = store.categorys.find(r => r.id === parseInt(route.params.id));
  if (fetchedRecipe) {
    category.value = fetchedRecipe;
  }
});
  function goBack() {
    router.push({ name: "categorie" });
  }
  </script>