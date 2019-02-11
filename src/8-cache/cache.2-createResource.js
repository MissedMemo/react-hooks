import React from 'react'
import { fetchData } from './pokemon-fetch'

/* NOT APPROPRIATE AS AN ACTUAL APPROACH!
  issues with cache validation etc. make
  this useful ONLY as an aid to learning
  how React.cache works internally...
*/

const cache = {}

const createResource = fn => {
  return {
    read(id) {
      const data = cache[id]
      if (!data ) {
        const promise = fn(id).then(
          p => ( cache[id] = p )
        )
        throw promise // triggers Suspense fallback
      }
      return data
    }
  }
}

const myPokemon = createResource(fetchData)

const PokemonInfo = ({pokemonName}) => {
  const pokemon = myPokemon.read(pokemonName)
  return <pre>{ JSON.stringify( pokemon || 'Unknown', null, 2) }</pre>
}

export default PokemonInfo