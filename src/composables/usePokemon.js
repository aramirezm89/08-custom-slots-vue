
import axios from 'axios';
import {ref, watch} from 'vue';

const usePokemon = (pokemonId = '1') =>{

    const pokemon = ref(null);
    const isLoading = ref(false);
    const errorMessage = ref(null)

    const searchPokemon = async (id) =>{
        if(!id) return;
        isLoading.value = true;
        pokemon.value = null;
        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            pokemon.value = data;
            errorMessage.value = null;
        } catch (error) {
            errorMessage.value = 'No se pudo cargar el pokémon'
        }

        isLoading.value = false;
    }

    searchPokemon(pokemonId);

 
    return {
        pokemon,
        isLoading,
        errorMessage,
        searchPokemon
    }
}

export default usePokemon;
