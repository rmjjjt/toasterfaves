<template>
  <div>
    <h1>There {{type.meal.length === 1 ? 'is' : 'are'}} {{type.meal.length}} {{this.$route.params.id.toLowerCase()}} recipe{{type.meal.length === 1 ? '' : 's'}}. {{type.meal.length === 1 ? 'It is' : 'They are'}}:</h1>
    <ul v-for="meal in type.meal" :key="meal.name">
      <li><router-link :to="'\/meal\/' + meal.name">{{meal.name.charAt(0).toUpperCase() + meal.name.slice(1)}}</router-link></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Type',
  data () {
    return {
      type: {
        meal: []
      }
    }
  },
  props: ['id'],
  methods: {
    loadAxios: function async () {
      axios.get('https://mxlcy3tgca.execute-api.eu-west-2.amazonaws.com/default/types/' + this.$route.params.id)
        .then(function (response) {
          response.data = response.data.sort((a, b) => a.name.localeCompare(b.name))
          this.type.meal = response.data
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
  color: #42b983;
}
</style>
