<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-html="convertedContent"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Our favourite meals - at your table',
      convertedContent: '<p>Welcome to the culinary delights of the family Toasterface. ' +
        'We are a famliy of five living in Bath, UK. These are the recipes we use for cooking.</br>' +
        'Stored through the ages in the most ancient, crusty and totally righteous of recipe books, it ' +
        'is time for them to be digitised before being lost for all eternity.</br>' +
        'Get your pinny on and get cooking.</p>'
    }
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
.bionic {
  font-weight: bolder;
}
</style>
