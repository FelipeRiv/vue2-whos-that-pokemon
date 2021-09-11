<template>
<!-- solo muestra la img y debe saber cuando mostrarse y ocultarse -->
<div class="pokemon-container">


    <img
        v-if="!showPokemon"
        :src="imgSrc"
        class="hidden-pokemon"
        alt="Pokemon Secreto"
    >
    <img
        
        v-else
        :src="imgSrc"
        class="fade-in"
        alt="Pokemon Secreto"
    >
</div>


</template>

<script>
import { computed, props } from '@vue/reactivity'
export default {

    props:{
        pokemonId:{
            type: Number,
            required: true,
        },
        showPokemon:{
            type: Boolean,
            required: true,
            default: false,
        }
    },

    data(){

        return{
            
        }
    },

    computed:{
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
}
</script>

<style scoped>

.hidden-pokemon{
    filter: brightness(0);
}

/* Pokemon Picture */
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    /* sin el absolute ahora salen las 2 img la sombra y el poke */
    /* position: absolute; */
    /* left: 0; */
    /* right: 0; */
    margin: 0 auto;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}



</style>