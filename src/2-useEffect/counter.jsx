import React, { useState } from 'react'

/*
const Counter = () => {

  const [count, setCount] = useState(0)

  const increment = () => setCount( count +1 )

  return <button onClick={ increment }>{ `You clicked ${count} times so far...` }</button>
}
*/

// refactor as CUSTOM hook, with passed component properties

const useCounter = initialValue => {
  const [count, setCount] = useState( initialValue )
  const increment = () => setCount( count +1 )
  return { count, increment }
}

const Counter = ({initialValue = 0}) => {
  const { count, increment } = useCounter( initialValue )
  return <button onClick={ increment }>{ `You've clicked ${count} times!` }</button>
}

export default Counter