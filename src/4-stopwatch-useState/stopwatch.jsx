/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState } from 'react'

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

  const lapse = 0

  return <div css={css`text-align: center;`}>
    <label css={labelStyle}>{`${lapse}ms`}</label>
    <button css={buttonStyle}>Start</button>
    <button css={buttonStyle}>Reset</button>
  </div>
}

export default Stopwatch