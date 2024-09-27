// i18n.js
import { createI18n } from 'vue-i18n'; // Import du createI18n

// Définition des messages de traduction
const messages = {
  en: {
    recette: {
      create_page: {
        titre: "Create a recipe",
        label_title: "Title",
        label_ingredients: "Ingredients",
        label_type: "Type",
        type_entree: "Starter",
        type_plat: "Main course",
        type_dessert: "Dessert",
        button_add: "Add",
      },
      list_page: {
        titre: "Recipe List",
        label_title: "Title",
        label_ingredients: "Ingredients",
        label_type: "Type",
        label_action: "Action",
        button_add: "Add a recipe",
      },
      modify_page: {
        titre: "Modify Recipe",
        label_titre: "Title",
        label_ingredients: "Ingredients",
        label_recipeType: "Type",
        submit: "Save Changes",
        type_entree: "Starter",
        type_plat: "Main course",
        type_dessert: "Dessert",
        button_edit: "Modify recipe"
      },
      details_page: {
        titre: "Recipe Details",
        label_ingredients: "Ingredients",
        label_type: "Type",
        button_back: "Close"
      },
      app_page: {
        titre: "GestionRecipe",
        ricipe_title: "Recipe"
      },
      home_page: {
        titre: "Welcome to ROTANA",
      },
      category_page: {
        titre: "Category",
        label_title: "Category",
        label_col: "Category",
        button_submit: "Submit"
      }
    }
  },
  fr: {
    recette: {
      create_page: {
        titre: "Ajouter une recette",
        label_title: "Titre",
        label_ingredients: "Ingrédients",
        label_type: "Type",
        type_entree: "Entrée",
        type_plat: "Plat",
        type_dessert: "Dessert",
        button_add: "Ajouter",
      },
      list_page: {
        titre: "Liste des recettes",
        label_title: "Titre",
        label_ingredients: "Ingrédients",
        label_type: "Type",
        label_action: "Action",
        button_add: "Ajouter une recette",
      },
      modify_page: {
        titre: "Modifier la recette",
        label_titre: "Titre",
        label_ingredients: "Ingrédients",
        label_recipeType: "Type",
        submit: "Enregistrer les modifications",
        type_entree: "Entrée",
        type_plat: "Plat",
        type_dessert: "Dessert",
        button_edit: "Modifier la recette"
      },
      details_page: {
        titre: "Détails de la recette",
        label_ingredients: "Ingrédients",
        label_type: "Type",
        button_back: "Fermer"
      },
      app_page: {
        titre: "GestionRecette",
        ricipe_title: "Recette"
      },
      home_page: {
        titre: "Bienvenue à ROTANA",
      },
      category_page: {
        titre: "Catégorie",
        label_title: "Catégorie",
        label_col: "Catégorie",
        button_submit: "Envoyer"
      }
    }
  }
};

// Initialisation de vue-i18n
const i18n = createI18n({
  legacy: false, // Utilisation de la Composition API
  locale: 'fr', // Langue par défaut
  fallbackLocale: 'en', // Langue de secours
  messages, // Messages de traduction
});

export default i18n;
