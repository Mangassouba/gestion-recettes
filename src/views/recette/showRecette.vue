<template>
  <div class="container">
    <h2>{{ $t("recette.details_page.titre") }}</h2>
    <div v-if="recipe">
      <h3>{{ recipe.titre }}</h3>
      <p>
        <strong>{{ $t("recette.details_page.label_ingredients") }}:</strong>
      </p>
      <p>{{ recipe.ingredient }}</p>
      <p>
        <strong>{{ $t("recette.details_page.label_type") }}:</strong>
        {{ recipe.type }}
      </p>
      <button @click="goBack" class="btn btn-secondary">
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
const recipe = ref(null);

onMounted(() => {
  const fetchedRecipe = store.recipes.find(r => r.id === parseInt(route.params.id));
  if (fetchedRecipe) {
    recipe.value = fetchedRecipe;
  }
});
function goBack() {
  router.push({ name: "recette" });
}
</script>