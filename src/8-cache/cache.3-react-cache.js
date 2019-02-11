import React from 'react'
import { unstable_createResource as createResource } from 'react-cache'
import { fetchData } from './pokemon-fetch'

////////////////////////////////////////////////////////////////////////////
// IMPORTANT! current version of react-cache NOT ready for production use.
////////////////////////////////////////////////////////////////////////////

// currently FAILS, pending updated build of react-cache (see: https://stackoverflow.com/a/54254982)
const myPokemon = createResource(fetchData)

console.log('resource:', myPokemon )

const PokemonInfo = ({pokemonName}) => {
  const pokemon = myPokemon.read(pokemonName)
  return <pre>{ JSON.stringify( pokemon || 'Unknown', null, 2) }</pre>
}

export default PokemonInfo