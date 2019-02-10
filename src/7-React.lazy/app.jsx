/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState } from 'react'
import Tilt from './tilt'

const centered = css`
  display: grid;
  justify-content: center;
  align-items: center;
`

export default () => {
  const [ showTilt, setShowTilt ] = useState(false)

  const toggleTilt = () => setShowTilt( !showTilt )

  console.log('show:', showTilt )

  return <div css={centered}>
    <label>
      show Tilt
      <input type='checkbox' checked={showTilt} onChange={ toggleTilt } />
    </label>
    <Tilt>
      <div css={centered}>I'm Tilting...</div>
    </Tilt>
  </div>
}