<template>
  <div>
    <router-link :to="{ path: '/'}" class="router-link" exact>Home</router-link>
    <router-link :to="{ path: '/types'}" class="router-link" exact>Types</router-link>
    <router-link :to="{ path: '/recipes'}" class="router-link" exact>All Recipes</router-link>
    <router-link :to="{ path: '/search'}" class="router-link" exact>Search</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
.router-link {
  font-family: 'Fredoka One', sans-serif;
  font-size: 3rem;
  margin: 0 10px 0 10px;
  color: #FBB03B;
}
</style>
