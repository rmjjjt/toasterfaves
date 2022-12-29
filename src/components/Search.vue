<template>
  <div>
    <p>Here, you can search for any of the recipes</p>
    <b-col md="4" style="margin: auto;">
      <b-form-input v-model="searchText" placeholder="Start typing a recipe's name"></b-form-input>
      <br>
    </b-col>
    <b-col md="4" style="margin: auto;">
      <b-form-input v-model="ingredientText" placeholder="Start typing an ingredient"></b-form-input>
    </b-col>
    <b-row cols="8">
      <b-card v-for="recipe in foundRecipe" :key="recipe.name"
        tag="article"
        style="margin: 20px auto; max-width: 20rem;"
        class="mb-2"
      >
        <router-link :to="'\/meal\/' + recipe.name">{{recipe.name.charAt(0).toUpperCase() + recipe.name.slice(1)}}</router-link>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'recipe',
  data () {
    return {
      recipeList: [],
      foundRecipe: [],
      ingredientText: '',
      searchText: ''
    }
  },
  watch: {
    ingredientText: function (val) {
      this.filterListByIngredient(val)
    },
    searchText: function (val) {
      this.filterList(val)
    }
  },
  methods: {
    loadAxios: function async () {
      axios.get('https://mxlcy3tgca.execute-api.eu-west-2.amazonaws.com/default/recipes')
        .then(function (response) {
          this.recipeList = response.data
        }.bind(this))
        .catch(function (error) {
          this.axiosError = error
        }.bind(this))
    },
    filterListByIngredient: function (searchText) {
      let filteredList
      if (searchText.includes(',')) {
        const ingsToFind = searchText.split(',')
        // recipe.ingredients should include all ings as long as they have length
        filteredList = this.recipeList.filter(recipe => {
          return ingsToFind.every(ing => {
            if (ing.length > 0) {
              return Object.keys(recipe.ingredients).some(innerIng => innerIng.includes(ing.toLowerCase()))
            } else return true
          })
        })
        this.foundRecipe = filteredList.sort((a, b) => a.name.localeCompare(b.name))
      } else {
        filteredList = this.recipeList.filter(recipe => {
          return Object.keys(recipe.ingredients).some(ing => ing.toLowerCase().includes(searchText.toLowerCase()))
        })
        this.foundRecipe = filteredList.sort((a, b) => a.name.localeCompare(b.name))
      }
      if (searchText.length === 0) {
        this.foundRecipe = []
      }
    },
    filterList: function (searchText) {
      let filteredList = this.recipeList.filter(recipe => recipe.name.toLowerCase().includes(searchText.toLowerCase()))
      this.foundRecipe = filteredList.sort((a, b) => a.name.localeCompare(b.name))
      if (searchText.length === 0) {
        this.foundRecipe = []
      }
    }
  },
  created () {
    this.loadAxios()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
