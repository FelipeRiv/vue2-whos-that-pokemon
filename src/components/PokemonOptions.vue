/* listado de opociones del pokemon y verificar una si es  correcta o no y si lo es comunicar a poke picture que la muestre o no */
<template>
    <div class="options-container">
        <ul>

            <!-- emitir el id del pokemon -->
            <!-- @click="$emit('selection')" primer param obligatorio segundo es opcional para algun valor  -->
            <!-- este @click $emit puede ser escucahdo por el padre osea PokemonPage -->
           <li
              v-for="pokemon in pokemons"  :key="pokemon.id" 
              @click="$emit('selection', pokemon.id)"
           >         
                {{pokemon.name}}     
            
            </li>
            

        </ul>
    </div>
</template>

<script>
export default {

    props:{

        // recibo los poemons desde pokemonpage
        pokemons: {
            type: Array,
            required: true,

        }
    },

    data(){

        return{
            
        }
    }
}
</script>

<style >

/* Pokemon Options */
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    padding: 2px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}

</style>