import pokemonApi from './../api/pokemonApi'

/**
 * 
 * @returns array de vacio de pokemons para obtener numeros aletorios
 */
const getPokemons = () => {
    // crear un array en base al array interno y nos permite no modificar sus valores directamente
    const pokemonArr = Array.from( Array(650) )

    return pokemonArr.map( (_, index) => index+1 )
}

/**
 * Mezcla pokemons
 */
const getPokemonOptions = async () => {

    // mezclar pokemons, math random va de casi 0 a casi 1, le resto -0.5 esto hace que tenga numeros positivos y negativos, y dependiendo del math ramdon y ese numero va a mover el arr para dejar numeros aleatorios
    const mixedPokemons = getPokemons()
                          .sort( () => Math.random() - 0.5 ) 

    console.log('mixedPokemons');
    console.log(mixedPokemons);

    const pokemons = await getPokemonNames( mixedPokemons.splice(0, 4))

    console.table(pokemons)

    return pokemons
}

/**
 * Necesito los nombre sde pokemons
 * @param {*} param0 
 */
const getPokemonNames = async ( [a,b,c,d] = [] ) => {

    // const resp2 = await pokemonApi.get(`/1`)
    // console.log('resp');
    // console.log(resp2.data.name);

   // # Js moderno Promise All
    //Promise.all nos ayuda a disparar varias promesas al mismo tiempo, y espera como parametro un array de promesas 

    // Defino las peticiones http no las llamo aun
    const promiseArr = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`),
    ]

    // Puedo usar la estructura de .then pero tambien puedo usar con async await
    //Array de respuestas
    // const responses = await Promise.all( promiseArr )
    const [p1, p2, p3, p4] = await Promise.all( promiseArr )
    
    // console.log(responses);

    return [
        {   id: p1.data.id,
            name: p1.data.name 
        },

        {   id: p2.data.id,
            name: p2.data.name 
        },

        {   id: p3.data.id,
            name: p3.data.name
        },

        {   id: p4.data.id,
            name: p4.data.name 
        },
    ]

    // console.log(a,b,c,d);
    
}

export default getPokemonOptions