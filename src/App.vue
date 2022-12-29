<template>
  <div id="app">
    <a href="/toasterfaves"><img style="width: 50%; margin: auto;" src="./assets/logo.png"></a>
    <br>
    <Nav />
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Fredoka+One);

#app {
  font-family: 'Fredoka One', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 70%;
  margin: auto;
}
</style>
