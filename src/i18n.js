import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: "en", // La langue par défaut
  fallbackLocale: "fr", // Langue de secours si la traduction est manquante
  messages: {
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
        label_titre: "title",
        label_ingredients: "Ingredients",
        label_recipeType: "Type",
        submit: "Save Changes",
       type_entree: "Starter",
        type_plat: "Main course",
        type_dessert: "Dessert",
        button_edit: "Modify to recette"
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
      }
      }},
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
            titre: "Modify Recipe",
            label_titre: "Modifier la recette",
            ingredients: "Ingrédients",
            recipeType: "Type",
            submit: "Enregistrer les modifications",
            entree: "Entrée",
            plat: "Plat",
            dessert: "Dessert",
            button_edit: "Modifier une recette"
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
            titre: "BIENVENUE A ROTANA",
          }
      },
    },
  },
});


export default i18n;
