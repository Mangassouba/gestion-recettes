<template>
    <div class="container mt-4">
      <h4>{{ $t("recette.add_category_page.titre") }}</h4>
      <div class="row d-flex">
        <form class="d-flex" @submit.prevent="submitForm">
          <div class="col-md-6">
            <label for="categorie">{{
              $t("recette.add_category_page.label_title")
            }}</label>
            <input
              type="text"
              class="form-control"
              v-model="name"
              id="categorie"
            />
          </div>
          <div class="col-md-4 mt-4 m-4">
            <button type="submit" class="btn btn-primary">
              {{ $t("recette.list_page.button_add") }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  import { useRecettetore } from "@/store/recetteStore";
  import { ref } from "vue";
  
  const store = useRecettetore();
  const router = useRouter();
  const name = ref("");
  
  function submitForm() {
    if (name.value.trim() !== "") {
      store.addCategory({
        name: name.value,
      });
      name.value = ""; 
      router.push({ name: "categorie" }); 
    }
  }
  </script>
  