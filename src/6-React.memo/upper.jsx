import React, { memo, useState } from 'react'

const inlineStyle = { fontSize: '24px', color: 'blue' }

const Upper = memo ( ({children}) => {

  const [count, setCount] = useState(0)

  const clickHandler = () => setCount( count +1 )

  console.log('rendering:', children)

  return <div>
    Upcased: <span style={inlineStyle}>{ children.toUpperCase() } </span>
    <button onClick={ clickHandler }>{count}</button>
  </div>
})

export default Upper