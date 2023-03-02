<template>
  <h1>Busccar pokemon : {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input
      type="number"
      placeholder="Número del pokémon"
      v-model="pokemonId"
      ref="txtSearchId"
    />
  </form>
  <br />
  <span>Presione enter para buscar</span>
</template>

<script>
import { onActivated, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const pokemonId = ref(1);
    const txtSearchId = ref(null);

    onActivated(() =>{
        txtSearchId.value.select();
    })
    return {
      pokemonId,
      txtSearchId,
      onSubmit: () => {
        router.push({ name: "pokemon", params: { id: pokemonId.value } });
      },
    };
  },
};
</script>

<style></style>
