import React, { useState } from 'react'

const Stopwatch = () => {

  const lapse = 0

  return <div style={{textAlign: 'center'}}>
    <label style={{labelStyle}}>0ms</label>
    <button style={{buttonStyle}}>Start</button>
    <button style={{btnStyle}}>Reset</button>
  </div>
}

const labelStyle = {
  fontSize: '5em',
  display: 'block',
}

const buttonStyle = {
  display: 'block',
  backgroundColor: 'lightblue',
}

const btnStyle = {
  display: 'block',
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
}

export default Stopwatch