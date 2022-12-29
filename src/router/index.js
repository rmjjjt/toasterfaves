import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Types from '../components/Types'
import Recipe from '../components/Recipe'
import Recipes from '../components/Recipes'
import Type from '../components/Type'
import Search from '../components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/type/:id',
      name: 'Type',
      component: Type
    },
    {
      path: '/types',
      name: 'Types',
      component: Types
    },
    {
      path: '/recipes',
      name: 'Recipes',
      component: Recipes
    },
    {
      path: '/search/',
      name: 'Search',
      component: Search
    },
    {
      path: '/meal/:id',
      name: 'Meal',
      component: Recipe
    }
  ]
})
