<template>
  <div>
    <h1>{{ msg }}</h1>
    <b-row cols="5">
      <b-card no-body
              v-for="recipe in recipes" :key="recipe.name" :title="recipe.name"
      >
        <b-card-img :src="require('@/assets/logo.png')" alt="Toasterfaves Logo" top></b-card-img>
        <router-link :to="'\/meal\/' + recipe.name">{{recipe.name.charAt(0).toUpperCase() + recipe.name.slice(1)}}</router-link>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Recipes',
  data () {
    return {
      msg: 'Here\'s all of the meals we have recipes for at the minute.',
      recipes: []
    }
  },
  methods: {
    loadAxios: function async () {
      axios.get('https://mxlcy3tgca.execute-api.eu-west-2.amazonaws.com/default/recipes')
        .then(function (response) {
          this.recipes = response.data.sort((a, b) => a.name.localeCompare(b.name))
        }.bind(this))
        .catch(function (error) {
          this.axiosError = error
        }.bind(this))
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
  color: #FBB03B;
}
</style>
