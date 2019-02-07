/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { useStopwatch } from './stopwatch-hook'

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

const DifferenceCounter = () => {

  const s1 = useStopwatch()
  const s2 = useStopwatch()
  const diff = s1.timeElapsed - s2.timeElapsed

  return <div css={css`text-align: center;`}>
    <label css={labelStyle}>{`${s1.timeElapsed}ms`}</label>
    <button css={buttonStyle} onClick={s1.toggleStartStop}>{ s1.running ? 'Stop' : 'Start' }</button>
    <button css={buttonStyle} onClick={s1.resetTimer}>Reset</button>
    <hr/>
      <span>difference: <strong>{ `${diff}ms` }</strong></span>
    <hr/>
    <label css={labelStyle}>{`${s2.timeElapsed}ms`}</label>
    <button css={buttonStyle} onClick={s2.toggleStartStop}>{ s2.running ? 'Stop' : 'Start' }</button>
    <button css={buttonStyle} onClick={s2.resetTimer}>Reset</button>
  </div>
}

export default DifferenceCounter