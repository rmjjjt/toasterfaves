<template>
  <div>
    <h1>{{$route.params.id}}:</h1>
    <b-row cols="2">
      <div class="left-align">
        <h2>Ingredients:</h2>
        <ul>
          <li v-for="(ing, key, index) in recipe.ingredients" :key="index">
            {{ key.charAt(0).toUpperCase() + key.substr(1) }}: {{ ing }}
          </li>
        </ul>
      </div>
      <div>
        <img class="img-fluid rounded" src="@/assets/logo.png">
      </div>
    </b-row>
    <div>
      <h2>Instructions:</h2>
      <ul>
        <li v-for="(inst, index) in recipe.instructions" :key="index">
          {{ inst }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Recipe',
  data () {
    return {
      recipe: {}
    }
  },
  props: ['name'],
  methods: {
    loadAxios: function async () {
      axios.get('https://mxlcy3tgca.execute-api.eu-west-2.amazonaws.com/default/recipes/' + this.$route.params.id)
        .then(function (response) {
          this.recipe = response.data[0]
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
.left-align {
  text-align: left;
}
.img-fluid {
  max-height: 90%;
}
</style>
