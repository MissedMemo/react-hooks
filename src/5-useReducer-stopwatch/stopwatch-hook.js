import React, { useReducer, useRef, useEffect } from 'react'

const reducer = ( currentState, newState ) => ({ ...currentState, ...newState })

export const useStopwatch = () => {

  const [{ timeElapsed, running }, setState] = useReducer( reducer, { timeElapsed: 0, running: false } )
  const timerRef = useRef(null)

  // clean up on unMount (empty dependencies array ensures this is only defined ONCE!)
  useEffect( () => {
    return () => clearInterval( timerRef.current )
  }, [] )

  const toggleStartStop = () => {
    if ( running ) {
      clearInterval( timerRef.current )
    } else {
      const timeStarted = Date.now()
      timerRef.current = setInterval( () => {
        setState({ timeElapsed: Date.now() - timeStarted })
      }, 0 )
    }
    setState({ running: !running })
  }

  const resetTimer = () => {
    clearInterval( timerRef.current )
    setState({ running: false, timeElapsed: 0})
  }

  return { timeElapsed, toggleStartStop, resetTimer }
}
