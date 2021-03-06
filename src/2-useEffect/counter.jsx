import React, { useState, useEffect } from 'react'

const useCounter = initialValue => {

   // runs only on FIRST render! (vs. simple assignment, run on EVERY render )
  const value = () => Number( localStorage.getItem('count') || initialValue )

  const [count, setCount] = useState( value )
  const increment = () => setCount( count +1 )

  // optional array arg specifies values to watch for change, skipping actions otherwise
  useEffect( ()=> {
    localStorage.setItem( 'count', count )
  }, [count] )

  return { count, increment }
}

const Counter = ({initialValue = 0}) => {
  const { count, increment } = useCounter( initialValue )
  return <button onClick={ increment }>{ `You've clicked ${count} times!` }</button>
}

export default Counter