<template>
  <div class="container mt-4">
    <h2>{{ $t("recette.list_page.titre") }}</h2>
    <div class="row d-flex mt-4">
      <div class="col-6">
        <div class="form-group col-md-6">
          <input type="search" class="form-control" v-model="title" id="" placeholder="recherche">
        </div>
      </div>
      <div class="col-6">
        <div class="d-flex justify-content-end">
      <RouterLink
        class="btn btn-primary"
        :to="{ name: 'ajouteRecette' }"
        >{{ $t("recette.list_page.button_add") }}</RouterLink
      >
    </div>
      </div>
    </div>

    <table class="table table-striped table-bordered mt-4 mb-4">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">{{ $t("recette.list_page.label_title") }}</th>
          <th scope="col">{{ $t("recette.create_page.label_type") }}</th>
          <th scope="col">{{ $t("recette.list_page.label_ingredients") }}</th>
          <th scope="col">{{ $t("recette.list_page.label_category") }}</th>
          <th scope="col" class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(recipe) in filteredRecipes" :key="recipe.id">
          <th scope="row">{{ recipe.id }}</th>
          <td>{{ recipe.titre }}</td>
          <td>{{ recipe.type }}</td>
          <td>{{ recipe.ingredient }}</td>
          <td>{{ getCategoryTitle(recipe.category_id) }}</td>
          <td class="text-center">
            <button
              @click="deleteRecipe(recipe.id)"
              class="btn btn-danger btn-sm me-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                />
              </svg>
            </button>
            <button
              @click="editRecipe(recipe)"
              class="btn btn-warning btn-sm me-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </button>
            <button
              @click="viewRecipe(recipe)"
              class="btn btn-info btn-sm me-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                />
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useRecettetore } from "@/store/recetteStore";
import { ref, computed, onMounted } from "vue";

const title = ref('');

onMounted(() => {
  store.loadDataFromApi();
});

const store = useRecettetore();

const categorys = computed(() => store.categorys);
const recipes = store.recipes;
const router = useRouter();

const getCategoryTitle = (categoryId) => {
  const category = categorys.value.find(
    (c) => c.id === categoryId
  );
  return category ? category.name : 'Catégorie non trouvée';
};

function deleteRecipe(id) {
  const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer cette recette ?");
  if (confirmation) {
    store.deleteRecipe(id);
    console.log("Recette supprimée :", id);
  } else {
    console.log("Suppression annulée");
  }
}

const filteredRecipes = computed(() =>
  store.recipes.filter((recipe) =>
    recipe.titre.toLowerCase().includes(title.value.toLowerCase())
  )
);

function editRecipe(recipe) {
  router.push({ name: "modifier", params: { id: recipe.id } });
}

function viewRecipe(recipe) {
  router.push({ name: "show", params: { id: recipe.id } });
}
</script>
