/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState, useRef } from 'react'

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

const Stopwatch = () => {

  const [timeElapsed, setTimeElapsed] = useState(0)
  const [running, setRunning] = useState(false)
  const timerRef = useRef(null)

  const toggleStartStop = () => {
    if ( running ) {
      clearInterval( timerRef.current )
    } else {
      const timeStarted = Date.now()
      timerRef.current = setInterval( () => {
        setTimeElapsed( Date.now() - timeStarted )
      }, 0 )
    }
    setRunning(!running)
  }

  return <div css={css`text-align: center;`}>
    <label css={labelStyle}>{`${timeElapsed}ms`}</label>
    <button css={buttonStyle} onClick={toggleStartStop}>{ running ? 'Stop' : 'Start' }</button>
    <button css={buttonStyle}>Reset</button>
  </div>
}

export default Stopwatch