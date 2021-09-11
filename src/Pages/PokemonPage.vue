/* agrupa todo en Page pokemon page porque si quiero poner router solo implemento sin problema  */
<template>

    <h1 v-if="!pokemon">Esperando ...</h1>

    <div v-else>
        <h1>¿Quién es este Pokémon?</h1>
        <!--  img -->
        <!-- show pokemon deberia ser true cuando la persona se seleciona un pokemon  -->
        <PokemonPicture
            :pokemonId="pokemon.id"
            :showPokemon="showPokemon"
        ></PokemonPicture>

        <!-- Acá cuando emite el evento selection este al ser el comp padre de Pk Options puede escuchar el evento con @selection y ejecutar un metodo que yo quiera -->
        <!--  asi  @selection="checkAnswer" ya estoy pasando el $event implicito y necesito solo obtenerlo de los argumentos en checkAnswer(id) si pasra mas params entonces necesito especificarlo explicitamente  
        checkAnswer(1,2,3 $event)-->
            <!-- @selection="checkAnswer(1, $event)" -->
        <PokemonOptions
            :pokemons="pokemonArr"
            @selection="checkAnswer($event)"
        >    
        </PokemonOptions>

        <template v-if="showAnswer">

            <h2>{{message}}</h2>
            <button @click="newGame">
                Nuevo Juego
            </button>
        </template>

    </div>

  <!--  opciones -->
</template>

<script>

import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from './../components/PokemonPicture'

import getPokemonOptions from './../helpers/getPokemonOptions'

// getPokemonOptions() // quitar

export default {

    components: {
    PokemonOptions,
    PokemonPicture,

  },

    data(){

        return{

            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''

        }
    },

    methods:{
        async mixPokemonArray(){
            
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor(Math.random() *4 ) // random number between 1 a 4
            this.pokemon = this.pokemonArr[ rndInt ] // obtengo objeto del pokemon selecionado para la foto de solo 1

            console.log(this.pokemonArr);
            
        },

        checkAnswer(selectedPokemonId){
            console.log('PK Page');
            console.log('checkAnswer');
            console.log(this.pokemon.id);
            // al dar click en una opcion muestra la foto
            this.showPokemon = true
            this.showAnswer = true

            // si la opcion selecionada es igual al pk de la foto random muestra msjs correcto 
            if (selectedPokemonId === this.pokemon.id) {
                this.message = `Correcto ${this.pokemon.name}`
            }else{
                
                this.message = `Oops, era ${this.pokemon.name}`
            }
        
            
        },
        newGame(){
            // reset de las proiedades y llamado a mix fN
            this.pokemonArr = [],
            this.pokemon = null,
            this.showPokemon = false,
            this.showAnswer = false,
            this.message = ''

            this.mixPokemonArray()
        }
    },

    mounted() {
        console.log('Mounted')

        this.mixPokemonArray()

    }

}
</script>

<style>

</style>