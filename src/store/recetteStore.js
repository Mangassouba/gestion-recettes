import { defineStore } from 'pinia';
import axios from "axios";

export const useRecettetore = defineStore('recipes', {
  state: () => ({
    recipes: [{
      title: 'crepe',
      ingredients: '30 cl de lait, 10 cl d\'eau ,1/2 sachet de levure de boulanger , 7 œufs',
      type:"plat"
    }],
    categories:[
      {categorie:'aaaa'},
      {categorie:'bbbb'},
      {categorie:'ccc'},
    ]
  }),
  actions: {
    async loadDataFromApi() {
      try {
        const resp = await axios.get("http://localhost:3005/api/recipes");
        this.recettes = resp.data;
      } catch (error) {
        this.recettes = [];
      }
    },
    async addRecipe(recette) {
      // this.recipes.push(recette);
      return await axios.post("http://localhost:3005/api/recipes", recette);
    },
    updateRecipe(index, updatedRecipe) {
      this.recipes[index] = updatedRecipe;
    },
   async deleteRecipe(id) {
      // this.recipes.splice(index, 1);
      try {
        await axios.delete(`http://localhost:3005/api/recipes/${id}`);
        await this.loadDataFromApi();
      } catch (error) {}
    }, 
    getRecipe(index) {
      return this.recipes[index];
    },
  }
});
