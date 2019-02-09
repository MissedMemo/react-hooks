import React, { useState } from 'react'
import Upper from './upper'

export default () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return <>
    <label htmlFor='firstname' >{ `First Name: ` }</label>
    <input id='firstname' onChange={ e => setFirstName(e.target.value) } />
    <Upper>{ firstName }</Upper>
    <hr/>
    <label htmlFor='lastname' >{ `Last Name: ` }</label>
    <input id='lastname' onChange={ e => setLastName(e.target.value) } />
    <Upper>{ lastName }</Upper>
  </>
}