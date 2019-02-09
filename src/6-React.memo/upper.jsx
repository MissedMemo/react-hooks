import React, { useState } from 'react'

const inlineStyle = { fontSize: '24px', color: 'blue' }

const Upper = ({children}) => {
  console.log(children)
  return <div style={inlineStyle}>
    { children.toUpperCase() }
  </div>
}

export default Upper