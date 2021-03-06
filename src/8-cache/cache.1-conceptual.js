import React from 'react'
import { fetchData } from './pokemon-fetch'

/* NOT APPROPRIATE AS AN ACTUAL APPROACH!
  issues with cache validation etc. make
  this useful ONLY as an aid to learning
  how React.cache works internally...
*/

const cache = {}

const PokemonInfo = ({pokemonName}) => {
  const pokemon = cache[pokemonName]
  if (!pokemon ) {
    const promise = fetchData(pokemonName).then(
      p => ( cache[pokemonName] = p )
    )
    throw promise // triggers Suspense fallback
  }
  return <pre>{ JSON.stringify( pokemon || 'Unknown', null, 2) }</pre>
}

export default PokemonInfo