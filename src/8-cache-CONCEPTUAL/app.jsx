/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState } from 'react'
import PokemonInfo, { fetchData } from './pokemon'

const centered = css`
  display: grid;
  justify-content: center;
  align-items: center;
`

export default () => {

  const [ pokemonName, setPokemonName ] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    setPokemonName( e.target.elements.characterName.value )
  }

  return <div css={centered}>
    <form onSubmit={handleSubmit}>
      <label htmlFor='input-name'>Character (eg. Pikachu etc.)</label><br/>
      <input id='input-name' name='characterName' />
      <button type='submit'>Submit</button>
    </form>
    <div>
      { pokemonName && <PokemonInfo pokemonName={pokemonName} /> }
    </div>
  </div>
}