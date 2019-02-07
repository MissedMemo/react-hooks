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

const useInterval = (callback, delay) => {

  const savedCallback = useRef()

  // reset callback reference on every call
  useEffect( () => {
    savedCallback.current = callback
  })

  // set & clear timer (reset on delay change)
  useEffect( () => {
    if( delay !== null ) {
      let timer = setInterval( () => savedCallback.current(), delay )
      return () => clearInterval(timer) // clean up on unmount
    }
  }, [delay] )
}

const Stopwatch = () => {

  let [count, setCount] = useState(0);
  let [running, setRunning] = useState(false);

  useInterval( () => {
    // Your custom logic here
    setCount(count + 1);
  }, running ? 100 : null );

  const toggleStartStop = () => {
    setRunning(!running)
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
    <button css={buttonStyle} onClick={toggleStartStop}>{ running ? 'Stop' : 'Start' }</button>
  </div>
}

export default Stopwatch