<template>
  <h1 v-if="isLoading">Buscando...</h1>
  <h1 v-if="errorMessage">{{ errorMessage }}</h1>

  <template v-if="pokemon">
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" alt="pokemon" />
    <router-link :to="{ name: 'search-pokemon' }">regresar</router-link>
  </template>
</template>

<script>
import { useRoute,onBeforeRouteLeave } from "vue-router";
import usePokemon from "@/composables/usePokemon";
import { watch } from "vue";
export default {
  setup() {
    const route = useRoute();

    const { errorMessage, isLoading, pokemon, searchPokemon } = usePokemon(
      route.params.id
    );

    watch(
      () => route.params.id,
      () => {
        searchPokemon(route.params.id);
      }
    );

    onBeforeRouteLeave(() =>{
      const answer = window.confirm('¿esta seguro que desea salir?');


      if(!answer) return false;
      
    })
    return {
      errorMessage,
      isLoading,
      pokemon,
    };
  },
};
</script>

<style>
</style>
