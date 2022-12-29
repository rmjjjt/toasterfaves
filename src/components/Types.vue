<template>
  <div>
    <h1>{{ msg }}</h1>
    <b-row cols="4">
        <b-card no-body
                v-for="type in types" :key="type" :title="type"
        >
          <b-card-img :src="require('@/assets/logo.png')" alt="Toasterfaves Logo" top></b-card-img>
          <router-link :to="'\/type\/' + type">{{type.charAt(0).toUpperCase() + type.slice(1)}}</router-link>
        </b-card>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Types',
  data () {
    return {
      msg: 'Here\'s all of the types or recipes we have at the minute"',
      types: []
    }
  },
  methods: {
    loadAxios: function async () {
      axios.get('https://mxlcy3tgca.execute-api.eu-west-2.amazonaws.com/default/recipes')
        .then(function (response) {
          response.data.forEach(recipe => {
            this.types = this.types.concat(recipe.meal)
          })
          this.types = this.types.sort((a, b) => a.localeCompare(b))
          this.types = new Set(this.types)
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
