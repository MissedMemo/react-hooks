import React from 'react'


export const fetchData = name => {

  const pokemonQuery = `
    query($name: String) {
      pokemon(name: $name) {
        id
        number
        name
        attacks {
          special {
            name
            type
            damage
          }
        }
      }
    }
  `

  return fetch( 'https://graphql-pokemon.now.sh', {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
      query: pokemonQuery,
      variables: {name}
    })
  })
  .then( r => r.json() )
  .then( response => response.data.pokemon )
}


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