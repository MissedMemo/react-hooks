/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useReducer, useRef, useEffect } from 'react'

const labelStyle = css`
  font-size: 5em;
  display: block;
`

const buttonStyle = css`
  display: block;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 2em;
  padding: 15px;
  margin: 5px;
  width: 200px;
`

const reducer = (state, action) => {
  switch( action.type ) {
    case 'UPDATE_ELAPSED_TIME':
      return { ...state, timeElapsed: action.payload }
      break
    case 'TOGGLE_RUNSTATE':
      return { ...state, running: !state.running }
      break
    case 'CLEAR':
      return { ...state, running: false, timeElapsed: 0 }
      break
    default:
      return state
      break
  }
}

const Stopwatch = () => {

  const [{ timeElapsed, running }, dispatch] = useReducer( reducer, { timeElapsed: 0, running: false })
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
        dispatch({type: 'UPDATE_ELAPSED_TIME', payload: Date.now() - timeStarted })
      }, 0 )
    }
    dispatch({type: 'TOGGLE_RUNSTATE'})
  }

  const resetTimer = () => {
    clearInterval( timerRef.current )
    dispatch({type: 'CLEAR'})
  }

  return <div css={css`text-align: center;`}>
    <label css={labelStyle}>{`${timeElapsed}ms`}</label>
    <button css={buttonStyle} onClick={toggleStartStop}>{ running ? 'Stop' : 'Start' }</button>
    <button css={buttonStyle} onClick={resetTimer}>Reset</button>
  </div>
}

export default Stopwatch