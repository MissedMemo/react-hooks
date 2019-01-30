import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

  const increment = () => setCount( count +1 )

  return <button onClick={ increment }>{ `You clicked ${count} times so far...` }</button>
}

export default Counter