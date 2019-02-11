
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
