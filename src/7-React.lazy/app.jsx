/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState } from 'react'
import Tilt from './tilt'

const centered = css`
  display: grid;
  justify-content: center;
  align-items: center;
`

const useToggle = ( initialState = false ) => {
  const [isToggled, setIsToggled ] = useState(initialState)
  const toggle = () => setIsToggled( !isToggled )
  return [ isToggled, toggle ]
}

export default () => {
  const [ showTilt, setShowTilt ] = useToggle(false)

  console.log('show:', showTilt )

  return <div css={centered}>
    <label>
      show Tilt
      <input type='checkbox' checked={showTilt} onChange={ setShowTilt } />
    </label>
    <Tilt>
      <div css={centered}>I'm Tilting...</div>
    </Tilt>
  </div>
}