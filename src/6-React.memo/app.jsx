import React, { useState } from 'react'
import Upper from './upper'

export default () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return <>
    <label htmlFor='firstname-input' >FirstName</label>
    <input id='firstname-input' onChange={ e => setFirstName(e.target.value) } />
    <Upper>{ firstName }</Upper>
  </>
}