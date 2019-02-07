/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState, useRef, useEffect } from 'react'

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

const useInterval = (callback, delay ) => {

  const savedCallback = useRef()

  // reset callback reference on mount and after EVERY re-paint
  useEffect( () => {
    savedCallback.current = callback
  })

  // set & clear timer (reset ONLY on delay change)
  useEffect( () => {
    if( delay !== null ) {
      let timer = setInterval( () => savedCallback.current(), delay )
      return () => clearInterval(timer) // clean up before reset and on unmount
    }
  }, [delay] )
}

const Stopwatch = () => {

  let [count, setCount] = useState(0);
  let [isRunning, setIsRunning] = useState(false);

  useInterval( () => {
    setCount(count + 1);
  }, isRunning ? 0 : null );

  const reset = () => {
    setIsRunning(false)
    setCount(0)
  }

  const toggleStartStop = () => {
    setIsRunning( !isRunning )
    /*
    if ( running ) {
      clearInterval( timerRef.current )
    } else {
      const timeStarted = Date.now()
      timerRef.current = setInterval( () => {
        setTimeElapsed( Date.now() - timeStarted )
      }, 0 )
    }
    setRunning(!running)
    */
  }

  return <div css={css`text-align: center;`}>
    <label css={labelStyle}>{`${count}`}</label>
    <button css={buttonStyle} onClick={toggleStartStop}>{ isRunning ? 'Stop' : 'Start' }</button>
    <button css={buttonStyle} onClick={reset}>Reset</button>
  </div>
}

export default Stopwatch